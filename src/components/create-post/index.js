import ReactQuill from "react-quill";
import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    console.log(this.state.text);
    console.log(typeof this.state.text);
    return (
      <>
        <section class="banner-area relative">
          <div class="overlay overlay-bg" />
          <div class="container box_1170">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="about-content col-lg-12">
                <h1 class="text-white">Blog Post Details</h1>
                <p class="text-white link-nav">
                  <a href="index.html">Home </a>{" "}
                  <span class="lnr lnr-arrow-right" />
                  <a href="#"> Blog</a> <span class="lnr lnr-arrow-right" />
                  <a href="blog-details.html"> Blog Details</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <ReactQuill
          modules={index.modules}
          formats={index.formats}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
      </>
    );
  }
}

index.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video", "blockquote"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
index.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];
