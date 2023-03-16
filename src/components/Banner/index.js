
import React from "react";
import './style.scss'
import smoke from "../../public/images/smoke.png";

const Banner = () => {
    const onButtonClick = () => {
        fetch('resume.pdf').then(response => { response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CVKateSavras.pdf';
                alink.click();
            })
        })
    }

    return <section className='banner'>
        <div className='banner__bg'>
            <div className='banner__img-wrap'>
                <img src={smoke} alt=""/>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-xl-6'>
                    <h1 className='banner__title'>Hi, I am Kate Savras. <br/> A front-end developer.</h1>
                    <p className='banner__text'>
                        I have experience in adaptive layout web-sites ​​adhering to the concept of a component
                        approach, experience with CSS preprocessors, Java Script, React, ability to use Flexible
                        Box Layout, Grid, Bootstrap. I have a creative mind and I`m ready for new challenges.
                    </p>
                    <button className='banner__download' onClick={onButtonClick}>Download Resume</button>
                </div>
            </div>
        </div>
    </section>
}

export default Banner;
