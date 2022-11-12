import React from 'react'
import {
  Description,
  Highlight,
  ProductCard,
  ProductWrap,
  MainCon,
  ProductImg,
  SubTitle,
  Title,
  TopDiv,
  ProductInfo,
  ProductBtnLink,
  ProductLink,
  ProductBtn,
} from "../elements/ProductElements";
import clothimg from "../assets/images/clothimg.png";

const Cloths = () => {
  const productsData = [
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

      <ProductWrap>
        {productsData.map((item, index) => (
          <ProductLink to="ShopPage">
            <ProductCard key={index}>
              <ProductImg src={item.img} alt="cloth" />
              <ProductInfo>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <ProductBtn>
                  <ProductBtnLink to="ShopPage">Shop Now</ProductBtnLink>
                </ProductBtn>
              </ProductInfo>
            </ProductCard>
          </ProductLink>
        ))}
      </ProductWrap>
    </MainCon>
  );
};

export default Cloths;
