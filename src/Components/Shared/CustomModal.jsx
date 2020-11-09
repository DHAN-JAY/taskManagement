import React from 'react'
import commonStyles from './styles/common'
import CustomIcon from './CustomIcon'
import { ICON_NAME } from '../../AppConfig/constants'
import './modal.styles.css'

/**
 * Used to show a modal with configured different components.
 * It took Component and FooterComponent place it to desired position in the modal.
 @returns {*}
 @typedef Component(object) This the main body component of the modal
 @typedef FooterComponent(object) This component is used to show the footer of the Modal
 @typedef Data(object) Data which is being passed for the modal components
 @typedef Function(function) function to close the modal
 @typedef Heading(string) string label to show on the top header
 @param {{
    component Component
    footerComponent FooterComponent,
    data Data,
    closeModal Function,
    heading Heading,
    width Number
    open Boolen
 }} props
*/

const CustomModal = (props) => {

    const { 
        component: Component, 
        footerComponent: FooterComponent,
        data, 
        closeModal, 
        heading, 
        width, 
        open 
    } = props
    const commonClasses = commonStyles()

    if(!open){
        return null;
    }

    return (
        <div className="modal-main-container">
            <div className="modal-container">
                <div style={{ width: width + 'px'}} className={commonClasses.modalHeader}>
                    <span className={commonClasses.modalHeadingText}>{heading}</span>
                    <CustomIcon onClick={closeModal} name={ICON_NAME.CLOSE_APP_MAIN_MENU} className="close-modal-icon" />
                </div>
                <div style={{ width: width + 'px'}} className={commonClasses.modalBody}>
                    {Component ?
                    <Component closeModal={closeModal} data={data} />:
                    null
                    }
                </div>
                <div className={commonClasses.modalFooter}>
                    {FooterComponent ?
                        <FooterComponent closeModal={closeModal} data={data} />:
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomModal