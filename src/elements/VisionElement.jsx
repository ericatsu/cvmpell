import styled from "styled-components";
import {
  MdArrowForward,
  MdPageview,
} from "react-icons/md";

export const VSection = styled.section`
  padding: 60px;
  background-color: #788097;
`;
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
export const VSubTitle = styled.h2`
  font-size: 1.5rem;
  color: black;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Vh2 = styled.h6`
  font-size: 1.8rem;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const VDescription = styled.p`
  color: black;
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
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
`
export const VTitle = styled.h4`
  color: white;
  font-weight: 500;
`

export const VLeft = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const VBtnWrap = styled.div`
  //display: flex;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 94%;
  }
`;

export const VBtn = styled.button`
  border-radius: 5px;
  background: #f5c32c;
  white-space: nowrap;
  padding: 10px;
  width: 100%;
  color: #010606;
  font-size: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f5c32c;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const VImg = styled.img`
  width: 500px;
  height: 80%;
  object-fit: cover;

  border-radius: 0.8rem;

  @media screen and (max-width: 768px) {
    height: 400px !important;
  }
`;

export const VDes = styled.p`
  color: black;
  line-height: 30px;
  font-size: 0.9rem;
`;

export const VArrowForward = styled(MdPageview)`
  margin-left: 4px;
  font-size: 20px;
`;

export const VArrowRight = styled(MdArrowForward)`
  margin-left: 4px;
  font-size: 20px;
`;

