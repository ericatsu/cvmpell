import React from "react";
import { Description, Highlight, Item, ItemWrap, MainCon, MainDiv, MessageIcon, SubTitle, Title, TopDiv } from "../elements/MessageElement";
//import Card from "./Card";
import "../elements/Message.css"
import { Button } from "../elements/ButtonElements";

const Message = ({ primary, dark, dark2 }) => {
  const messageData = [
    {
      icon: "ri-html5-fill",
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
    {
      icon: "ri-html5-fill",
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
    {
      icon: "ri-html5-fill",
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. qui libero dolorem modi architecto adipisci sed nihil voluptate",
    },
    {
      icon: "ri-html5-fill",
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
              <MessageIcon>
                <i class={item.icon}></i>
              </MessageIcon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button
                to="About"
                duration={500}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
              >
                Learn More
              </Button>
            </Item>
          ))}
        </ItemWrap>
      </MainCon>
    </MainDiv>
  );
};

export default Message;