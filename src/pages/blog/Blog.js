import React from 'react'
import img1 from "../../image/733609.png"
import img2 from "../../image/906324.png"
import img3 from "../../image/Code-collaboration.svg"

import "./blog.css"
function Blog() {
    return (
        <div className='Appp'>

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
                <div className="picture">
                    <img className='picture3' src={img3} alt="" />
                </div>

            </div>
  
            
            <h1 className='tools'>I using Tools</h1>
       
            <div className="carts">
                <div className="card">
                    <div className="c_img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="c_p">
                        <p>    i like github
                        </p>
                        <p>  because   i need github
                        </p>
                        <p>    If I have a problem with the codes  or
                        </p>
                        <p> need a code, I can find it </p>
                        <p>i listen to them and try to understand</p>
                    </div>

                </div>
     
                <div className="card">



                    <div className="c_img">
                        <img  src={img2} alt="" />
                    </div>
                    <div className="c_p">
                        <p>    i like visual studio
                        </p>
                        
                        <p>   because visual studio is a necessary tool
                        </p>
                        
                        <p>    This is a necessary tool not only for me, but for everyone
                        </p>
                        
                        <p>This is a necessary tool not only for me, but for everyone</p>
                        
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
           
            </footer>
        </div>
    )
}

export default Blog
