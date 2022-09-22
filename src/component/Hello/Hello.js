import React from 'react'
import "./Hello.css";

const Hello = (props) => {
  return (
    <div className='hello-container'>
        <h1 className='main-class'> {props.stringValue}'s Kitchen </h1>
        <img className='chicken-image' alt='loading' src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        <center>
        <p className='chicken-description'>
            whoaa! Yummy Delicious.I love chicken.A food rich in protein, chicken can help with weight management and reduce the risk of heart disease. Chicken contains the amino acid tryptophan, which has been linked to higher levels of serotonin (the “feel good” hormone) in our brains.
        </p>
        </center>
        <div><button className='chicken-button'>submit</button></div>
    
    </div>
  )
}

export default Hello