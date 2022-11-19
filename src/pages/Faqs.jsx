import React, {useState} from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTitle, AContainer, Address, FaqContainer, FaqTitle } from '../elements/FaqsElements';

function Faqs() {

    const faqsData = [
    {
    title: 'Question 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  },
  {
    title: 'Question 2',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  },
  {
    title: 'Question 3',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  },
  {
    title: 'Question 3',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  },
  {
    title: 'Question 3',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  },

];

const AccordionFxn = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem >
      <AccordionTitle onClick={() =>  setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </AccordionTitle>
      {isActive && <AccordionContent>{content}</AccordionContent>}
    </AccordionItem>
  );
};

  return (
    <AContainer >
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqContainer>
      <Accordion>
        {faqsData.map(({ title, content }) => (
          <AccordionFxn title={title} content={content} />
        ))}
    </Accordion>
    
    <Address>
      Find Us At
    </Address>
    </FaqContainer>
    </AContainer>
    
  )
}

export default Faqs;
