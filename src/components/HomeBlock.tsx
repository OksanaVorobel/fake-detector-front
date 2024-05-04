import React from 'react';
import {
    MDBContainer,
    MDBRow,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {useNavigate} from "react-router-dom";

import homePagePromoImage from '../assets/images/promo-image.png';
import homePageStepByStepImage from '../assets/images/step_by_step_guide.png'

const HomeBlock = () => {
    const navigate = useNavigate();

    const getStarted = () => {
        navigate('/login')
    }

    return (
        <MDBContainer fluid>
            <MDBRow>
                <div className='w-100 vh-100 position-relative'>
                    <img
                        src={homePagePromoImage}
                        className='img-fluid position-absolute top-0 start-0 h-100 w-100'
                        alt='...'
                    />
                    <div
                        className='position-absolute top-0 start-0 w-100 h-100 mask d-flex justify-content-start align-items-center'
                        style={{
                            background: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                        }}
                    >
                        <div className='text-white ml-15' style={{marginLeft: '12rem'}}>
                            <h1 className='fw-bold mb-4 text-left section-header'>
                                Unlocking Truth:
                            </h1>
                            <h3 className='mb-4 text-left section-subheader'>
                                Empowering Fake Image Detector
                            </h3>
                            <button type="button" className="btn btn-light btn-rounded"
                                    style={{fontSize: '1rem', padding: '1.5rem 3rem'}} data-mdb-ripple-init=""
                                    onClick={getStarted}
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </MDBRow>

            <MDBRow>
                <div className='bg-white' style={{marginTop: '8rem'}}>
                    <h1 className='mb-4 text-center section-title'>
                        How it works
                    </h1>
                    <h3 className='mb-4 text-center section-subtitle'>
                        Curious about the magic behind our fake image detection tool?
                    </h3>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5rem'}}>
                        <img
                            src={homePageStepByStepImage}
                            className='img-fluid'
                            style={{width: '700px', height: 'auto'}}
                            alt='...'
                        />
                        <div style={{marginLeft: '10rem'}}>
                            <div className="guide-step">
                                <div className="number">
                                    01
                                </div>
                                <div className="guide-div-txt-section">
                                    <h2 className='fw-bold mb-4 guide-title'>
                                        Upload Your Photos
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Simply drag and drop your suspicious images or browse
                                        the files to select them. We support various image formats
                                        for your convenience.
                                    </h3>
                                </div>
                            </div>

                            <div className="guide-line"></div>

                            <div className="guide-step">
                                <div className="number">
                                    02
                                </div>
                                <div className="guide-div-txt-section">
                                    <h2 className='fw-bold mb-4 guide-title'>
                                        AI Analyzes Your Photos
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Our powerful algorithms work by thoroughly
                                        checking the composition, content,
                                        and characteristics of your images.
                                    </h3>
                                </div>
                            </div>

                            <div className="guide-line"></div>

                            <div className="guide-step">
                                <div className="number">
                                    03
                                </div>
                                <div className="guide-div-txt-section">
                                    <h2 className='fw-bold mb-4 guide-title'>
                                        Detecting False Indicators
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Using sophisticated machine learning techniques
                                        and Error Level Analysis, the system identifies
                                        potential signs of falsity, including inconsistencies,
                                        anomalies, and changes in images.
                                    </h3>
                                </div>
                            </div>

                            <div className="guide-line"></div>

                            <div className="guide-step">
                                <div className="number">
                                    04
                                </div>
                                <div className="guide-div-txt-section">
                                    <h2 className='fw-bold mb-4 guide-title'>
                                        Falsity Assessment
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Based on the analysis, artificial intelligence estimates
                                        the probability of falsity for each image, providing
                                        insight into the presence of fake or misleading elements.
                                    </h3>
                                </div>
                            </div>

                            <div className="guide-line"></div>

                            <div className="guide-step">
                                <div className="number">
                                    05
                                </div>
                                <div className="guide-div-txt-section">
                                    <h2 className='fw-bold mb-4 guide-title'>
                                        Evaluate The Results
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Once the assessment is complete, you receive
                                        detailed reports and visualizations highlighting
                                        the detected error indicators in your images,
                                        enabling you to make informed decisions about their authenticity.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    )
}

export default HomeBlock;