import React from 'react'
import DefaultModal from '../AboutModal'


const About = (props) => {

    return(
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="tp-about-wrap">
                        <div className="tp-about-img">
                            <img src="/images/aboutkuva.png" alt=""/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                        
                        <div className="tp-about-icon-content">
                            <h2>My passion is programming</h2>
                            <p>While I may be a recent graduate, I have been proactive in gaining professional experience in the field. I have done Full Stack software development work for EU projects & Finnish companies.
                                </p>
                            <p>My educational background has given me a solid foundation in software development, project management and business acumen. I'm eager to learn more and develop myself as a professional software developer.
                                </p>
                                <p>If you are looking for a highly motivated software developer, hopefully I can be a valuable asset to your company or project.
                            </p>
                            <div className="signeture">
                                {/*<span><img src="images/signeture.png" alt=""/></span>*/}
                                <p>-Joonas</p>
                            </div>
                            {/*<DefaultModal buttonClass={'template-btn'}/>*/}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )
}

export default About;