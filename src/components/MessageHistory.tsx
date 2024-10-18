
type TPerson = {
    name: string
}

enum MessageTypes{
  response = 'response',
  message = 'message',
  typing = 'typing'
}

type TMessage = {
    id: string
    from: TPerson
    type: MessageTypes | string
    time: string
    text?: string
}

type TMessageProps = {
    message: TMessage
    from: TPerson
}

export type TMessageHistoryProps = TMessage[]

function Message({message, from}: TMessageProps) {     
    return (
      <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
    )
  }

  function Typing({message, from}: TMessageProps) {
    return (
      <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
      <span className="message-data-time">{message.time}</span>
    </div>
    
  </li>
    )
  }

  function Response({message, from}: TMessageProps) {     
    return (
      <li className="clearfix">
        <div className="message-data align-left">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message my-message">
      {message.text}
    </div>
    </li>
    )
  }

export default function MessageHistory({list}: TMessageHistoryProps) {
  return (
    <ul>
    {list.map((message: TMessage) => {
      if (message.type == MessageTypes.response) {
        return (
          <Response message={message} from={message.from}/>
        )
      } else if (message.type == MessageTypes.message) {
        return (
          <Message message={message} from={message.from}/>
        )
      } else if (message.type == MessageTypes.typing) {
        return (
          <Typing message={message} from={message.from}/>
        )
      }
    })}  
    </ul>
   )
}
