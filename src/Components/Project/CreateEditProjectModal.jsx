import React, { useState } from 'react'
import CustomModal from '../Shared/CustomModal'
import InputButton from '../Shared/InputButton'
import commonStyles from '../Shared/styles/common'
import ProjectForm from './ProjectForm'

/**
 * Used to show confirmation dialog with two button continue and cancel.
 * It also show a message about the acion to be performed after continue click.
 @returns {*}
 @typedef Message(string) value to be shown as a message in dialog 
 @typedef Label(string) value to show as a label
 @param {{
    initialData InitialData
    heading Label
    message Message,
    okText Label,
    cancelText Label
    open Boolean
 }} props
*/

const CreateEditProjectModal = ({ edit, initialData, heading, okText, cancelText, onContinueClick, onCancelClick, open }) => {
    const commonClasses = commonStyles()
    const [values, setValues] = useState(edit ? {
        projectName: initialData && initialData.name,
        description: initialData && initialData.description,
        assignedManager: 0
    } :
      {
      projectName: "",
      description: "",
      assignedManager: 0
    });

    const footerComponent = () => {

        return (
            <div className={commonClasses.footerConfirmDialogContainer}>
                <InputButton
                    buttonStyle={commonClasses.cancelButton}
                    buttonProps={
                        {
                            type: 'button',
                            onClick: onCancelClick
                        }
                    }
                >
                    {cancelText || "Cancel"}
                </InputButton>
                <InputButton
                    buttonStyle={commonClasses.saveButton}
                    buttonProps={
                        {
                            type: 'button',
                            onClick: onContinueClick
                        }
                    }
                    rootProps={{
                        style: {
                            marginLeft: '16px'
                        }
                    }}
                >
                    {okText || "Continue"}
                </InputButton>
            </div>
        )
    }

    const bodyComponent = () => {

        return (
           <ProjectForm values={values} setValues={setValues} edit={edit} />
        )
    }

    return (
        <CustomModal 
            open={open}
            heading={heading || "Confirmation Dialog"}
            closeModal={onCancelClick}
            component={bodyComponent}
            width={300}
            footerComponent={footerComponent}
        />
    )

}

export default CreateEditProjectModal
