import React from 'react'
import img1 from "../../image/5968267.png"
import img2 from "../../image/5968242.png"
import img3 from "../../image/Без названия (2).png"
import img4 from "../../image/3334886.png"
import img5 from "../../image/240_F_583616420_cyNZmksm5h2x5vgcKGmRjnivfmrgnSTb.jpg"
import img6 from "../../image/5968705.png"
import img7 from "../../image/Без названия.png"
import img8 from "../../image/10562284.png"
import img9 from "../../image/733609.png"
import img10 from "../../image/Без названия (1).png"
import "./about.css"
function About() {
    return (
        <div className='App'>

    
            <div className="banner">
                <div className="banner-text">

                    <h1>
                        Hi There!
                        Welcome, My Portfolio 👋🏻
                        I'm Maftuna Ahmedova
                    </h1>
                </div>
                <div className="banner-img">
                    <img src={img10} alt="" />
                </div>
            </div>
            <br />
            <br />
            <br />
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
                    <img className='imgs' src={img4} alt="" />
                    <h2 className='h2'>React</h2>
                    <h3>  React is front-end
                    </h3>

                </div>
                <div className="html">
                    <img className='imgs' src={img9} alt="" />
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
                About  My portfolio write commit
            </footer>
        </div>
    )
}

export default About
