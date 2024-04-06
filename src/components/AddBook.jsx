import React from 'react'
import BookHeader from './BookHeader'

const AddBook = () => {
    return (
        <div>
            <BookHeader />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3">
                                    <img src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlsZSUyMG9mJTIwYm9va3N8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"></h5>
                                        <p class="card-text"><b><h4>Add new books and share the happiness all arond the world</h4></b></p>
                                        <p class="card-text"><small class="text-body-secondary"><b><h4>2000+ books shared</h4></b></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>ADD NEW BOOKS</h1>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Book Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Author Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Publisher Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Published Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Genre</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddBook