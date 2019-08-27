import React, { useState } from "react";
import Event from "./Event";
import { ButtonContainer } from "../Button";

export default function Events(props) {
  const { yours,followings } = props.item;
  const [state , setState] = useState({
    isClickedYours : false,
    isClickedFollowings : false
  })
  const onYoursClick=()=>{
    setState({
      isClickedYours : !state.isClickedYours
    })
  }

  const onFollowingsClick=()=>{
    setState({
      isClickedFollowings : !state.isClickedFollowings
    })
  }

  return (
        <div className="my-2 text-capitalize text-center">
          <h4 className="py-1">Event</h4>
          <div>
            <ButtonContainer className="btn-primary" onClick={onYoursClick}>yours</ButtonContainer>         
            <ButtonContainer className="btn-secondary" onClick={onFollowingsClick}>followings'</ButtonContainer>
        {
          state.isClickedYours && yours &&
          yours.map((item, index) => {
            return <Event key={index} item={item} />;
          })
        }
        {
          state.isClickedFollowings && followings &&
          followings.map((item, index) => {
            return <Event key={index} item={item} />;
          })
        }

          </div>
          
        </div>
  );
}

