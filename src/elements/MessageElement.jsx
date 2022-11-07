import styled from "styled-components";


export const MainDiv = styled.section`
  padding: 60px;
  background-color: #788097;
`;

export const MainCon = styled.div`
  padding: 0px 15px;
  //width: 1140px;
  margin: auto;
`

export const TopDiv = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  color: black;
  margin-bottom: 20px;
`;

export const Highlight = styled.h6`
  font-size: 1.5rem;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
`

export const Item = styled.div`
  background: linear-gradient(#ffd89b, #19547b);
  width: 25%;
  padding: 30px 15px;
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    width: 39%;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 47.7%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const MsBtnWrap = styled.div`
  padding: 10px;
`
export const MessageIcon = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 30px;
`;


export const Title = styled.h3`
  color: black;
  font-style: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
   color: black;
   line-height: 30px;
   font-size: .9rem;
`;
