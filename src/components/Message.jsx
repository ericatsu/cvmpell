import React from "react";
import { Description, Highlight, Item, ItemWrap, MainCon, MainDiv, MessageIcon, MsBtnWrap, SubTitle, Title, TopDiv } from "../elements/MessageElement";
//import Card from "./Card";
import "../elements/Message.css"
import { Button } from "../elements/ButtonElements";
import { FaApple } from "react-icons/fa";

const Message = () => {
  const messageData = [
    {
      icon: <FaApple color="black" fontSize="2.5rem" />,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
    {
      icon: <FaApple color="black" fontSize="2.5rem" />,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
    {
      icon: <FaApple color="black" fontSize="2.5rem" />,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
    {
      icon: <FaApple color="black" fontSize="2.5rem" />,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
  ];

  return (
    <MainDiv>
      <MainCon>
        <TopDiv>
          <SubTitle>Our Inspiration</SubTitle>
          <Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            ea!
          </Highlight>
        </TopDiv>

        <ItemWrap>
          {messageData.map((item, index) => (
            <Item key={index}>
              <MessageIcon>{item.icon}</MessageIcon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <MsBtnWrap>
                <Button
                  to="AboutUs"
                  duration={500}
                  exact="true"
                  offset={-80}
                  primary="true"
                  dark="true"
                >
                  Learn More
                </Button>
              </MsBtnWrap>
            </Item>
          ))}
        </ItemWrap>
      </MainCon>
    </MainDiv>
  );
};

export default Message;