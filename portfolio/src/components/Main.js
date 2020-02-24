import React from 'react';
import logo from '../images/transparentLogo.png'
import Typing from 'react-typing-animation'
import Typlical from "react-typical"

const Main = () => {



    return (
        <div className='main'>
            <h1 style={{ fontSize: 50 }}>Blaine Blonquist</h1>
            <img className='mainLogo' src={logo}></img>
            <h2 className='typewriter'>
                <Typing startDelay={0} speed={100} loop={true}>
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
                </Typing>


                {/* <Typlical loop={Infinity} wrapper='b' steps={[
                    'web developer', 2000,
                    'mobile developer', 2000,
                    'cool dude', 2000
                ]} /> */}

            </h2>



        </div>
    )
}


export default Main;