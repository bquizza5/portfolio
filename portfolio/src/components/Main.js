import React from 'react';
import logo from '../images/transparentLogo.png'
import Typing from 'react-typing-animation'



const Main = (props) => {



    return (
        <div className="main-container">
            <div className='main'>
                <h1 style={{ fontSize: 50 }}>Blaine Blonquist</h1>
                <img className='mainLogo' src={logo}></img>
                <h2 style={{ height: 15 }}>

                    <Typing startDelay={1000} speed={100} loop={true}>
                        <span>React</span>
                        <Typing.Backspace delay={1000} count={7} />
                        <span>Redux</span>
                        <Typing.Backspace delay={1000} count={7} />
                        <span>React-Native</span>
                        <Typing.Backspace delay={1000} count={14} />
                        <span>HTML</span>
                        <Typing.Backspace delay={1000} count={6} />
                        <span>CSS</span>
                        <Typing.Backspace delay={1000} count={5} />
                        <span>JavaScript</span>
                        <Typing.Backspace delay={1000} count={12} />
                        <span>Java</span>
                        <Typing.Backspace delay={1000} count={6} />
                        <span>Spring</span>
                        <Typing.Backspace delay={1000} count={8} />
                        <span>SQL</span>
                        <Typing.Backspace delay={1000} count={5} />
                        <span>Python</span>
                        <Typing.Backspace delay={1000} count={8} />
                        <span>Django</span>
                        <Typing.Backspace delay={1000} count={8} />
                    </Typing>

                </h2>
                <div style={{ display: "flex", justifyContent: 'space-between', width: 170, margin: 'auto'}}>
                    <button style={{width: 80}} onClick={() => { props.goToAnchor("aboutMe") }}>about me</button>
                    <button style={{width: 80}} onClick={() => { props.goToAnchor("projects") }}>projects</button>
                </div>
            </div>
        </div>
    )
}


export default Main;