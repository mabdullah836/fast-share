import React, { useRef } from 'react'
import "../TextArea/style.scss"

const Textarea = ({onChange}) => {

    const textareaRef = useRef()
    function resizeTextArea() {
        textareaRef.current.style.height = "54px";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 12 + "px";
    }
  return (
    
    <textarea onChange={onChange} ref={textareaRef} onInput={resizeTextArea} className="textarea" placeholder='Type something...' ></textarea>
  )
}

export default Textarea