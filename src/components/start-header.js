import React, { Component } from "react";

export default class StartHeader extends Component {
  render() {
    return (
      <div className="">
        {/* <!--================ Start header Top Area =================--> */}
        <section class="header-top">
          <div class="container box_1170">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <a href="index.html" class="logo">
                  <img src="img/logo.png" alt="Logo" />
                </a>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 search-trigger">
                <a href="#" class="search">
                  <i class="lnr lnr-magnifier" id="search" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start header Area --> */}
        <header id="header">
          <div class="container box_1170 main-menu">
            <div class="row align-items-center justify-content-center d-flex">
              <nav id="nav-menu-container">
                <ul class="nav-menu">
                  <li class="menu-active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="category.html">Category</a>
                  </li>
                  <li>
                    <a href="archive.html">Archive</a>
                  </li>
                  <li class="menu-has-children">
                    <a href="">Pages</a>
                    <ul>
                      <li>
                        <a href="elements.html">Elements</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-has-children">
                    <a href="">Blog</a>
                    <ul>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="search_input" id="search_input_box">
            <div class="container box_1170">
              <form class="d-flex justify-content-between">
                <input
                  type="text"
                  class="form-control"
                  id="search_input"
                  placeholder="Search Here"
                />
                <button type="submit" class="btn" />
                <span
                  class="lnr lnr-cross"
                  id="close_search"
                  title="Close Search"
                />
              </form>
            </div>
          </div>
        </header>

        {/* <!-- Top Stories Area --> */}
        <section class="top-stories-area">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="owl-carousel active-stories-carousel">
                  {/* <!-- single stories carousel --> */}
                  <div class="single-stories-carousel d-flex align-items-center">
                    <div class="stories-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/stories1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="stories-details">
                      <h6>
                        <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                      </h6>
                      <p>September 14, 2018</p>
                    </div>
                  </div>
                  {/* <!-- single stories carousel --> */}
                  <div class="single-stories-carousel d-flex align-items-center">
                    <div class="stories-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/stories2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="stories-details">
                      <h6>
                        <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                      </h6>
                      <p>September 14, 2018</p>
                    </div>
                  </div>
                  {/* <!-- single stories carousel --> */}
                  <div class="single-stories-carousel d-flex align-items-center">
                    <div class="stories-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/stories3.jpg"
                        alt=""
                      />
                    </div>
                    <div class="stories-details">
                      <h6>
                        <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                      </h6>
                      <p>September 14, 2018</p>
                    </div>
                  </div>
                  {/* <!-- single stories carousel --> */}
                  <div class="single-stories-carousel d-flex align-items-center">
                    <div class="stories-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/stories4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="stories-details">
                      <h6>
                        <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                      </h6>
                      <p>September 14, 2018</p>
                    </div>
                  </div>
                  {/* <!-- single stories carousel --> */}
                  <div class="single-stories-carousel d-flex align-items-center">
                    <div class="stories-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/stories5.jpg"
                        alt=""
                      />
                    </div>
                    <div class="stories-details">
                      <h6>
                        <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                      </h6>
                      <p>September 14, 2018</p>
                    </div>
                  </div>
                  {/* <!-- single stories carousel --> */}
                  <div class="single-stories-carousel d-flex align-items-center">
                    <div class="stories-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/stories6.jpg"
                        alt=""
                      />
                    </div>
                    <div class="stories-details">
                      <h6>
                        <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                      </h6>
                      <p>September 14, 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start Post Silder Area --> */}
        <section class="post-slider-area">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="owl-carousel active-post-carusel">
                  {/* <!-- single carousel item --> */}
                  <div class="single-post-carousel">
                    <div class="post-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/post1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="post-details">
                      <h2>
                        <a href="#">
                          2nd Gen Smoke Alarm get up from sleep Daily
                        </a>
                      </h2>
                      <div class="post-content d-flex justify-content-between">
                        <div class="post-meta">
                          <div class="thumb">
                            <img src="img/author/a1.png" alt="" />
                          </div>
                          <div class="c-desc">
                            <h6>Marvel Maison</h6>
                            <p>
                              <span class="lnr lnr-calendar-full" />13th Oct,
                              2018
                            </p>
                          </div>
                        </div>
                        <div class="details">
                          <p>
                            There is a moment in the life of any aspiring
                            astronomer that it is time to buy that first
                            telescope. It’s exciting to think about setting up
                            your own viewing station.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single carousel item --> */}
                  <div class="single-post-carousel">
                    <div class="post-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/post2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="post-details">
                      <h2>
                        <a href="#">
                          2nd Gen Smoke Alarm get up from sleep Daily
                        </a>
                      </h2>
                      <div class="post-content d-flex justify-content-between">
                        <div class="post-meta">
                          <div class="thumb">
                            <img src="img/author/a1.png" alt="" />
                          </div>
                          <div class="c-desc">
                            <h6>Marvel Maison</h6>
                            <p>
                              <span class="lnr lnr-calendar-full" />13th Oct,
                              2018
                            </p>
                          </div>
                        </div>
                        <div class="details">
                          <p>
                            There is a moment in the life of any aspiring
                            astronomer that it is time to buy that first
                            telescope. It’s exciting to think about setting up
                            your own viewing station.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single carousel item --> */}
                  <div class="single-post-carousel">
                    <div class="post-thumb">
                      <img
                        class="img-fluid"
                        src="img/posts/carousel/post3.jpg"
                        alt=""
                      />
                    </div>
                    <div class="post-details">
                      <h2>
                        <a href="#">
                          2nd Gen Smoke Alarm get up from sleep Daily
                        </a>
                      </h2>
                      <div class="post-content d-flex justify-content-between">
                        <div class="post-meta">
                          <div class="thumb">
                            <img src="img/author/a1.png" alt="" />
                          </div>
                          <div class="c-desc">
                            <h6>Marvel Maison</h6>
                            <p>
                              <span class="lnr lnr-calendar-full" />13th Oct,
                              2018
                            </p>
                          </div>
                        </div>
                        <div class="details">
                          <p>
                            There is a moment in the life of any aspiring
                            astronomer that it is time to buy that first
                            telescope. It’s exciting to think about setting up
                            your own viewing station.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* <!-- Start main body Area --> */}
        <div class="main-body section-gap">
		<div class="container box_1170">
			<div class="row">
				<div class="col-lg-8 post-list">
					{/* <!-- Start Post Area --> */}
					<section class="post-area">
						<div class="row">
							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c1.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c2.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c3.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c4.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c1.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c2.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c3.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="single-post-item">
									<div class="post-thumb">
										<img class="img-fluid" src="img/archive/c4.jpg" alt=""/>
									</div>
									<div class="post-details">
										<h4><a href="#">An Stormy Evening</a></h4>
										<p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
											exciting to think about setting up your own viewing station.</p>
										<div class="blog-meta">
											<a href="#" class="m-gap"><span class="lnr lnr-calendar-full"></span>March 14, 2018</a>
											<a href="#" class="m-gap"><span class="lnr lnr-bubble"></span>05</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-12">
								<nav class="blog-pagination justify-content-center d-flex">
									<ul class="pagination">
										<li class="page-item">
											<a href="#" class="page-link" aria-label="Previous">
												<span aria-hidden="true">
													<span class="lnr lnr-arrow-left"></span>
												</span>
											</a>
										</li>
										<li class="page-item"><a href="#" class="page-link">01</a></li>
										<li class="page-item active"><a href="#" class="page-link">02</a></li>
										<li class="page-item"><a href="#" class="page-link">03</a></li>
										<li class="page-item"><a href="#" class="page-link">04</a></li>
										<li class="page-item"><a href="#" class="page-link">09</a></li>
										<li class="page-item">
											<a href="#" class="page-link" aria-label="Next">
												<span aria-hidden="true">
													<span class="lnr lnr-arrow-right"></span>
												</span>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</section>
					{/* <!-- Start Post Area --> */}
				</div>


				<div class="col-lg-4 sidebar">
					<div class="single-widget protfolio-widget">
						<img class="img-fluid" src="img/blog/user2.png" alt=""/>
						<a href="#">
							<h4>Peter Anderson</h4>
						</a>
						<p class="p-text">
							Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend
							money on boot camp whenyou can get. Boot camps have itssuppor ters andits detractors.
						</p>
						<ul class="social-links">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
							<li><a href="#"><i class="fa fa-behance"></i></a></li>
						</ul>
						<img src="img/sign.png" alt=""/>
					</div>

					<div class="single-widget popular-posts-widget">
						<div class="jq-tab-wrapper" id="horizontalTab">
							<div class="jq-tab-menu">
								<div class="jq-tab-title active" data-tab="1">Popular</div>
								<div class="jq-tab-title" data-tab="2">Latest</div>
							</div>
							<div class="jq-tab-content-wrapper">
								<div class="jq-tab-content active" data-tab="1">
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories1.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories2.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories3.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories4.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
								</div>

								<div class="jq-tab-content active" data-tab="2">

									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories2.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories3.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories1.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
									<div class="single-popular-post d-flex flex-row">
										<div class="popular-thumb">
											<img class="img-fluid" src="img/posts/carousel/stories4.jpg" alt=""/>
										</div>
										<div class="popular-details">
											<h6><a href="">2nd Gen Smoke Alarm
													get up from sleep</a></h6>
											<p>September 14, 2018</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="single-widget category-widget">
						<h4 class="title">Post Categories</h4>
						<ul>
							<li>
								<a href="#" class="justify-content-between align-items-center d-flex">
									<p><img src="img/bullet.png" alt=""/>International (56)</p>
								</a>
							</li>
							<li>
								<a href="#" class="justify-content-between align-items-center d-flex">
									<p><img src="img/bullet.png" alt=""/>Tours and Travels (45)</p>
								</a>
							</li>
							<li>
								<a href="#" class="justify-content-between align-items-center d-flex">
									<p><img src="img/bullet.png" alt=""/>Cooking Tips (23)</p>
								</a>
							</li>
							<li>
								<a href="#" class="justify-content-between align-items-center d-flex">
									<p><img src="img/bullet.png" alt=""/>Life Style and Fashion (72)</p>
								</a>
							</li>
							<li>
								<a href="#" class="justify-content-between align-items-center d-flex">
									<p><img src="img/bullet.png" alt=""/>Organic News (37)</p>
								</a>
							</li>
							<li>
								<a href="#" class="justify-content-between align-items-center d-flex">
									<p><img src="img/bullet.png" alt=""/>Games and Sports (19)</p>
								</a>
							</li>
						</ul>
					</div>

					<div class="single-widget tags-widget">
						<h4 class="title">Post Tags</h4>
						<ul>
							<li><a href="#">Lifestyle</a></li>
							<li><a href="#">Art</a></li>
							<li><a href="#">Adventure</a></li>
							<li><a href="#">Food</a></li>
							<li><a href="#">Techlology</a></li>
							<li><a href="#">Fashion</a></li>
							<li><a href="#">Architecture</a></li>
							<li><a href="#">Food</a></li>
							<li><a href="#">Technology</a></li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	</div>
      
        {/* <!-- start footer Area --> */}
        <footer class="footer-area section-gap">
		<div class="container box_1170">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6 class="footer_title">About Us</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6 class="footer_title">Newsletter</h6>
						<p>Stay updated with our latest trends</p>
						<div id="mc_embed_signup">
							<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							 method="get" class="subscribe_form relative">
								<div class="input-group d-flex flex-row">
									<input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '"
									 required="" type="email"/>
									<button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button>
								</div>
								<div class="mt-10 info"></div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="single-footer-widget instafeed">
						<h6 class="footer_title">Instagram Feed</h6>
						<ul class="list instafeed d-flex flex-wrap">
							<li><img src="img/i1.jpg" alt=""/></li>
							<li><img src="img/i2.jpg" alt=""/></li>
							<li><img src="img/i3.jpg" alt=""/></li>
							<li><img src="img/i4.jpg" alt=""/></li>
							<li><img src="img/i5.jpg" alt=""/></li>
							<li><img src="img/i6.jpg" alt=""/></li>
							<li><img src="img/i7.jpg" alt=""/></li>
							<li><img src="img/i8.jpg" alt=""/></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2 col-md-6 col-sm-6">
					<div class="single-footer-widget f_social_wd">
						<h6 class="footer_title">Follow Us</h6>
						<p>Let us be social</p>
						<div class="f_social">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-dribbble"></i></a>
							<a href="#"><i class="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row footer-bottom d-flex justify-content-between align-items-center">
				<p class="col-lg-12 footer-text text-center">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
			</div>
		</div>
	</footer>

      </div>
    );
  }
}
