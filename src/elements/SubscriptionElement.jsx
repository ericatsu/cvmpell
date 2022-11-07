import styled from "styled-components";

export const SubSection = styled.section`
  padding: 60px;
  background-color: #788097;
`;

export const SubContainer = styled.div`
  padding: 0px 15px;
  margin: auto;
`
export const SubWrapper = styled.div`
  display: flex;
  column-gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubLeft = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;