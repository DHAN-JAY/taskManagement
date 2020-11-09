import React from 'react'
import InputButton from '../InputButton'
import CustomModal from '../CustomModal'
import commonStyles from '../styles/common'

/**
 * Used to show confirmation dialog with two button continue and cancel.
 * It also show a message about the acion to be performed after continue click.
 @returns {*}
 @typedef Message(string) value to be shown as a message in dialog 
 @typedef Label(string) value to show as a label
 @param {{
    heading Label
    message Message,
    okText Label,
    cancelText Label
    open Boolean
 }} props
*/

const CreateTaskModule = ({ message, heading, okText, cancelText, onContinueClick, onCancelClick, open }) => {
    const commonClasses = commonStyles()

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
            <span>{message}</span>
        )
    }

    return (
        <CustomModal 
            open={open}
            heading={heading || "Confirmation Dialog"}
            closeModal={onCancelClick}
            component={bodyComponent}
            footerComponent={footerComponent}
        />
    )

}

export default CreateTaskModule
