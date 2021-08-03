import React, { Component } from 'react';
import vanPic from './images/van-pic.png';
import smallLogo from './images/small-logo.png';
import copywright from './images/hr-img.png';
import './Footer.css';

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <section className="topSection">
                    <div>
                        <img alt="profile" src={vanPic}/>
                    </div>
                    <div className="profileText">
                        <h1>Vanessa Stevenson</h1>
                        <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's
                            pretty much who I am.
                        </p>
                    </div>
                    <div className="shareRecipe">
                        <h3>Share Recipe</h3>
                    </div>
                </section>
                <section className="bottomSection">
                    <div>
                        <img alt="small-logo" src={smallLogo}/>
                    </div>
                    <div>
                        <p>Delicious <img alt="copywright" src={copywright}/> 2013 All Rights Reserved.</p>
                        <p>Proudly published with Ghost.</p>
                    </div>
                </section>
            </footer>
         );
    }
}
 
export default Footer;