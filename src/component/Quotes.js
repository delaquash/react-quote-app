
import React, { useEffect, useState } from 'react';
import tumblr from '../tumblr.svg';
import twitter from '../twitter.svg';

let API_URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

 const Quotes =() =>{
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuotes()
    },
        
    [])

    const getQuotes =  () => {
            fetch(API_URL)
            .then(res =>res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum]

                console.log(randomQuote);

                setQuote(randomQuote.quote)
                setAuthor(randomQuote.author)
            })            
    };

const handleClick = ()=> {
    getQuotes()
}

    return (
        <div>
            <div id="quote-box">
                <div id="text">
                    <p>{quote}</p>
                </div>

                <div id="author">
                    <p>
                        {author}
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
                    <button onClick={handleClick} id="new-quote">New Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Quotes;