import smoke from './smoke.png';
import './App.scss';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub} from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
function App() {
    return (
        <div className="app">
            <header className="header">
                <div className='container'>
                    <div className='row'>
                     <div className='col-12'>
                         <ul className='header__media'>
                             <li><a href="https://github.com/katesavras?tab=repositories"><BsGithub color='white' size='30'/></a></li>
                             <li><a href="https://www.linkedin.com/in/ekaterina-savras/"><BsLinkedin color='white' size='30'/></a></li>
                             <li><a href="https://www.facebook.com/profile.php?id=100009667419669"><BsFacebook color='white' size='30'/></a></li>
                         </ul>
                     </div>
                    </div>
                </div>
            </header>
            <section className='banner'>
               <div className='banner__bg'>
                   <div className='banner__img-wrap'>
                       <img src={smoke} alt=""/>
                   </div>

               </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-xl-6'>
                            <h1 className='banner__title'>Hi, I am Kate Savras. <br/> A front-end developer.</h1>
                            <p className='banner__about'>
                                I’m a Frontend Developer with more than one year of professional experience. I have
                                experience in adaptive layout web-sites ​​adhering to the concept of a component
                                approach, experience with CSS preprocessors, Java Script, React, ability to use Flexible
                                Box Layout, Grid, Bootstrap. I have developed an app using React, Redux, and Hooks. I
                                have a creative mind and I`m ready for new challenges. I always try to do my work the
                                best way.
                            </p>
                            <button className='banner__download'>Download Resume</button>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section className='work'>*/}
            {/*    <div className='container'>*/}
            {/*        <div className='row'>*/}
            {/*            <div className='col-12'>*/}
            {/*                <h1 className='work__title'>Work</h1>*/}
            {/*            </div>*/}
            {/*          <div className='col-12'>*/}
            {/*              <h3>Senticode</h3>*/}
            {/*              <em>Aug 2021 - Feb 2022</em>*/}
            {/*              <ul>*/}
            {/*                  <li>Creating adaptive web-pages for bootstrap layout using Figma, HTML5, SCSS, Bootstrap</li>*/}
            {/*                  <li>Learned ASP.NET Razor and migrated layout to its components</li>*/}
            {/*              </ul>*/}
            {/*          </div>*/}
            {/*          <div className='col-12'>*/}
            {/*              <h3>Ester Dijital</h3>*/}
            {/*              <em>Mar 2022 - Dec 2022</em>*/}
            {/*              <ul>*/}
            {/*                  <li>Creating adaptive, cross-browser  web-pages for layout using Figma, HTML5, SCSS, Bootstrap,*/}
            {/*                      Pixel Perfect, BEM methodology.</li>*/}
            {/*                  <li>Writing and implementing, clean code for components using Java Script, React.</li>*/}
            {/*                  <li>Experience with Vue.js.</li>*/}
            {/*              </ul>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    );
}

export default App;
