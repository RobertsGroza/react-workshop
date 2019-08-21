import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => 
    <>
        <Jumbotron>
            <h2>Hello there!</h2>
            <h4>I hope that you'll like this workshop and you'll learn something</h4>
        </Jumbotron>
        <div className="container">
            <p>My name is Roberts and this app is meant for very busy people with bad memory like mine.</p>
            <p>If you wanna start click "Log in"! After successful authentification all content will be available to you!</p>
            <img src="/assets/images/meme.jpg" alt="yolo"/>
        </div>
    </>

export default Home;
