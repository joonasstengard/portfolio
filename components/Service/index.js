import React, { useState } from 'react';
import ServiceSingle from '../ServiceSingle'
import { Button } from '@mui/material'


const Service = () => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state,setState] = useState({
    })

    const handleClickOpen = (item) =>{
        setOpen(true);
        setState(item)
    }
    const service = [
        {
            Id:"1",
            sIcon:"fi flaticon-web-design",
            heading:"Frontend development",
            Simg1:'https://i.imgur.com/F1zNM5C.png',
            Simg2:'images/service-single/frontend/img-2.jpg',
            Simg3:'images/service-single/frontend/img-3.jpg',
            doc: "I am proficient in developing frontend solutions for dynamic web apps and other software projects. "
            +"My frontend skill set includes technologies such as Javascript, ReactJS and NextJS. "
            +"I am experienced in creating detailed CSS code by hand or working with CSS frameworks such as Tailwind and Bootstrap.",
            des:'ReactJS, NextJS, CSS & Tailwind.'
        },
        {
            Id:"2",
            sIcon:"fi flaticon-laptop",
            heading:"Backend development",
            Simg1:'https://i.imgur.com/eYGBKrA.png',
            Simg2:'images/service-single/backend/img-2.jpg',
            Simg3:'images/service-single/backend/img-3.jpg',
            doc:"As a programming enthusiast I enjoy writing and structuring backend code, especially with Java SE & Spring and NodeJS & Express. "
            +"I have also completed courses in other backend languages and technologies. As a hobby, I have developed sizeable software projects for Skyrim using the OOP programming language Papyrus. "
            +"My education has given me proficiency in working with databases and related technologies, including database design, querying and optimization. These technologies include MongoDB and MySQL. ",
            des:'Java, NodeJS, Express and databases.'
            
        },
        {
            Id:"3",
            sIcon:"fi flaticon-paint-palette",
            heading:"Software Design",
            Simg1:'https://i.imgur.com/VuHoBgs.png',
            Simg2:'images/service-single/design/img-2.jpg',
            Simg3:'images/service-single/design/img-3.jpg',
            doc:"My education has given me a strong background in professional software & UX design. My thesis topic was on UX design for a large Finnish workforce company. "
            +"Through my curriculum I am highly familiar with modern design philosophies such as Nielsen's Heuristics and designing accessible software. I'm also experienced in creating prototypes and collaborating in tools such as Figma and Miro and creating graphical elements for aesthetic web design using Photoshop and other relevant tools.",
            des:'UX design, graphics and prototyping.'
        }
    ]

    return (
        <div id="service" className="service-area section-padding">
            <div className="borderd"></div>
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>Proficiency</span>
                        <h2>My Skill set</h2>
                    </div>
                </div>
                {/*<div className="hero-desc-langs section-title section-title2 text-center pb-5 mb-1">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="50"/>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width="50"/>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"/>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="50"/>
                </div>*/}
                <div className="row">
                    {service.map((serv, srv) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={srv}>
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                            <div className="dots2"></div>
                                        </div>
                                        <i className={serv.sIcon}></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>{serv.heading}</h2>
                                        <p>{serv.des}</p>
                                        <Button
                                            className="btn"
                                            onClick={()=> handleClickOpen(serv)}>
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.heading} doc={state.doc} image1={state.Simg1} image2={state.Simg2} image3={state.Simg3}/>
        </div>
    );
}
export default Service;