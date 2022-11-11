import React, {useState} from 'react'
import { Description } from "../elements/MessageElement";
import { VArrowForward, VArrowRight, VBtn, VBtnWrap, VContainer, VContent, VDescription, Vh2, VIcons, VImg, VItem, VItemWrapper, VLeft, VSection, VSubTitle, VTitle, VWrapper } from "../elements/VisionElement";
import genders from '../assets/images/genders.jpg';
import { FaApple } from "react-icons/fa";
import { ArrowForward, ArrowRight } from '../elements/HeroElements';

const visionData = [
  {
    icon: <FaApple color="black" fontSize="2.5rem" />,
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
  {
    icon: <FaApple color="black" fontSize="2.5rem" />,
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
  {
    icon: <FaApple color="black" fontSize="2.5rem" />,
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
  {
    icon: <FaApple color="black" fontSize="2.5rem" />,
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
];
const Vision = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

    return (
      <VSection>
        <VContainer>
          <VWrapper>
            <VContent>
              <VSubTitle>Our Inspiration</VSubTitle>
              <Vh2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Vh2>
              <VDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident, nulla. Ut harum nobis corrupti cumque?
              </VDescription>
              <VItemWrapper>
                {visionData.map((item, index) => (
                  <VItem key={index}>
                    <VIcons>{item.icon}</VIcons>
                    <div>
                      <VTitle>{item.title}</VTitle>
                      <Description>{item.desc}</Description>
                    </div>
                  </VItem>
                ))}
              </VItemWrapper>
            </VContent>
            <VLeft>
              <VImg src={genders} />
              <VBtnWrap>
                <VBtn onMouseEnter={onHover} onMouseLeave={onHover}>
                  View Shop {hover ? <VArrowForward /> : <VArrowRight />}
                </VBtn>
              </VBtnWrap>
            </VLeft>
          </VWrapper>
        </VContainer>
      </VSection>
    );
}

export default Vision;