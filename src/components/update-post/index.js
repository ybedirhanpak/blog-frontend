import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { Link } from "react-router-dom";

import "../create-post/text-editor/editor.scss";

const titleEditorConfiguration = {
  toolbar: ["heading"],
  placeholder: "Title",
  heading: {
    options: [
      {
        model: "heading1",
        view: "h2",
        title: "Main Heading",
        class: "ck-heading_heading1"
      }
    ]
  }
};

export default function UpdatePost(props) {

  const {title,content} = props;
  const [state , setState] = useState({
    title:title,
    content:content
  })

  console.log(props.location.state.content)
  
    return (
      <div className="row editor-wrapper">
        <div className="col-sm-2 col-md-3 col-xl-2" />
        <div className="col-sm-8 col-md-6 col-xl-8">
          <h2 className="heading">You can start to write!</h2>
          <div className="editor-frame title-wrapper mt-5" style={{textAlign:"center"}}>
            <CKEditor
              editor={InlineEditor}
              config={titleEditorConfiguration}
              data={props.location.state.title}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const title = editor.getData();
                setState({
                  title: title
                });
              }}
            />
          </div>
          <div className="editor-frame mt-3">
            <CKEditor
              editor={InlineEditor}
 
              data={props.location.state.content}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const content = editor.getData();
                console.log({ content });
                setState({
                  content:{content}
                });
              }}
            />
          </div>
          <div className=" button-wrapper mt-10">
            <Link
              to={{
                pathname: "/post-preview",
                state: {
                  title: {title},
                  content: {content}
                }
              }}
            >
              <button
                href=""
                className="genric-btn primary-border circle arrow"
              >
                Preview
              </button>
            </Link>

            <button href="" className="genric-btn primary-border circle arrow">
              Submit
              <span className="lnr lnr-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-sm-2 col-md-3 col-xl-2" />
      </div>
    );
  }


