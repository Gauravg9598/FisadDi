import React from 'react'
const captiliaze =(word) =>{
    let lower = word.toLowerCase();
    let newWord = lower.charAt(0).toUpperCase() + lower.slice(1);
    return newWord; 
}
function Alert(props) {
  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{captiliaze(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert
