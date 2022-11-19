import styled from "styled-components";

export const PContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    padding: 0px;
    flex-direction: column;
  }
`

export const PWrapper = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const PIndex = styled.div`
  
`;

export const PImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 992px) {
    height: 20vh;
  }
`;

export const PInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PTitle = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

export const PButton = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;