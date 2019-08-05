import React, { Component } from "react";
import PostCard from "../../post-card";

export default class BodyPosts extends Component {
  /**
   * Creates a list of PostCard with given list of post objects.
   */
  generatePosts = postList => {
    return postList.map((post, index) => (
      <div className="col-lg-6 col-md-6" key={index}>
        <PostCard post={post} />
      </div>
    ));
  };

  render() {
    return (
      <div className="post-list">
        <section className="post-area">
          <div className="row">
            {this.generatePosts(this.props.postList)}
            <div className="col-lg-12">
              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <span aria-hidden="true">
                        <span className="lnr lnr-arrow-left" />
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      01
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      04
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      09
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <span aria-hidden="true">
                        <span className="lnr lnr-arrow-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
