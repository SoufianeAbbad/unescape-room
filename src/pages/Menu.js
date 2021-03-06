import React, { Component } from "react";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class Menu extends Component {
  render() {
    return (
      <div className="gameBox">
        <div>
          <Header />
          <div>
            <div>
              <div className="section">
                This game will help you improve your{" "}
                <strong>Cross-Site Scripting</strong> (<strong>XSS</strong>)
                skills through challenges. Each challenge is made up of a
                template, function, value, and a number of filters. Filters are
                mitigations based on real-world examples and are generated
                dynamically. It is up to you to find a payload that bypasses all
                filters so it executes the function with the expected argument.
                In case you are not familiar with <strong>XSS</strong>{" "}
                vulnerabilities yet,{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.hacker101.com/sessions/xss"
                >
                  check out this video
                </a>{" "}
                to get you up to speed. Good luck!
              </div>

              <div className="section card">
                <div>
                  <div onClick={this.props.onPractice} className="practice-run">
                    <strong>Practice run</strong>
                    <br />
                    <span>Learn the ropes and get a feel for the game</span>
                  </div>

                  <div
                    onClick={this.props.onMatch}
                    className="play-a-match section"
                  >
                    <strong>Play a match</strong>
                    <br />
                    <span>
                      A race against the clock, levels become increasingly more
                      difficult
                    </span>
                  </div>
                </div>

                {this.props.highestScore && (
                  <div>
                    <div className="section">Highest score</div>

                    <div className="section">
                      <h1>{this.props.highestScore}</h1>
                    </div>
                  </div>
                )}

                {this.props.highestLevel && (
                  <div>
                    <div className="section">Highest level</div>

                    <div className="section">
                      <h1>
                        {this.props.highestLevel} of {this.props.maxLevel}
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Menu;
