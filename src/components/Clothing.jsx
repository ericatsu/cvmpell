import { Button } from "../elements/ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "../elements/ClothingElements";
import cloth from "../assets/images/cloth.svg";

const Clothing = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>'Lorem ipsum'</TopLine>
              <Heading>'Sit amet consectetur'</Heading>
              <Subtitle>
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur quas similique, doloribus architecto voluptates at
                sapiente accusantium eius doloremque sit officiis. Dolorem
                perspiciatis,'
              </Subtitle>
              <BtnWrap>
                <Button
                  to="HireMe"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  alt="clothing line"
                >
                  View Merch
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={cloth} alt="clothing line" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Clothing;
