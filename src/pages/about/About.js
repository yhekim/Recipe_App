import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from "../../assets/coding.svg"
const About = () => {
    return (
        <AboutContainer>
            <StyledImage src={codingSvg} />
            <HeaderContainer>
                <h1>About Software Developer <span>Yusuf HEKİM</span> </h1>
            </HeaderContainer>
            <InfoContainer>
                <h2>Hi, I'am Yusuf</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4> I've already known HTML5,CSS3, JS, ReactJS, ReactNative, NodeJS,SQL,
                    Python,.</h4>
                <h2>
                    <a href="yusufhekimyh@gmail.com">Send email</a> :
                    yusufhekimyh@gmail.com
                </h2>
            </InfoContainer>
        </AboutContainer>
    )
}
export default About