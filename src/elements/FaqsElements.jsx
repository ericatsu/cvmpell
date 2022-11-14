import styled from "styled-components";

export const FaqContainer = styled.div`
    padding: 10%;
    background: #f5ebda;
`
export const FaqTitle = styled.h1`
  text-align: start;
  margin: 0.8rem 0 2rem 0;
`
export const Accordion = styled.div`
  max-width: 800px;
  margin: 1rem auto;

  @media screen and (max-width: 700px) {
    width: 90%;
}
`
export const AccordionItem = styled.div`
    padding: 3px;
`

export const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: goldenrod;
  padding: 1rem;

  :hover{
     background-color: #d3c194;
  }
`
export const AccordionContent = styled.div`
    padding: 1rem;
    background-color: white;
`
