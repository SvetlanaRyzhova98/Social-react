import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from 'react'   


 

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} url={d.url}/>  );
  let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id} />  );

  let sendMessage = () => {
    let send = sendText.current.value;
    alert(send)
  }
  let sendText = React.createRef();

  return (
    <div className={d.dialogsBox}>
    <div className={d.dialogs}>
      <div className={d.dialogsItems }>
       {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
      </div>
    </div>
    <div className={d.sendBox}>
        <textarea ref={sendText} className={d.sendTextarea} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={sendMessage} className={d.sendBtn}>→</button>
      </div>
    </div>
  );
};
export default Dialogs;
