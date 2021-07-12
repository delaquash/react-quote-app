
import React from 'react'

 const Quotes =() =>{
    return (
        <div>
            <div id="quote-box">
                <div id="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error molestiae commodi</p>
                </div>

                <div id="author">
                    <p>
                        Emmanuel Olaide
                    </p> 
                </div>

                <div id="buttons">
                    <div className="social-media">
                        <a href="#" id="tweet-quote">
                            <span>
                                <img src="" alt=""/>
                            </span>
                        </a>
                        <a href="#" id="tweet-quote">
                            <span>
                                <img src="" alt=""/>
                            </span>
                        </a>

                    </div>
                    <button id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Quotes;