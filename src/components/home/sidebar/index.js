import React, { Component } from "react";
import PortfolioWidget from "./portfolio-widget";
import PopularPostsWidget from "./popular-posts-widget";
import CategoryWidget from "./category-widget";
import TagsWidget from "./tags-widget";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        thumbImage: "img/blog/user2.png",
        fullName: "Peter Anderson",
        description:
          "Boot camps have its supporters andit sdetractors. Some people do not" +
          "understand why you should have to spend money on boot camp whenyou can" +
          "get. Boot camps have itssuppor ters andits detractors.",
        facebookLink: "#",
        twitterLink: "#",
        dribbbleLink: "#",
        behanceLink: "#",
        signImage: "img/sign.png"
      },
      popularPosts: [
        {
          thumbImage: "img/posts/carousel/stories1.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories2.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories3.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories4.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        }
      ],
      latestPosts: [
        {
          thumbImage: "img/posts/carousel/stories2.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories3.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories1.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories4.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "September 14, 2018"
        }
      ],
      postCategories: [
        {
          name: "International",
          quantity: "56"
        },
        {
          name: "Tours and Travels",
          quantity: "45"
        },
        {
          name: "Cooking Tips",
          quantity: "23"
        },
        {
          name: "Life Style and Fashion",
          quantity: "72"
        },
        {
          name: "Organic News",
          quantity: "37"
        },
        {
          name: "Games and Sports",
          quantity: "20"
        }
      ],
      tags: [
        {
          name: "Lifestyle",
          link: "#"
        },
        {
          name: "Art",
          link: "#"
        },
        {
          name: "Adventure",
          link: "#"
        },
        {
          name: "Food",
          link: "#"
        },
        {
          name: "Technology",
          link: "#"
        },
        {
          name: "Fashion",
          link: "#"
        },
        {
          name: "Architecture",
          link: "#"
        },
        {
          name: "Food",
          link: "#"
        },
        {
          name: "Technology",
          link: "#"
        }
      ]
    };
  }

  render() {
    return (
      <div className="sidebar">
        {/* Porfolio Widget */}
        <PortfolioWidget user={this.state.user} />

        {/* Popular Posts Widget */}
        <PopularPostsWidget
          popularPosts={this.state.popularPosts}
          latestPosts={this.state.latestPosts}
        />

        {/* Category Widget */}
        <CategoryWidget postCategories={this.state.postCategories} />

        {/* Tags Widget */}
        <TagsWidget tags={this.state.tags} />
      </div>
    );
  }
}
