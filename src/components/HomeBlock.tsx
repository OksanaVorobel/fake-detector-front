import React from 'react';
import {
    MDBContainer,
    MDBRow,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {useNavigate} from "react-router-dom";

// import homePagePromoImage from '../images/homepage_promo.png';
// import homePageImageCollage from '../images/home_image_collage.png'
// import homePageStepByStepImage from '../images/step_by_step_guide.png'
// import homePageColorAndGreyImage from '../images/abstract-image.jpg'

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
                        // src={homePagePromoImage}
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
                                Breathe New Life<br/>
                                into Your Photos:
                            </h1>
                            <h3 className='mb-4 text-left section-subheader'>
                                Powerful AI Colorization
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
                <div className='bg-white text-dark' style={{marginTop: '8rem'}}>
                    <h1 className='mb-4 text-center section-title'>
                        Breathe life into black & white photos. <br/>
                        Upload yours, AI does the magic!
                    </h1>
                    <h3 className='mb-4 text-center section-subtitle'>
                        No artistic expertise needed! Simply upload your grayscale photos
                        and watch our advanced algorithms work their magic.
                    </h3>
                    <img
                        // src={homePageImageCollage}
                        className='img-fluid w-100'
                        alt='...'
                    />
                </div>
            </MDBRow>

            <MDBRow style={{backgroundColor: '#18394c'}}>
                <div className="d-flex justify-content-between">
                    <div className='text-white ml-15' style={{marginLeft: '15rem', marginTop: '6rem'}}>
                        <h2 className='fw-bold mb-4 text-center amenity-title'
                            style={{marginLeft: '-6rem'}}>
                            Effortless Colorization
                        </h2>
                        <h3 className='mb-4 text-center amenity-text'
                            style={{marginLeft: '-6rem'}}>
                            Our advanced algorithms,
                            trained on massive datasets of color images, will intelligently
                            predict realistic and natural colors for your photo.
                        </h3>
                    </div>

                    <div className="amenity-line"></div>

                    <div className='text-white ml-15' style={{marginTop: '6rem'}}>
                        <h2 className='fw-bold mb-4 text-center amenity-title'>
                            Unleash the Stories Hidden in Gray
                        </h2>
                        <h3 className='mb-4 text-center amenity-text'
                            style={{marginLeft: '0.7rem', marginRight: '0.7rem'}}>
                            See your family history come alive in color.
                            Relive cherished memories or add a touch of whimsy
                            to historical photographs.
                        </h3>
                    </div>

                    <div className="amenity-line"></div>

                    <div className='text-white ml-15' style={{marginRight: '15rem', marginTop: '6rem'}}>
                        <h2 className='fw-bold mb-4 text-center amenity-title'
                            style={{marginRight: '-6rem'}}>
                            More Than Just Color
                        </h2>
                        <h3 className='mb-4 text-center amenity-text'
                            style={{marginRight: '-6rem'}}>
                            Our image colorization goes beyond
                            simply adding hues. We preserve details and textures,
                            ensuring a natural and high-quality result.
                        </h3>
                    </div>
                </div>
            </MDBRow>

            <MDBRow>
                <div className='bg-white' style={{marginTop: '8rem'}}>
                    <h1 className='mb-4 text-center section-title'>
                        How it works
                    </h1>
                    <h3 className='mb-4 text-center section-subtitle'>
                        Curious about the magic behind our image colorization tool?
                    </h3>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5rem'}}>
                        <img
                            // src={homePageStepByStepImage}
                            className='img-fluid'
                            style={{width: '40%', maxWidth: '80%', height: 'auto'}}
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
                                        Simply drag and drop your black and white images,
                                        or browse your files to select them.
                                        We support various image formats for your convenience.
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
                                        Our powerful algorithms go to work,
                                        meticulously analyzing the grayscale tones, composition,
                                        and content of your photos.
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
                                        Scene Recognition & Color Prediction
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Advanced machine learning helps the system recognize objects,
                                        landscapes, and situations within the images.
                                        This allows for intelligent color prediction
                                        that reflects real-world scenarios.
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
                                        Colorization Magic
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Based on its analysis, the AI meticulously fills in
                                        the color details, transforming your black and white photos
                                        into vibrant masterpieces.
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
                                        Download & Enjoy
                                    </h2>
                                    <h3 className='mb-4 guide-text'>
                                        Once the colorization process is complete,
                                        you can download your newly colored photos and
                                        relive your memories in all their glory.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBRow>

            <MDBRow>
                <div className="container"
                     style={{
                         // backgroundImage: `url(${homePageColorAndGreyImage})`,
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         height: '600px',
                         marginTop: '8rem'
                     }}>
                    <div className="circular-shape">
                        <h2 className="section-title" style={{marginTop: '-10rem'}}>Get Started Today</h2>
                        <h3 className="section-subtitle" style={{marginTop: '2rem'}}>
                            It's easy to unleash the hidden colors in your photos
                        </h3>
                        <button
                            type="button"
                            className="btn btn-light btn-rounded"
                            style={{
                                backgroundColor: '#edfdfb',
                                color: '#333',
                                fontSize: '1rem',
                                padding: '1.5rem 3rem',
                                border: '2px solid #333',
                                borderRadius: '20px',
                                marginTop: '3rem'
                            }}
                            data-mdb-ripple-init=""
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    )
}

export default HomeBlock;