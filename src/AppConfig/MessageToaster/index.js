import React, { useState, useEffect } from 'react'
import MessageContainer from './MessageContainer'
import toaster from './actions'
import { connect } from 'react-redux'

const MessageToaster = ({ messageList, dispatch }) => {
    const [messages, updateMessageList] = useState([])
    const current = {
        top: 30
    }

    useEffect(() => {
        updateMessageList([...messageList])
    }, [messageList])


    if(!messages || !messages.length){
        return <div style={{ position: 'absolute', display: 'none'}}></div>
    }


    return (
        <React.Fragment>
            {messages && messages.length &&
                messages.map((message, index) => {

                    return (
                        <MessageContainer 
                            key={message.key}
                            keyText={message.key} 
                            onClose={() => {dispatch(toaster.close(message.key))}} 
                            message={message.text} 
                            error={message.error} 
                            time={message.time}
                            current={current} 
                            index={index} 
                        />
                    )
                })
            }
        </React.Fragment>
    )
}

const mapStateToProps = ({ toaster }) => {

    return {
        messageList: toaster.messageList
    }
}

export default connect(mapStateToProps)(MessageToaster)