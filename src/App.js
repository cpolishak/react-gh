import React from 'react';
import logo from './media/logo.png';
import bicycleWhite from './media/bicycleW.png';
import zigzag from './media/zigzag.png';
import fc02 from './media/fc02w.png';
import './App.css';

function App() {
  return (
    <body className='background'>

      <div className="container-fluid text-center">
        {/* Greeting */}
        <div className="greeting py-5 pb-3">
          <h1 className='display-3 pb-5'>Hello, my name is</h1>
          <h1 className="cpfont1 text-light pb-5">Chris <img src={logo} className="logo" alt="bike"></img> Polishak</h1>
          <p className='display-4'>I am a software engineer</p>
        </div>

        <div className='row py-5'></div>

        {/* About */}
        <div className='row bg-light'>
          <div class="col-12 col-sm-6">
            <h3 class="justify-content-lg-center align-items-center text-center px-4 pt-3 pb-2">A bit about myself</h3>
            <p class="justify-content-lg-center align-items-center text-center px-4 py-1">I have over 2 years of professional experience as a back-end software engineer working to create, maintain and update microservices built with NodeJS and Javascript for Fintech companies. I am focused on improving myself to become a well rounded full stack engineer and enjoy projects utilizing both front and back-end development. My soft skills are top notch as well from working for over 10 years in outside sales (I work well independently and collaboratively). I also dabble in freelance graphic design (examples below) in addition to creating digital media utilizing Adobe Photoshop and Illustrator.
            </p>
            <p class="justify-content-lg-center align-items-center text-center px-4 py-2">
              My primary focus is to become an excellent software engineer that people would love to have on their team. I work daily to learn new things, practice problem solving with code, and challenging myself with things I have never done. I enjoy working on websites, applications and projects with a focus on technologies including Node, Javascript, React, MongoDB, Bootstrap and other intriguing software/services like Docker, Azure, and more. My favorite motto is "you miss 100% of the shots you don't take". I try new things and fail. But like Spiderman, no matter how many hits I take, I always find a way to come back. I am a girl dad, a dog dad, a home brewer, an artist and a true soccer fanatic.
            </p>
          </div>
          {/* Technologies */}
          <div class="col-12 col-sm-6">
            <div class="col-12 text-center mx-auto">
              <h3 class="py-4 pb-sm-2">Technologies</h3>
              <hr></hr>
              <div className='col-12'>
                <div className='row text-center py-4'>
                  <div className='col-4'>
                    <p>Javascript</p>
                  </div>
                  <div className='col-4'>
                    <p>NodeJS</p>
                  </div>
                  <div className='col-4'>
                    <p>Git/Github</p>
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='row text-center py-4'>
                  <div className='col-4'>
                    <p>Azure DevOps</p>
                  </div>
                  <div className='col-4'>
                    <p>Jira</p>
                  </div>
                  <div className='col-4'>
                    <p>Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row py-3'></div>
        {/* Art */}
        <div className="row pr-3 pb-0">
          <div className="col-4 pt-5">
            <a href={zigzag} target="_blank" rel="noopener noreferrer">
              <img src={zigzag} className="pic pb-5" alt="zigzag shoes"></img>
            </a>
          </div>
          <div className="col-4">
            <a href={bicycleWhite} target="_blank" rel="noopener noreferrer">
              <img src={bicycleWhite} className="pic pb-5" alt="bike"></img>
            </a>
          </div>
          <div className="col-4 pt-5">
            <a href={fc02} target="_blank" rel="noopener noreferrer">
              <img src={fc02} className="pic pb-5" alt="fc02 logo"></img>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className='text-light pb-4'>
          <p>Where you can find me</p>
          <div className='icons'>
            <a href="https://www.linkedin.com/in/chris-polishak-7a281417/" class="btn-floating btn-fb mx-3" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://www.github.com/cpolishak" class="btn-floating btn-fb mx-3" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-3x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className='row py-4'></div>

      <footer class="page-footer font-small fixed-bottom footer pt-0">
        {/* Copyright */}
        <div class="footer-copyright text-center py-1 text-light">© 2019 Copyright:
          Chris Polishak
        </div>
      </footer>
    </body>
  );
}

export default App;
