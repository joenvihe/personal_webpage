import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const navigate = this.props.navigate;

    const handleHomeClick = (e) => {
      e.preventDefault();
      navigateHome();
    };

    const navigateHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };

    const handleChatbotClick = (e) => {
      e.preventDefault();
      navigateToChatbot();
    };

    const navigateToChatbot = () => {
      // 👇️ navigate to /chatbot
      navigate('/chatbot');
    };

    const isChatbotRoute = window.location.pathname === '/chatbot';

    return (
      <React.Fragment>
          <div id="home">
            <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
              </a>
              <a className="mobile-btn" href="#" title="Hide navigation">
                Hide navigation
              </a>
              <ul id="nav" className="nav">
                <li className="current">
                  <a className="smoothscroll" href="#home" onClick={handleHomeClick}>
                    Home
                  </a>
                </li>
                {!isChatbotRoute && (
                  <li>
                    <a className="smoothscroll" href="#about">
                      About
                    </a>
                  </li>
                )}
                {!isChatbotRoute && (
                <li>
                  <a className="smoothscroll" href="#portfolio">
                    Works
                  </a>
                </li>
                )}
                <li>
                  <a href="#chatbot" onClick={handleChatbotClick}>
                    Chatbot
                  </a>
                </li>
                {!isChatbotRoute && (
                <li>
                  <a className="smoothscroll" href="#contact">
                    Contact
                  </a>
                </li>
                )}
                </ul>
            </nav>


          </div>
      </React.Fragment>
    );
  }
}
