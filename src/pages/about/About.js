import React from 'react'
import img1 from "../../image/images.png"
import img2 from "../../image/Без названия (1).png"
import img3 from "../../image/Без названия (2).png"
import img4 from "../../image/images (1).png"
import img5 from "../../image/images (1).jpg"
import img6 from "../../image/Без названия (4).png"
import img7 from "../../image/Без названия (2).jpg"
import img8 from "../../image/images (3).jpg"
import img9 from "../../image/images (1).png"

import "./about.css"
function About() {
    return (
        <div className='App'>

            <div className="a">
                <h1>M.</h1>
                <div className="a-s">

                    <a href="blog">blog</a>
                    <a href="about">about</a>
                    <a href="work">work</a>
                </div>
            </div>
            <div className="big_texts">
                <div className="html">
                    <img className='imgs' src={img1} alt="" />
                    <h2 className='h2'   >html</h2 >
                    <h3>    html is front-end
                    </h3>
                </div>
                <div className="html">
                    <img className='imgs' src={img2} alt="" />
                    <h2 className='h2'  >css</h2 >
                    <h3>    css is front-end
                    </h3>
                </div>
                <div className="html">
                    <img className='imgs' src={img3} alt="" />
                    <h2 className='h2'>JavaScript</h2>

                    <h3>
                        JavaScript is front-end

                    </h3>
                </div>
                <div className="html">
                    <img className='imgs' src={img9} alt="" />
                    <h2 className='h2'>react </h2>
                    <h3>   REact is front-end
                    </h3>

                </div>

                <div className="html">
                    <img className='imgs' src={img4} alt="" />
                    <h2 className='h2'>git hub</h2>
                    <h3>    i do know github
                    </h3>

                </div>
                <div className="html">
                    <img className='imgs' src={img5} alt="" />
                    <h2 className='h2'>Nodejs</h2>
                    <h3>    node is back-end
                    </h3>

                </div>
                <div className="html">
                    <img className='imgs' src={img6} alt="" />
                    <h1>Figma</h1>
                    <h3>    Figma is design
                    </h3>

                </div>

                <div className="html">
                    <img className='imgs' src={img7} alt="" />
                    <h1>Tailwind</h1>
                    <h3>    tailwind.css is front-end
                    </h3>

                </div>

                <div className="html">
                    <img className='imgs' src={img8} alt="" />
                    <h1>Scss</h1>
                    <h3>    Scss is front-end
                    </h3>

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

export default About
