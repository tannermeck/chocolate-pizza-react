import React, { Component } from 'react';
import './Header.css';
import smallLogo from './images/small-logo.png';
import fbIcon from './images/fb-icon.png';
import twitIcon from './images/fb-icon.png';
import gpIcon from './images/gp-icon.png';
import instaIcon from './images/insta-icon.png';
import flicIcon from './images/flic-icon.png';
import pintIcon from './images/pint-icon.png';
import rssIcon from './images/rss-icon.png';
import mailIcon from './images/mail-icon.png';


class Header extends Component {
    render() { 
        return (
            <header>
                <div className="outerDiv">
                    <img id="food-logo" alt="food-logo" src={smallLogo}/>
                    <div className="headerLeft">
                        <h1>Delicious</h1>
                        <h3>THE BEST FOOD BLOG ON THE WEB</h3> 
                    </div>
                </div>
                <div className="buttonList">
                    <img alt="fb-icon" src={fbIcon}/>
                    <img alt="twit-icon" src={twitIcon}/>
                    <img alt="gp-icon" src={gpIcon}/>
                    <img alt="insta-icon" src={instaIcon}/>
                    <img alt="flic-icon" src={flicIcon}/>
                    <img id="pint-icon" alt="pint-icon" src={pintIcon}/>
                    <img alt="rss-icon" src={rssIcon}/>
                    <img alt="mail-icon" src={mailIcon}/>
                </div>
            </header>
          );
    }
}
 
export default Header;