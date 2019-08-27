import React, { useState, Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import ReactCrop from "react-image-crop";
import { ButtonContainer } from './Button';
import "react-image-crop/dist/ReactCrop.css";

export default class Modal extends Component {

    constructor(props){
        super(props);
    }

    state = {
        imgSrc: null,
        crop: {
          x: 10,
          y: 10,
          width: 80,
          height: 80
        }
      };

      onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener("load", () =>
            this.setState({ src: reader.result })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    onImageLoaded = image => {
        this.imageRef = image;
      };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
      };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop,
            "newFile.jpeg"
          );
          this.setState({ croppedImageUrl });
        }
      }

    getCroppedImg=(image, crop, fileName) => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
        return new Promise((resolve, reject) => {
          canvas.toBlob(blob => {
            if (!blob) {
              //reject(new Error('Canvas is empty'));
              console.error("Canvas is empty");
              return;
            }
            blob.name = fileName;
            window.URL.revokeObjectURL(this.fileUrl);
            this.fileUrl = window.URL.createObjectURL(blob);
            resolve(this.fileUrl);
          }, "image/jpeg");
        });
      }
    
    render(){
    if(this.props.item){
        
    const {thumbImage,details,title} = this.props.item;
    
    return (
        <div className="modal fade" id="postToUpdate" data-target="#postToUpdate">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header orange">

                        <img src={thumbImage} style={{ width: '5rem', height: "5rem" }} className="img-fluid mr-4 my-auto" alt="user" />

                        <span><h4 className="modal-title py-1"><strong>{title}</strong></h4>
                            <TextareaAutosize defaultValue={details} rows={8} cols={50} />
                        </span>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    
    else if(this.props.info){
        
        const {image,description} = this.props.info;
        
        

        const { crop, croppedImageUrl, srcImg } = this.state;  

        return(
        <div className="modal fade" id="editProfile" data-target="#editProfile">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div class="modal-header orange">
                        
                        <input type="file" onChange={this.onSelectFile} /> 
                        {this.imgSrc && (
          <ReactCrop
            src={srcImg}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
        )}
                        <span>
                            <TextareaAutosize defaultValue={description} rows={8} cols={40} />
                        </span>
                        
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            &times;
                        </button>
                    </div>
                </div>
                <div className="modal-footer">
                    <ButtonContainer className="btn-primary">Save Changes</ButtonContainer>
                    <ButtonContainer data-dismiss="modal" className="btn-danger">Cancel</ButtonContainer>
                </div>
            </div>
        </div>
        );
    }
}
}