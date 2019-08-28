import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import ShowMoreText from 'react-show-more-text';

export default function UserPost(props)
{
    const {thumbImage,title,content} = props.item;

    const onDelete = () => {
        var answer = window.confirm("Delete post?")
        if (answer) {
            //some code
        }
        else {
            //some code
        }
    }

    return(
        <div className="row my-2 text-capitalize text-center mx-auto">
            <div className="col-10 mx-auto col-lg-2">
                <img src={thumbImage} style={{width:'5rem',height:"5rem"}} className="img-fluid"
                alt="user" />                
            </div>
            <div className="col-10 mx-auto post">
                <div className="mx-auto text-left text-title">
                    {title}
                    <div className="dropdown">
                        <button type="button" className="btn btn-default" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ float: "right", background: "transparent" }}>
                            <span className="glyphicon glyphicon-option-horizontal"></span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">                           
                            <Link to={{pathname:"/update-post",state:{
                                title,
                                content
                            }}} className="dropdown-item btn">Update</Link>                               
                            <button type="button" className="dropdown-item delete" onClick={onDelete}>Delete</button>
                        </div>
                    </div>
                    <Modal item={props.item}/>
                    
                </div>

                <span>
                <ShowMoreText
                lines={5}
                more='Show more'
                less='Show less'
                expanded={false}
                >
                {content}
            </ShowMoreText>
            </span>
            </div>
        </div>
    )
}