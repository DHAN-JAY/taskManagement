import React, { useEffect } from 'react'
import CustomIcon from '../../Components/Shared/CustomIcon'
import { ICON_NAME } from '../constants'
import { TOASTER_CLASSES_ICON } from './constants'
import './toaster.styles.css'
const TIMEOUT = 5400

const MessageContainer = (props) => {
    const { message, index, error, current, onClose, keyText, time } = props
    const toast_style = TOASTER_CLASSES_ICON[error];

    const style = {
        top: '-200px',
        right: 10,
        minWidth: '300px',
        maxWidth: '600px',
        width: 'fit-content',
        minHeight: '50px',
        maxHeight: '200px',
        position: 'absolute',
        zIndex: 1800,
        transition: 'top 1s'
    }

    useEffect(
        () => {
           setTimeout(() => {
                if( document.getElementById('message-container-'+ keyText + index)){
                    document.getElementById('message-container-'+ keyText + index).style.top = (current.top + 10) + 'px'
                    current.top = current.top + 10 + document.getElementById('message-container-'+ keyText + index).offsetHeight
                }
            }, 100)
            let interval = setInterval(() => {
                if(new Date().getTime() - time >= TIMEOUT ){
                    onClose();
                }
            }, 100)
            return () => {
                if(interval){
                    clearInterval(interval)
                }
            }
        }, [current, keyText, index, onClose, time]
    )

    return (
        <div className={toast_style.container} key={keyText} id={'message-container-'+ keyText + index} style={style}  >
            <CustomIcon
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: toast_style.closeIconColor,
                }}
                name={ICON_NAME.close}  
            />
            <div className="message-sec">
                <p>{toast_style.label}</p>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default MessageContainer