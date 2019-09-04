import React, { Component,Fragment } from "react";
import PostList from "../../components/user/PostList";
import EventList from "../../components/user/EventList";
import Profile from "../../components/user/Profile";
import "../../components/user/style.css";
import "../../components/user/style.css";

export default class Account extends Component{
    constructor(props){
        super(props);
        this.state = {
                user:{
                    username:"",
                    description:"There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                    image:"img/author/a1.png"
                },
                postList: [
                    {
                      thumbImage: "img/archive/c1.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c2.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c3.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c4.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c1.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c2.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c3.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    },
                    {
                      thumbImage: "img/archive/c4.jpg",
                      title: "An Stormy Evening",
                      content:
                        "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
                      publishDate: "March 14, 2018",
                      commentCount: "05"
                    }
                  ],
                  events:{
                      yours: 
                    [
                      {
                        description: "someone commented someone's photo",
                        date: "March 14, 2018"
                      },
                      {
                        description: "someone commented someone's photo",
                        date: "March 14, 2018"
                      },
                      {
                        description: "someone commented someone's photo",
                        date: "March 14, 2018"
                      }
                    ],
                      followings: 
                    [
                      {
                        description: "someone liked someone's photo",
                        date: "March 14, 2018"
                      },
                      {
                        description: "someone liked someone's photo",
                        date: "March 14, 2018"
                      },
                      {
                        description: "someone liked someone's photo",
                        date: "March 14, 2018"
                      }
                    ]
                  },

              }
    }

    
    render(){
        return(
          <div className="row rowFix" style={{paddingTop:"6rem"}}>
            <div className="col-sm-12 col-md-3">
              <Profile info={this.state.user}  />
            </div>
            <div className="col-sm-12 col-md-6">
              <PostList value = {this.state} />
            </div>
            <div className="col-sm-12 col-md-3">
              <EventList item={this.state.events}   />
            </div>
          </div>
        );
      }}


