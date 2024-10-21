
type TPerson = {
    name: string
}

enum MessageTypes{
  response = 'response',
  message = 'message',
  typing = 'typing'
}

export type TMessage = {
    id: string
    from: TPerson
    type: MessageTypes | string
    time: string
    text?: string
}

export type TMessageProps = {
    message: TMessage
    from: TPerson
}

export type TMessageHistoryProps = {
  list: TMessage[]
} 

function Message({message, from}: TMessageProps) {     
    return (
      <>
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </>
    )
  }

  function Typing({message, from}: TMessageProps) {
    return (
      <>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
      <span className="message-data-time">{message.time}</span>
    </div>
    
  </>
    )
  }

  function Response({message, from}: TMessageProps) {     
    return (
      <>
        <div className="message-data align-left">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message my-message">
      {message.text}
    </div>
    </>
    )
  }

export default function MessageHistory({list} :TMessageHistoryProps) {  
  return (
    <ul>
    {list.map((message: TMessage) => {
    
      if (message.type == MessageTypes.response) {
        return (
        <li className="clearfix" key={message.id}>
        <Response message={message} from={message.from}/></li>
        )        
      } else if (message.type == MessageTypes.message) {
        return (
          <li className="clearfix" key={message.id}>
          <Message message={message} from={message.from}/></li>
        )
      } else if (message.type == MessageTypes.typing) {
        return (
          <li className="clearfix" key={message.id}>
          <Typing message={message} from={message.from}/></li>
        )
      }
    })}  
    </ul>
   )
}
