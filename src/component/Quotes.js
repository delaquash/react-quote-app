
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import tumblr from '../tumblr.svg';
import twitter from '../twitter.svg';

 const Quotes =() =>{
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        const getQuotes = async () => {
            const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
            console.log(response.data);
        }
        getQuotes()
    }, [])
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
                        <a href="#id" id="tumblr-quote">
                            <span>
                                <img src={tumblr} alt=""/>
                            </span>
                        </a>
                        <a href="#id" id="tweet-quote">
                            <span>
                                <img src={twitter} alt=""/>
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