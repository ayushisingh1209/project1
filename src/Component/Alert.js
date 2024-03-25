import React from 'react'

export default function Alert(props) {
    const capitalise = (word)=>{
        const newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase() + newword.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong> :{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
