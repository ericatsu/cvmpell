import React from 'react'
import {
  Description,
  Highlight,
  ClothCard,
  ClothWrap,
  MainCon,
  ClothImg,
  SubTitle,
  Title,
  TopDiv,
  ClothInfo,
  ClothBtnLink,
  ClothLink,
  ClothBtn,
} from "../elements/ClothsElements";
import clothimg from "../assets/images/clothimg.png";

const Cloths = () => {
  const clothData = [
    {
      img: clothimg,
      title: "Tops",
    },
    {
      img: clothimg,
      title: "Downs",
    },
    {
      img: clothimg,
      title: "Somethings",
    },
    {
      img: clothimg,
      title: "Tops",
    },
    {
      img: clothimg,
      title: "Downs",
    },
    {
      img: clothimg,
      title: "Somethings",
    },
  ];

  return (
    <MainCon>
      <TopDiv>
        <SubTitle>Our Shop</SubTitle>
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea!
        </Highlight>
      </TopDiv>

      <ClothWrap>
        {clothData.map((item, index) => (
          <ClothLink to="ShopPage">
            <ClothCard key={index}>
              <ClothImg src={item.img} alt="cloth" />
              <ClothInfo>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <ClothBtn>
                  <ClothBtnLink to="ShopPage">Shop Now</ClothBtnLink>
                </ClothBtn>
              </ClothInfo>
            </ClothCard>
          </ClothLink>
        ))}
      </ClothWrap>
    </MainCon>
  );
};

export default Cloths;
