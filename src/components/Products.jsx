import React from "react";
import { Description, Highlight, ProductCard, ProductWrap, MainCon, ProductImg, SubTitle, Title, TopDiv, ProductInfo, ProductBtnLink, ProductLink, ProductBtn } from "../elements/ProductElements";
import genders from "../assets/images/genders.jpg";

const Products = () => {
  const productsData = [
    {
      img: genders,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: genders,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: genders,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: genders,
      title: "Some Title",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <MainCon>
      <TopDiv>
        <SubTitle>Our Inspiration</SubTitle>
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
                  <ProductBtnLink to="ShopPage">Buy Now</ProductBtnLink>
                </ProductBtn>
              </ProductInfo>
            </ProductCard>
          </ProductLink>
        ))}
      </ProductWrap>
    </MainCon>
  );
};

export default Products;