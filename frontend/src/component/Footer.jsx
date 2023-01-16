import React from 'react';
import './Footer.scss'
import image from '../images/sagar (2).jpg'
import {FaLinkedin} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import naukri from '../images/naukri.jpg'

const Footer = () => {
    return (
        <>

        <div className="footer">
            <div className="info">
                <img src={image} alt="" />
                <h1>sagar lobhe</h1>
                <h1>Github-link: <span><a href="https://github.com/saggyGit">https://github.com/saggyGit</a></span></h1>

            </div>
            <div className="links">
                <div className='account'>
                  <a href="https://www.linkedin.com/in/sagar-lobhe-54a789227/"><FaLinkedin className='icon'/></a>
                </div>
                <div className='account'>
                    <a href="https://www.instagram.com/sagar.p123/"  style={{ "color":"#c222ba"}}><BsInstagram/></a>
                </div>
                <div className='account'>
                   <a href="https://www.facebook.com/sagar.lobhe.33"><AiFillFacebook width={"50px"} height={"50px"}/></a>
                </div>
                <div className='account'>
                   <a href='https://www.naukri.com/mnjuser/profile?id=&altresid'> <img src={naukri} alt="" width={"50px"} 
                   style={{"border-radius":"5px"}}/></a>
                </div>
            </div>
        </div>     
        </>
    );
};

export default Footer;