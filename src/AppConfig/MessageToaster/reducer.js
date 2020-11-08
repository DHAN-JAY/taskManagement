import { MessageToasterActionTypes, MessageToasterRecords } from './constants'

const initialState = new MessageToasterRecords()

const toaster = (state = initialState, action) => {
  let filterMessage = []

  switch (action.type) {
    case MessageToasterActionTypes.SHOW_MESSAGE_TOASTER:
        filterMessage = state.get('messageList')
        filterMessage.push({...action.message, 
          key: action.message && action.message.text && action.message.text.substring(0,5)+ "-"+ Math.random() + '-'+ filterMessage.length,
          time: (new Date()).getTime()
         })

        return state.set('messageList', [...filterMessage])
    case MessageToasterActionTypes.CLOSE_MESSAGE_TOASTER:
        filterMessage = state.get('messageList').filter((message) => message.key !== action.key)

        return state.set('messageList', filterMessage)
    default:
      return state
  }
}

export default toaster