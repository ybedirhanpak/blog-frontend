import React, { Component } from "react";
import AvatarEditor from "react-avatar-editor";
import { Link } from "react-router-dom";
import "./image-editor.scss";

export default class ImageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPicturePrev: "",
      photoZoom: "1.5",
      preview: {
        img: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  selectPhoto = event => {
    if (event.target.files) {
      this.setState({
        userPicturePrev: window.URL.createObjectURL(event.target.files[0])
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handleSave = data => {
    console.log("data", data);
    console.log("editor", this.editor);
    const canvas = this.editor.getImageScaledToCanvas();
    console.log("canvas", canvas);
    const img = this.editor.getImageScaledToCanvas().toDataURL();

    this.setState({ preview: { img } });
    console.log("deneme");
  };

  render() {
    console.log("image editor comp", this.handleSave);
    return (
      <div className="image-editor row">
        <div className="col-sm-12">
          <h4 className="mb-4">Choose your profile picture</h4>
          <div className="card special-card ">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="userPicturePrev"
                  name="userPicturePrev"
                  onChange={this.selectPhoto}
                />
                <label className="custom-file-label" for="userPicturePrev">
                  Choose your profile picture
                </label>
              </div>
            </div>

            <AvatarEditor
              ref={this.setEditorRef}
              image={this.state.userPicturePrev}
              width={200}
              height={200}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={this.state.photoZoom}
              rotate={0}
              className=""
            />

            <label htmlFor="">Zoom</label>
            <input
              type="range"
              step="0.01"
              min="1"
              max="2"
              name="photoZoom"
              onChange={this.handleChange}
              className="mb-10"
            />
          </div>
          <div className="button-wrapper">
            <Link to="/complete-register/user-details">
              <button
                href=""
                className="genric-btn primary-border circle arrow"
                onClick={this.handleSave}
              >
                Next
                <span className="lnr lnr-arrow-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
