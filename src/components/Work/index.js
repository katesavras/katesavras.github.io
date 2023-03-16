import React from "react";
import './style.scss'

const Work = () => <section className='work'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='work__title'>Work</h1>
                </div>
            </div>
            <div className='work__item row'>
                <div className='col-lg-4'>
                    <h4>Ester Dijital</h4>
                    <p>Mar 2022 - Dec 2022</p>
                </div>
                <div className='col-lg-8'>
                    <ul>
                        <li>Creating adaptive, cross-browser web-pages for layout using Figma, HTML5, SCSS,
                            Bootstrap, Pixel Perfect, BEM methodology, Java Script.
                        </li>
                        <li>Writing and implementing, clean code for components using Java Script, React.</li>
                        <li>Experience with Vue.js.</li>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Java Script</li>
                            <li>React</li>
                            <li>WordRress</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='work__item row'>
                <div className='col-lg-4'>
                    <h4>Senticode</h4>
                    <p>Aug 2021 - Feb 2022</p>
                </div>
                <div className='col-lg-8'>
                    <ul>
                        <li>Creating adaptive web-pages for bootstrap layout using Figma, HTML5, SCSS,
                            Bootstrap
                        </li>
                        <li>Learned ASP.NET Razor and migrated layout to its components</li>
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Bootstrap</li>
                            <li>Java Script</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    </section>


export default Work;