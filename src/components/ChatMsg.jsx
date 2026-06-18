function ChatMsg({msg}){

  return(

    <div>
      {msg.user && <p className="user">{msg.user}</p>}
      {msg.bot && <p className="bot">{msg.bot}</p>}
    </div>

  )
}

export default ChatMsg