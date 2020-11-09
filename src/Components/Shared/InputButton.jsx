import React from 'react'
import commonStyles from './styles/common'

/**
 * Used to show a button with label.
 * It also triggers the button click events.
 @returns {*}
 @typedef ComponentProps(object) This is the object to pass props to the specific child component.
 @typedef StyleObject(object) this is used style the specific child component
 @typedef Component(object) This is the React component which is being placed into desired position
 @param {{
    rootProps ComponentProps
    containLabel Boolean,
    labelProps ComponentProps,
    buttonProps ComponentProps,
    buttonStyle StyleObject,
    label string,
    endEndorement Boolen,
    endEndorementComponent Component
    children Object
 }} props
*/

const InputButton = (props) => {
    const commonClasses = commonStyles()

    return (
        <React.Fragment>
            <div {...props.rootProps} className={commonClasses.formInputRoot}>
                {props.containLabel &&
                    <label {...props.labelProps} className={commonClasses.formInputLabel}> {props.label} </label>
                }
                <button {...props.buttonProps} className={props.buttonStyle ? props.buttonStyle : commonClasses.inputButton} >
                    {props.children}
                </button>
                {props.endEndorement &&
                    <div className={commonClasses.endEndorement}>
                        {props.endEndorementComponent}
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default InputButton