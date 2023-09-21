
import React, { Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'


const PortfolioSingle = ({ maxWidth, open, onClose, title, doc, doc2, doc3, image1, image2, image3, authorName, videosId, value, date, role }) => {


    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >

                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-project-details-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-minimal-wrap">
                                    <div className="tp-minimal-img">
                                        <img src={image1} alt="" />
                                    </div>
                                    <h2>{title}</h2>
                                </div>
                                <div className="tp-project-details-list">
                                    <div className="row">
                                        <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text">
                                                <span>Client Name</span>
                                                <h2>{authorName}</h2>
                                            </div>
                                        </div>
                                        <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text-3">
                                                <span>Role</span>
                                                <h2>{role}</h2>
                                            </div>
                                        </div>
                                        <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="tp-project-details-text">
                                                <span>Date</span>
                                                <h2>{date}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-p-details-section">
                                    <p>{doc}</p>
                                    <p>{doc2}</p>
                                    <p>{doc3}</p>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                <img src={image2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                <img src={image3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="tp-p-details-quote">
                                    <p>{value}</p>
                                    <span>{authorName}</span>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default PortfolioSingle

