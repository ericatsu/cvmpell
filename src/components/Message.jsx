import React from "react";
import { ColImage, ColText, LeftBlock, MainDiv, RightBlock, RowC, RowDiv, RowItems } from "../elements/MessageElement";
//import Card from "./Card";
import "../elements/Message.css"
// import HeartEmoji from "../assets/images/heartemoji.png";
// import Glasses from "../assets/images/glasses.png";
// import Humble from "../assets/images/humble.png";
// import { motion } from "framer-motion";

const Message = () => {

//  transition

  return (
    <section>
    <MainDiv>
    <RowDiv>
      <LeftBlock>lpoy</LeftBlock>
      <RightBlock>
        <RowC>
          <RowItems>
            <ColImage>vg</ColImage>
            <ColText>Somt</ColText>
          </RowItems>
          <RowItems>
            <ColText>lokm</ColText>
            <ColImage>g</ColImage>
          </RowItems>
        </RowC>
      </RightBlock>
    </RowDiv>
    </MainDiv>
    </section>
  );
};

export default Message;