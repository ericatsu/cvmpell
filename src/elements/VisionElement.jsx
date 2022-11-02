import styled from "styled-components";

export const VSection = styled.section`
  padding: 60px;
`
export const VContainer = styled.div`
  padding: 0px 15px;
  //width: 1140px;
  margin: auto;
`;
export const VWrapper = styled.div`
  display: flex;
  column-gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const VContent = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`
export const VSubTitle = styled.h6`
  font-size: 1rem;
  color: black;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Vh2 = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const VDescription = styled.p`
  color: yellow;
  line-height: 30px;
  font-size: 0.9rem;
  margin-top: 30px;
`
export const VItemWrapper = styled.div`
  margin-top: 20px;
`;

export const VItem = styled.div`
  padding: 20px 20px 20px 0;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-top: 15px;
`

export const VIcons = styled.span`
  width: 50px;
  height: 60px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  border-radius: 5px;
    
`
export const VTitle = styled.h4`
  color: green;
  font-weight: 500;
`

export const VDImg = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const VImg = styled.img`
  width: 500px;
  height: 100%;
  object-fit: cover;

  border-radius: 0.8rem;

  @media screen and (max-width: 768px) {
    height: 400px !important;
  }
`;

