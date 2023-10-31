import React from 'react'
import img1 from '../../image/Без названия.jpg'
import img2 from '../../image/Без названия (1).jpg'
import img3 from '../../image/Без названия (3).png'
import img4 from '../../image/images (2).jpg'
import "./work.css"
function Work() {
    return (
        <div className='App'>
            <div className="a">
                <h1>M.</h1>
                <div className="a-s">

                    <a href="/">blog</a>
                    <a href="about">about</a>
                    <a href="work">work</a>
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
                    <h3>I create Sumsung a33 picture from html and css</h3>

                </div>

                <div className="htmll">
                    <div className="i">

                        <img className='pictures' src={img3} alt="" />
                    </div>
                    <h3>I create guitar picture from html and css</h3>

                </div>
                <div className="htmll">
                    <div className="i">
                        <img className='pictures' src={img4} alt="" />

                    </div>
                    <h3>I create for Cafe from Figma</h3>
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
