import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroBtnWrapper,HeroH1,
        HeroP, ArrowForward, ArrowRight } from '../elements/HeroElements'
import Video from '../assets/vid.mp4'
import { Button } from '../elements/ButtonElements'

const Hero = () => {
    const [hover, sethover] = useState(false)
    
    const onHover = () => {
        sethover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
             <VideoBg autoPlay loop muted  src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Cvmpell</HeroH1>
                <HeroP>
                   Lorem ipsum dolor,sit amet consectetur adipisicing elit. Optio, in!
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='HireMe' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true' smooth={true}
                        duration={500} spy={true}
                        exact='true' offset={-80}
                    >
                        Contact {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
