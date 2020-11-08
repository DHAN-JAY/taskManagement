import { Record } from 'immutable'

export const MessageToasterActionTypes = {
    CLOSE_MESSAGE_TOASTER: 'CLOSE_MESSAGE_TOASTER',
    SHOW_MESSAGE_TOASTER: 'SHOW_MESSAGE_TOASTER',
}

export const MessageToasterRecords = Record({
    messageList: []
})

export const TOASTER_CLASSES_ICON = [
    {container: "success-popup-container", closeIconColor: 'green', icon: "sicon pulse", label: "Success!", iconClass: "icon-interface"},
    {container: "error-popup-container", closeIconColor: 'red', icon: "eicon pulse-error", label: "Error!", iconClass: "icon-shapes"},
    {container: "warning-popup-container", closeIconColor: '#FF9800', icon: "wicon pulse-warning", label: "Warning!", iconClass: "icon-signs"},
]