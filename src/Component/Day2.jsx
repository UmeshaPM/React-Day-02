import React from 'react'
import './Style.css'

const Day2 = () => {
  return (
    <div className='main'>
        <h3>Q-01 : What is the Difference between react and react native? Which one is library or framework?</h3>
        <p className='heading'>React  JS :- </p>
            <ul className='items'>
                <li>React JS is javascript library used for developing web applications.</li>
                <li>React JS initial relaese was in 2013 by Facebook.</li>
                <li>In React JS,the virtual DOM renders the browser code.</li>
            </ul>
            <p className='heading'>React  Native :- </p>
            <ul className='items'>
                <li>React Native is the React js based framework,used for developing Mobile applications.</li>
                <li>React Native initial Release was in 2015 by Facebook.</li>
                <li>In this,React natives uses its API to render code for mobile applications.</li>
            </ul>
        <br></br>
        <h3>Q-02 : What is the package name you are using for routing?</h3>
        <p className='heading'>Package name :- </p>react-router-dom
        <br></br>
        <h3>Q-03 : Routing Implementation.</h3>
        <h4>Implementation is done in  src folder.</h4>
        <br></br>
        <h3>Q-04 : How do you pass data from parent to child?</h3>
        <h4>Implementation is done in  src folder.</h4>
        <br></br>
        <h3>Q-05 : What is Lazy Loading in react?</h3>
        <p className='heading'>Lazy Loading :- </p>It means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.
        <p className='heading'>Example :- </p>The example of image lazy-loading can be found on the popular publishing platform Medium, which loads lightweight placeholder images at page load, and replaces them with lazily-loaded images as they're scrolled into the viewport.
        <br></br>
        <h3>Q-06 : Difference b/w Stateful and stateless Component?</h3>
        <p className='heading'>Stateful Components :- </p>
            <ul className='items'>
                <li>A statelful component is dependent of its state.</li>
                <li>A stateful component can renders both states & props.</li>
                <li>In stateful component,states & props are displayed like this.props.name</li>
                <li>It renders the output depending upon the state value.</li>
                <li>A class components are always a stateful component.</li>  
            </ul>
        <p className='heading'>Stateless Component :- </p>
            <ul className='items'>
                <li>A stateless component is independent of its state.</li>
                <li>A stateless component renders the props.</li>
                <li>In stateless component,props are displayed like props.name</li>
                <li>It renders the output depending upon the props value.</li>
                <li>A functional components are always a stateless component.</li>
            </ul>
        <br></br>
        <h3>Q-07 : How do you switch one component to another & using Conditional Rendering?</h3>
        <p>The way to Switch/Navigate from one page to another page</p>
        <ul>
            <li>Using React routing</li>
            <li>Using Conditional rendering</li>
        </ul>

    </div>
  )
}

export default Day2
