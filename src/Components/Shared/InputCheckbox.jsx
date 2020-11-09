import React from 'react'
import commonStyles from './styles/common'
import { Checkbox } from '@material-ui/core'

/**
 * Used to show a Checkbox with label.
 * It also triggers the checkbox select/unselect events.
 @returns {*}
 @typedef ComponentProps(object) This is the object to pass props to the specific child component.
 @param {{
    rootProps ComponentProps
    containLabel Boolean,
    labelProps ComponentProps,
    checkboxProps ComponentProps,
    label string,
 }} props
*/

const InputCheckbox = (props) => {
    const commonClasses = commonStyles()

    return (
        <React.Fragment>
            <div {...props.rootProps} className={commonClasses.formInputRoot}>
                <Checkbox
                    {...props.checkboxProps}
                />
                {props.containLabel &&
                    <label {...props.labelProps} className={commonClasses.formInputLabel}> {props.label} </label>
                }
            </div>
        </React.Fragment>
    )
}

export default InputCheckbox