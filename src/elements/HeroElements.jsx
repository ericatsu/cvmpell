import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
   background: #0c0c0c;
   display: flex;
   justify-content: start;
   align-items: center;
   padding: 0 30px;
   height: 800px;
   position: relative;
   z-index: 1;

   :before{
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, 
       rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
       z-index: 2;
   }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width:100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;


export const HeroH1 = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  font-size: clamp(1rem, 10vw, 2.5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;

  /* @media screen and (max-width: 786px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  } */
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 1.5rem;

  /* @media screen and (max-width: 786px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  } */
`;

export const HeroBtnWrapper = styled.div`
   //margin-top: px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
   margin-left: 8px;
   font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
   margin-left: 8px;
   font-size: 20px;
`