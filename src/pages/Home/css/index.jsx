import React, { useState } from 'react'
import LOGO from "../../../assets/images/logo.svg"
import "../css/style.scss"
import TEXTCOLOR from "../../../assets/images/text-color.svg";
import TEXTGREY from "../../../assets/images/text-grey.svg";
import FILECOLOR from "../../../assets/images/files-color.svg";
import FILEGREY from "../../../assets/images/files-grey.svg";
import Textarea from '../../../components/TextArea/Textarea';
import Button from '../../../components/TextArea/Button';
import MyDropzone from '../../../components/dropzone/Dropzone';
import Filelist from '../../../components/filesList/Filelist';
import { MdDelete } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

const Home = () => {
    const [type, setType] = useState("text")
    const [textValue, setTextValue] = useState("text")
    const [files, setFiles] = useState([])


    const onDrop = acceptedFiles => {
        setFiles([...files, ...acceptedFiles])
    }

    
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?[\w-]+\.\w{2,}(?:\.\w{2,})?(?:\/[\w-./?%&=#]*)?/g;
    const urls = textValue.match(urlRegex) || [];


    return (
        <div className='container'>
            <div className='header-bar'>
                <div className='logo'>
                    <img src={LOGO} alt="logo" />
                </div>
                <div className='menu-bar'>
                    <ul>
                        <li>How it works</li>
                        <li>Downloads</li>
                        <li>Upgrade</li>
                        <li>FeedBack</li>
                        <li className='menu-btn'>Login/Register</li>
                    </ul>
                </div>
            </div>
            <div className='main-card'>
                <div className='side-bar'>
                    <div onClick={() => setType("text")} className='text-img'>
                        <img src={type === "text" ? TEXTCOLOR : TEXTGREY} alt="" />
                    </div>
                    <div onClick={() => setType("files")} className='file-img'>
                        <img src={type === "files" ? FILECOLOR : FILEGREY} alt="" />
                    </div>
                </div>
                <div className='card-content'>
                    {type === "text" ? <div className='text-section'>
                        <h1>Text</h1>
                        <div className='textarea'>
                            <Textarea onChange={(e) => setTextValue(e.target.value)} value={textValue} />
                        </div>
                        <div className='text-footer'>
                            <div>
                                
                                   {urls.map((url,i)=>{
                                    return <div key={i}>
                                        <span>
                                        <a href={url} target='_blank'>{url}</a>

                                        </span>
                                    </div>
                                    
                                   })}
                            </div>

                            <div className='button'>

                                <span>Clear</span>
                                <Button disabled={textValue ? false : true} name="Save" />
                            </div>
                        </div>
                    </div>

                        :
                        <div className='files-content' >
                            <div className='files'><h1>Files</h1>
                                {files.length > 0 ? <div className='btn'>
                                    <button className='down' ><FaDownload />Download  All</button>
                                    <button className='del' onClick={() => setFiles([])}><MdDelete /> Delete All</button>
                                </div> : null}
                            </div>


                            {files.length ? < Filelist files={files} onDrop={onDrop} /> :
                                <MyDropzone onDrop={onDrop} textElement={<span>
                                    Drag and drop any files up to 2 files, 5Mbs each or <span >Browse
                                        Upgrade</span>  to get more space
                                </span>} />
                            }

                        </div>}
                </div>

            </div>
        </div>
    )
}

export default Home