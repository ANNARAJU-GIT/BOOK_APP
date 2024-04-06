import React from 'react'
import BookHeader from './BookHeader'

const Review = () => {
    return (
        <div>
            <BookHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-bg-dark">
                                    <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2slMjByZXZpZXdzJTIwaWxsdXN0YXJ0aW9uc3xlbnwwfHwwfHx8MA%3D%3D" class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <h1 class="card-title"><b>Reviews</b></h1>
                                        <p class="card-text"><h4>Interesting</h4> </p>
                                        <p><h4>amazing</h4></p>
                                        <p><h4>immersing</h4></p>
                                        <p><h4>relative</h4></p>
                                        <p class="card-text"><small>Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <header><b><center><h1>SHARE YOUR REVIEWS</h1></center></b></header>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Book Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Author Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Review</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning">Submit</button>
                            </div>
                        </div>
                        
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <b><h1><center>TESTIMONIALS</center></h1></b>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <figure class="text">
                                    <blockquote class="blockquote">
                                        <p>Books are important for the mind, heart, and soul. But don't take it from us: These quotes about reading speak for themselves.</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        <cite title="Source Title">YAMADA SUSKI</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <figure class="text">
                                    <blockquote class="blockquote">
                                        <p>Books are important for the mind, heart, and soul. But don't take it from us: These quotes about reading speak for themselves.</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                      <cite title="Source Title">JENNIFER LOPEZ</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            </div>
                        

                    </div>
                </div>
            </div>




        </div>
    )
}

export default Review