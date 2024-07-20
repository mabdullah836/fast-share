import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import "../TextArea/style.scss"
function MyDropzone({textElement ,onDrop}) {
 
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
   <div className='dropzone'>
     <div  {...getRootProps()}>
      <input {...getInputProps()} />
       <div>
       {textElement}
       </div>
    </div>
   </div>
  )
}


export default MyDropzone