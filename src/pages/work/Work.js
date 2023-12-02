import React from 'react'
import img1 from '../../image/white-smartphone-model-phone-14-260nw-2206171155.webp'
import img2 from '../../image/images (1).jpg'
import img3 from '../../image/6583471.png'
import img4 from '../../image/11041496.png'
import img5 from '../../image/5806342.png'
import img6 from '../../image/1913288.png'
import img7 from '../../image/about.aee0f771.png'

import "./work.css"
function Work() {
    return (
        <div className='App'>
      
       
            <div className="banner2">
                <div className="banner2-text">
                    <p className='here'>
                        My first jobs
                        Here are a few projects I've worked on recently.
                        I believe in the strong dedication in each project of my
                        clients. Besides, I can help you with:
                        1. HTML5 and Css
                        2.Figma
                        3.js
                        4.React
                        5.node.js
                    </p>

                </div>
                <div className="banner2-img">
                    <img className='img7' src={img7} alt="" />
                </div>
          
            </div>
            <div className="big_textss">

                <div className="htmll">
                    <div className="i">
                        <img className='pictures' src={img1} alt="" />
                    </div>
                    <h3>I create I phone 14pro max picture from html and css</h3>

                </div>
                <div className="htmll">
                    <div className="i">

                        <img className='pictures' src={img2} alt="" />
                    </div>
                    <h3>I create Sumsung a52 picture from html and css</h3>

                </div>

                <div className="htmll">
                    <div className="i">

                        <img className='pictures1' src={img3} alt="" />
                    </div>
                    <h3>I create frog picture from html and css</h3>

                </div>
                <div className="htmll">
                    <div className="i">
                        <img className='pictures1' src={img4} alt="" />

                    </div>
                    <h3>I create shy face picture from html and css</h3>
                </div>

                <div className="htmll">
                    <div className="i">
                        <img className='pictures1' src={img5} alt="" />
                    </div>
                    <h3>i create leaf picture from html and css</h3>
                </div>


                <div className="htmll">
                    <div className="i">
                        <img className='pictures1' src={img6} alt="" />
                    </div>
                    <h3>i create guitar picture from html and css</h3>
                </div>

            </div>

            <footer className="footer">
                I'm from g'uncha from Namangan
                <br />
                I'm study 44-school
                <br />
                I'm 13 years old
                <br />
                I've got 6 family members
                <br />
                I've got number phone
                <br />
                Who want call my phone  998-91-760 3720
                <br />
                About  My portfolio write commint
            </footer>
        </div>
    )
}

export default Work
