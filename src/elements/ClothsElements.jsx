import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainDiv = styled.section`
  /* padding: 60px;
  background-color: #788097; */
`;

export const MainCon = styled.div`
  min-height: 100vh;
  padding: 4rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #150f0f;
`;

export const TopDiv = styled.div`
  margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
`;

export const Highlight = styled.h6`
  text-align: center;
  font-size: 1.5rem;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const ClothLink = styled(Link)`
  text-decoration: none;
  color: #150f0f;
`;

export const ClothWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ClothCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 300px;
`;


export const ClothImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ClothInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
`;

export const ClothBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
`;

export const ClothBtnLink = styled(Link)`
  font-size: 1.2rem;
  padding: 1rem 4rem;
  background: #ffc500;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: grey;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
