import React from 'react'
import img1 from "../../image/photo_2023-05-24_04-23-39.jpg"
import img2 from "../../image/Без названия (6).jpg"
import img3 from "../../image/Без названия (7).jpg"
import img4 from "../../image/images (4).jpg"
import img5 from "../../image/images.jpg"
import img6 from "../../image/Без названия (3).jpg"
// import img7 from "../../image/technology-linkedin-background-dnic4b0thk1hgfm2.jpg"

import "./blog.css"
function Blog() {
    return (
        <div className='Appp'>

            <div className="a">
                <h1>M.</h1>
                <div className="a-s">

                    <a href="blog">blog</a>
                    <a href="about">about</a>
                    <a href="work">work</a>
                </div>

            </div>
            <br />
            <div className="big_text">

                <div className="bigt">
                    <h3>hi! my name is Maftunaxon.</h3>
                    <h3>My surename is Axmadova</h3>
                    <h3>    i am 13 years old</h3>
                    <h3>    i am from Namangan of Uzbekistan</h3>
                    <h3>    I am studying IT at the Algoritm educational center in Namangan</h3>

                    <h3>    In addition, I also attend an English course</h3>
                    <h3>    INSHA ALLAH I am a web developer and web designer</h3>

                </div>
            </div>
            <br />
            <br />
            <div className="carts">
                <div className="card">
                    <div className="c_img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="c_p">
                        <p>    i like blackpink
                        </p>
                        <br />
                        <p>    because they sing beautiful
                        </p>
                        <br />
                        <p>    and beautiful
                        </p>
                        <br />
                        <p>some of their song in eglish </p>
                        <br />
                        <p>i listen to them and try to understand</p>
                    </div>

                </div>
                <br />
                <br />
                <div className="card">

                    <div className="c_p2">
                        <p>    i like shut down music of Blackpink
                        </p>
                        <br />
                        <p>    because they sing good
                        </p>
                        <br />
                        <p>    and beautiful wear
                        </p>
                        <br />
                        <p>some of their song in eglish </p>
                        <br />
                        <p>i listen to them and try to understand</p>
                    </div>


                    <div className="c_img">
                        <img className='img2' src={img2} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <div className="card">
                    <div className="c_img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="c_p">
                        <p>    i like pink venom of Blackpink
                        </p>
                        <br />
                        <p>    because they sing good
                        </p>
                        <br />
                        <p>    and beautiful wear
                        </p>
                        <br />
                        <p>some of their song in eglish    </p>
                        <br />
                        <p>i listen to them and try to understand</p>
                    </div>

                </div>
                <br />
                <br />
                <div className="card">

                    <div className="c_p2">
                        <p>    i like  kill this love  music of Blackpink
                        </p>
                        <br />
                        <p>    because they sing good
                        </p>
                        <br />
                        <p>    and beautiful wear
                        </p>
                        <br />
                        <p>some of their song in eglish </p>
                        <br />
                        <p>i listen to them and try to understand</p>
                    </div>


                    <div className="c_img">
                        <img className='img2' src={img4} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <div className="card">

                    <div className="c_img">
                        <img className='img2' src={img5} alt="" />
                    </div>
                    <div className="c_p2">
                        <p>    i like Lisa
                        </p>
                        <br />
                        <p>    because they sing good
                        </p>
                        <br />
                        <p>    and beautiful girl member
                        </p>
                        <br />
                        <p> Lisa's real name is Lalisa </p>
                        <br />
                        <p>some of their song in eglish </p>
                        <br />
                        <p>i listen to them and try to understand</p>
                    </div>


                </div>
                <br />
                <br />
                <div className="card">

                    <div className="c_p2">
                        <p>    i like Rose too
                        </p>
                        <br />
                        <p>    because they sing good
                        </p>
                        <br />
                        <p>    and beautiful girl member too
                        </p>
                        <br />
                        <p>some of their song in eglish </p>
                        <br />
                        <p>i listen to them and try to understand</p>
                    </div>


                    <div className="c_img">
                        <img className='img2' src={img6} alt="" />
                    </div>
                </div>
            </div>
            <br />
            <footer className="footer">
                <div className="text">
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


                </div>
                {/* <div className="tech">
                    <img src={img7} alt="" />
                </div> */}
            </footer>
        </div>
    )
}

export default Blog
