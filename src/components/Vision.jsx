import { Description } from "../elements/MessageElement";
import { VContainer, VContent, VDescription, VDImg, Vh2, VIcons, VImg, VItem, VItemWrapper, VSection, VSubTitle, VTitle, VWrapper } from "../elements/VisionElement";
import genders from '../assets/images/genders.jpg';

const visionData = [
  {
    icon: "ri-html5-fill",
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
  {
    icon: "ri-html5-fill",
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
  {
    icon: "ri-html5-fill",
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
  {
    icon: "ri-html5-fill",
    title: "Lorem, ipsum dolor.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem hic ipsam, deserunt ipsa dolore magni!",
  },
];
const Vision = () => {
    return (
      <VSection>
        <VContainer>
          <VWrapper>
            <VContent>
              <VSubTitle>Our Inspiration</VSubTitle>
              <Vh2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Vh2>
              <VDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident, nulla. Ut harum nobis corrupti cumque?
              </VDescription>
              <VItemWrapper>
                {visionData.map((item, index) => (
                  <VItem key={index}>
                    <VIcons>
                      <i className={item.icon}></i>
                    </VIcons>
                    <div>
                      <VTitle>{item.title}</VTitle>
                      <Description>{item.desc}</Description>
                    </div>
                  </VItem>
                ))}
              </VItemWrapper>
            </VContent>
            <VDImg>
              <VImg src={genders} />
            </VDImg>
          </VWrapper>
        </VContainer>
      </VSection>
    );
}

export default Vision;