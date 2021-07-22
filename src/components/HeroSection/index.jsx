import React, { useState } from 'react';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import Video from '../../videos/1.mp4';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Oxygen Concentrator</HeroH1>
                <HeroP>
                    Producing highly concentrated oxygen made easy.
                </HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
