import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ShowMoreText from 'react-show-more-text';
import ReactCrop from "react-image-crop";
import './custom-image-crop.css';
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from './ReusableUtils';
import { thisExpression } from '@babel/types';
const imageMaxSize = 1000000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()});

export default class Profile extends Component {

        constructor(props){
            super(props);
            this.imagePreviewCanvasRef = React.createRef();
            this.fileInputRef = React.createRef()
            this.state = {
            imgSrc: this.props.info.image,
            imgOrg: this.props.info.image,
            imgSrcExt: null,
            crop: {
                x: 10,
                y: 10,
                width: 80,
                height: 80,
                aspect: 1/1
            },
            isUpdateOpen : false
          };
        }

        openCropOptions = () => {
            const {isUpdateOpen} = this.state;
            this.setState({
                isUpdateOpen : !isUpdateOpen
            })
        }

        verifyFile = (files) => {
            if (files && files.length > 0){
                const currentFile = files[0]
                const currentFileType = currentFile.type
                const currentFileSize = currentFile.size
                if(currentFileSize > imageMaxSize) {
                    alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                    return false
                }
                if (!acceptedFileTypesArray.includes(currentFileType)){
                    alert("This file is not allowed. Only images are allowed.")
                    return false
                }
                return true
            }
        }
    
        handleOnDrop = (files, rejectedFiles) => {
            if (rejectedFiles && rejectedFiles.length > 0){
                this.verifyFile(rejectedFiles)
            }
    
    
            if (files && files.length > 0){
                 const isVerified = this.verifyFile(files)
                 if (isVerified){
                     // imageBase64Data 
                     const currentFile = files[0]
                     const myFileItemReader = new FileReader()
                     myFileItemReader.addEventListener("load", ()=>{
                         const myResult = myFileItemReader.result;
                         this.setState({
                             imgSrc: myResult,
                             imgOrg: myResult,
                             imgSrcExt: extractImageFileExtensionFromBase64(myResult)
                         })
                     }, false)
    
                     myFileItemReader.readAsDataURL(currentFile);
    
                 }
            }
        }

        handleDownloadClick = (event) => {
            event.preventDefault()
            const {imgSrc}  = this.state;
            if (imgSrc) {
                const canvasRef = this.imagePreviewCanvasRef.current
            
                const {imgSrcExt} =  this.state
                const imageData64 = canvasRef.toDataURL('image/' + imgSrcExt)
    
          
                const myFilename = "previewFile." + imgSrcExt;
    
                // file to be uploaded
                const myNewCroppedFile = base64StringtoFile(imageData64, myFilename)
                console.log(myNewCroppedFile)
                // download file
                downloadBase64File(imageData64, myFilename)
                this.handleClearToDefault()
            }
            
    
        }

        handleOnCropChange = (crop) =>{
            this.setState({crop:crop});
        }

        handleOnCropComplete = (crop, pixelCrop) => {
            const canvasRef = this.imagePreviewCanvasRef.current;
            const {imgSrc} = this.state;
            this.setState({
                imgOrg:imgSrc
            })
            image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
        }

        onImageLoaded = image => {
            this.imageRef = image;
          };

        handleUploadClick = (event) => {
            event.preventDefault();
            const {imgSrc} = this.state;
            const canvasRef = this.imagePreviewCanvasRef.current;
            const fileExtension = extractImageFileExtensionFromBase64(imgSrc);
            const imageData64 = canvasRef.toDataURL('image/' + fileExtension);
            const {isUpdateOpen} = this.state;
            
            this.setState({
                imgSrc : imageData64,
                isUpdateOpen : !isUpdateOpen
            })
        }

        

        handleClearToDefault = event =>{
            if (event) event.preventDefault()
            const canvas = this.imagePreviewCanvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height)
    
            this.setState({
                imgSrc: null,
                imgSrcExt: null,
                crop: {
                    aspect: 1/1
                }
    
            })
        }

        handleCancel = () =>{
            const {imgSrc,isUpdateOpen} = this.state;
            this.setState({
                imgSrc: imgSrc,
                isUpdateOpen: !isUpdateOpen
            })
        }

        render(){
        const { description } = this.props.info;

        const { imgSrc,imgOrg } = this.state;

        return (
            <div className="stayTop">
            <div className="my-2 mx-auto col-10">  
            {!this.state.isUpdateOpen  &&
                <div className="containerProfile">
                <img src={imgSrc} className="image" style={{width:"100%",height:"15rem",borderRadius:"25rem"}} />
                    <div className="middle">
                        <button className="text" type="button" onClick={this.openCropOptions}>Update</button>
                    </div>
                </div>   
            }  
                {this.state.isUpdateOpen && (imgSrc !== null ?
                <div style={{ textAlign: "center" }}>
                    <ReactCrop
                    imageStyle={{width:"15rem",height:"15rem"}}
                    src={imgOrg} 
                    crop={this.state.crop}
                    onComplete={this.handleOnCropComplete}
                    onChange={this.handleOnCropChange}
                    />
                    <canvas ref={this.imagePreviewCanvasRef} style={{display:"none"}}></canvas>                    
                    <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={this.handleUploadClick}>Save Change</button>
                    <button className="btn btn-secondary" onClick={this.handleClearToDefault}>Clear</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
                :
                <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes} multiple={false} maxSize={imageMaxSize}>Drop image here or click to upload</Dropzone>)
                }
                <ShowMoreText
                //Default options
                lines={3} more='Show more' less='Show less' anchorClass=''  
                expanded={false}
                >
                    {description}
                </ShowMoreText>
            </div>
            </div>
        );
        }
    }