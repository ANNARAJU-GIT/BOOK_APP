import React from 'react'
import BookHeader from './BookHeader'

const SearchBook = () => {
    return (
        <div>
            <BookHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">
                    
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">
                         <center><b><h1>Most searched books</h1></b></center>
                    </div>
                    </div>
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">

                    </div>
                    </div>    
                        
                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card mb-6">
                                    <div class="row g-3">
                                        <div class="col-md-4">
                                        <img src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww" class="img-fluid rounded-start" alt="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">BOOK TITLE</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-body-secondary"></small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card mb-6">
                                    <div class="row g-3">
                                        <div class="col-md-4">
                                        <img src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww" class="img-fluid rounded-start" alt="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">BOOK TITLE</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-body-secondary"></small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card mb-6">
                                    <div class="row g-3">
                                        <div class="col-md-4">
                                        <img src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww" class="img-fluid rounded-start" alt="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww"/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">BOOK TITLE</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-body-secondary"></small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 co-xl-12 col-xxl-12">

                    </div>
                    </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1><b><center>SEARCH FOR BOOKS</center></b></h1>
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
                                <label htmlFor="" className="form-label">Genre</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Edition</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-info">SEARCH</button>
                               <button className="btn btn-warning">CLEAR</button>
                            </div>
                           
                                
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBook