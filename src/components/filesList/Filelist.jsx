import React from 'react'
import MyDropzone from '../dropzone/Dropzone'
import { GoPlus } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import { DiJavascript1 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import "../TextArea/style.scss"

const Filelist = ({files ,onDrop}) => {

  return (
    <div className='filelist'>
      
       
       {files.map((v,i)=>{
        let icon ;
        switch (v.type) {
          case "text/html":
            icon = <FaHtml5 />
            break;
        case "text/css":
              icon = <FaCss3Alt />
              break;
        case "text/javascript":
              icon = <DiJavascript1 />
          break;
          default:
            icon = <CiFileOn/>
        }

        return  <div className='file-icons' key={i} >
          {v.type.indexOf("image")==! -1
          ? <img className='img-icon' src={URL.createObjectURL(v)} /> :
          <>
          {icon}
            <span className='text'>{v.name.length < 10 ? v.name : v.name.slice(0,10)+ v.name.slice(v.name.lastIndexOf("."))}</span>
          </>
          }
            </div>
       })}
       {/* .length < 10 ? v.type : v.name.slice(0,10)}{v.name.slice(v.name.lastIndexOf(".")) */}
       
    <div className='add'>
        <MyDropzone onDrop={onDrop}  textElement={
           <span  className='add-more-files'>
            <GoPlus />
            <p>Add File</p>
            <span>(up to 5mb)</span>
           </span>
        }/>
    </div>
    </div>
  )
}

export default Filelist