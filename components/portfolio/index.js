import React, { useState } from 'react';
import Link from 'next/link'
import PortfolioSingle from '../portfolioSingle'



const Portfolio = () => {

  const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state,setState] = useState({})

    const handleClickOpen = (item) =>{
        setOpen(true);
        setState(item)
    }


  const portfolio = [
      {
        Id:"1",
        heading:"SAFE Study Module",
        subHeading:"EU SAFE Online course",
        authorName:'Project SAFE (EUSAFE)',
        role:'Programming & Design',
        date:'Spring 2023',
        videosId:'LUSa3yRTB9A',
        pImg1:'https://i.imgur.com/j0S7Yqb.png',
        pImg2:'https://i.imgur.com/NbZ4KYl.png',
        pImg3:'https://i.imgur.com/0npk5Ig.png',
        vedio:"",
        doc:'SAFE Study Module is a dynamic web application consisting of 8 pages, a navigation system tied to a graphical timeline element, interactive quizzes and study materials in the form of embedded videos and texts.',
        doc2:'I received instructions for the required technical functionality and features of the web app by working with the project managers of SAFE. Then I proceeded to build a functional draft of the design. After my draft was approved, I proceeded to design and build the product using MERN stack. The study materials were provided by professors of European universities working with Project SAFE',
        doc3:'The Study Module is used during five EU funded ISP (Intensive Study Period) events in 2023 and 2024. These ISPs have students participating from universities of Finland, Germany, Poland, Slovenia and Spain.'
    },
      {
        Id:"2",
        heading:"SAFE Travel Game",
        subHeading:"EU SAFE Web app",
        authorName:'Project SAFE (EUSAFE)',
        role:'Programming',
        date:'Summer 2023',
        videosId:'r_hYR53r61M',
        pImg1:'https://i.imgur.com/HUVRg74.png',
        pImg2:'https://i.imgur.com/uJG3Loq.png',
        pImg3:'https://i.imgur.com/Kp2hwr4.png',
        vedio:"",
        doc:'SAFE Travel Game is a dynamic web application, consisting of 12 pages. It includes multiple separate scoring systems for the user tied to their progress in the web app, dynamically opening/blocking paths and other web elements for the user, as well as storing their progress in the game between connections.',
        doc2:'The goal of the project was to create a simple-to-use and a gamified resource for learning skills required for having a safe travel inside European Union. The text contents and overall structure of the web app were provided by other members of Project SAFE. I was responsible for the programming and technical implementation of the software, using MERN stack.',
        doc3:'Users of the web app can create a custom passport, select an avatar, collect points and souvenirs, read learning materials and answer quizzes, track their progress, advance through three distinct phases and recieve a customized rating for their performance in the end.'
    },
      {
        Id:"3",
        heading:"Helmiprinsessa",
        subHeading:"Jewelry & Design website",
        authorName:'Helmiprinsessa',
        role:'Programming & Design',
        date:'Summer 2023',
        videosId:'LUSa3yRTB9A',
        pImg1:'https://i.imgur.com/oeGBYvv.png',
        pImg2:'https://i.imgur.com/4ScMZeR.png',
        pImg3:'https://i.imgur.com/sdHe08D.png',
        vedio:"",
        doc:'Helmiprinsessa is a Finnish jewelry company. I created their website using NextJS, ReactJS and CSS/Tailwind.',
        doc2:'',
        doc3:''
    },
      {
        Id:"4",
        heading:"MOTION Website",
        subHeading:"EU Tourismotion",
        authorName:'Project MOTION',
        role:'Development assistant',
        date:'Spring 2023',
        videosId:'r_hYR53r61M',
        pImg1:'https://i.imgur.com/WHC2wZY.png',
        pImg2:'https://i.imgur.com/DBzOujr.png',
        pImg3:'https://i.imgur.com/rQK0Iaq.png',
        vedio:"",
        doc:'When working with project MOTION I gained valuable real-life work experience in maintaining web software, including participating in meetings and collaborating with people without an IT background in software projects.',
        doc2:'',
        doc3:''
    },
      {
        Id:"5",
        heading:"Portfolio",
        subHeading:"My portfolio website",
        authorName:'-',
        role:'Programming & Design',
        date:'2023',
        videosId:'LUSa3yRTB9A',
        pImg1:'https://i.imgur.com/FeDIdAA.png',
        pImg2:'https://i.imgur.com/9hGqNEX.png',
        pImg3:'https://i.imgur.com/Z1ZKKGZ.png',
        vedio:"",
        doc:'My portfolio website is made using NextJS, ReactJS, CSS & Tailwind and Photoshop.',
        doc2:'',
        doc3:''
    },
      {
        Id:"6",
        heading:"Hobby projects",
        subHeading:"Programming projects",
        authorName:'-',
        role:'-',
        date:'2017->',
        videosId:'r_hYR53r61M',
        pImg1:'https://i.imgur.com/G7ggn9j.png',
        pImg2:'https://i.imgur.com/R7VdTqF.png',
        pImg3:'https://i.imgur.com/MR0CyuL.png',
        vedio:"",
        doc:'I have worked on many types of projects on my own time while completing my degree to practice and to learn new skills in the field.',
        doc2:'Skyrim mods that I have programmed have an userbase of 10,000+. I develop Skyrim mods using Papyrus, which is an object-oriented programming language similar to Java.',
        doc3:'ExBFM started as a Java project with a Java Swing GUI, later converted into a web app with a Java Spring backend and React frontend. It is a football simulator type of game with many kinds of AI features programmed by me from scratch, ie for commentary and matches, player market and attributes, satisfaction, training, messages, simulation etc.'
    },
 
  ]

  return (
    <div className="tp-protfolio-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <span>Portfolio</span>
                        <h2>My projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-protfolio-item">
                            <div className="row">
                                {portfolio.map((port, prt) => (
                                  <div className="col-lg-4 col-md-6 col-sm-12 custom-grid" key={prt}>
                                      <div className="">
                                          <div className="tp-protfolio-single">
                                              <div className="tp-protfolio-img">
                                                  <img src={port.pImg1} alt=""/>
                                              </div>
                                              <div className="tp-protfolio-text">
                                                  <h2>{port.heading}</h2>
                                                  <span>{port.subHeading}</span>
                                                  <button  onClick={()=> handleClickOpen(port)}>View Work</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioSingle open={open} onClose={handleClose} title={state.heading} doc={state.doc} doc2={state.doc2} doc3={state.doc3} image1={state.pImg1} image2={state.pImg2} image3={state.pImg3} authorName={state.authorName} videosId={state.videosId} value={state.value} date={state.date} role={state.role}/>

            <div className="white_svg svg_white">
                    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                        <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                    </svg>
                </div>
        </div>
  );
}

export default Portfolio;