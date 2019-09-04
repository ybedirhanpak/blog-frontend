import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import * as firebase from "firebase/app";

export default class UploadPost extends Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content, editor) {
    this.setState({ content });
  }

  render() {
    const firebaseConfig = {
      apiKey: "AIzaSyBx5B2V9gdp50VqssrryG-l6XmMW2n7gng",
      authDomain: "blog-d27b9.firebaseapp.com",
      databaseURL: "https://blog-d27b9.firebaseio.com",
      projectId: "blog-d27b9",
      storageBucket: "",
      messagingSenderId: "791103630123",
      appId: "1:791103630123:web:5dc9d4af3d1ac17b"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    return (
      <Editor
        apiKey="hrucxlytu0xtow5cmm84dcnn3q4p16ilfob62pfae4dfmws9"
        value={this.state.content}
        onEditorChange={this.handleEditorChange}
        init={{
          plugins:
            "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste imagetools wordcount",
          toolbar:
            "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image code",
          paste_data_images: true,
          images_upload_url: "postAcceptor.php",
          file_browser_callback_types: "image",
          images_upload_handler: function(blobInfo, success, failure) {
            console.log("blobInfo", blobInfo);
            // setTimeout(function() {
            // var reader = new FileReader();
            // reader.readAsDataURL(blobInfo.blob);
            // reader.onloadend = function() {
            // const base64data = reader.result;
            // console.log(base64data);
            // }
            //    success(blobInfo.base64);
            // }, 2000);
          }
        }}
      />
    );
  }
}
