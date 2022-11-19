import styled from "styled-components";

export const AContainer = styled.div`
    padding: 10%;
    /* background: #f5ebda; */
    background: red;

    @media screen and (max-width: 768px) {
    padding: 10%;
  }
`
export const FaqContainer = styled.div`
    display: flex;
  column-gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const FaqTitle = styled.h1`
  text-align: start;
  margin: 0.8rem 0 2rem 0;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`
export const Accordion = styled.div`
  width: 50%;
  margin: 1rem auto;

  @media screen and (max-width: 768px) {
    width: 100%;
}
`
export const AccordionItem = styled.div`
    padding: 2px;
`

export const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: goldenrod;
  padding: 1rem;
  border-radius: 1rem;

  :hover{
     background-color: #d3c194;
  }
`
export const AccordionContent = styled.div`
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
`
export const Address = styled.div`
    padding: 1rem;
    background-color: blue;
    border-radius: 0.5rem;
    width: 50%;

    @media screen and (max-width: 768px) {
    display: none;
}
`

