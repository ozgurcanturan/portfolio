import React from 'react';
import imgCss3 from '../../assets/images/css3.svg';
import imgHtml from '../../assets/images/html.svg';
import imgJs from '../../assets/images/js.svg';
import imgReact from '../../assets/images/react.svg';
import imgDev from '../../assets/images/dev.png';
import imgJava from '../../assets/images/java.svg';
import imgSpring from '../../assets/images/spring.svg';
import './Hero.css';


const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>Hi, I'm DevÖzgür</h2>
                <p>I'm a Jr. Fullstack Developer</p>
            </div>

            <div className='hero-img'>
                <div >
                    <div className='tech-icon'>
                        <img src={imgReact} alt="" />
                    </div>

                    <img src={imgDev} alt="" />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src={imgHtml} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={imgCss3} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={imgJs} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={imgJava} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={imgSpring} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero