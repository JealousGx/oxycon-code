import React from 'react';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

import Icon1 from '../../images/1.jpeg'
import Icon2 from '../../images/2.jpeg'
import Icon3 from '../../images/3.jpeg'


const Services = () => {
    return (
        <ServicesContainer id="photos">
            <ServicesH1>Project Pictures</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
