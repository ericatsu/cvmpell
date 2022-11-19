import React from "react";
import genders from "../assets/images/genders.jpg";
import { PButton, PContainer, PImage, PInfo, PTitle, PWrapper } from "../elements/ProductsElements";

const Products = () => {
  const productsData = [
    {
      img: genders,
      title: "Tops",
    },
    {
      img: genders,
      title: "Downs",
    },
    {
      img: genders,
      title: "Accessories",
    },
  ];

  return (
    <PContainer>
      {productsData.map((item, index) => (
        <PWrapper key={index}>
        <PImage src={item.img} alt="product"/>
        <PInfo>
         <PTitle>{item.title}</PTitle>
         <PButton>SHOP NOW</PButton>
        </PInfo>
      </PWrapper>
      ))}
    </PContainer>
  );
};

export default Products;