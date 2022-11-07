import React from 'react'
import styled from "styled-components";
import blogimg from "../assets/images/blogimg.png";

export default function Blog() {
  const blogData = [
    {
      imgblog: blogimg,
      date: "11 Oct, 2022",
      title: "Lorem ipsum dolor, sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident sapiente qui placeat ",
    },
    {
      imgblog: blogimg,
      date: "11 Oct, 2022",
      title: "Lorem ipsum dolor, sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident sapiente qui placeat ",
    },
    {
      imgblog: blogimg,
      date: "11 Oct, 2022",
      title: "Lorem ipsum dolor, sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident sapiente qui placeat ",
    },
    {
      imgblog: blogimg,
      date: "11 Oct, 2022",
      title: "Lorem ipsum dolor, sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident sapiente qui placeat ",
    },
  ];

  return (
    <Section id="blogs">
      <div className="title">
        <h2>Our Blog</h2>
        <h5>Where you can earn crypto</h5>
      </div>
      <div className="blogs">
        {blogData.map((item, index) => {
          return (
            <div className="blog" key={index}>
              <img src={blogimg} alt="" />
              <div className="data">
                <h6>{item.date}</h6>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    column-gap: 2rem;
    justify-content: space-between;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 100%;
        //height: 30%;
      }
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    margin: 2rem 12rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
    .blog {
      width: 39%;
    }
  }

  @media screen and (max-width: 768px) {
    .blog {
      width: 47.7%;
    }
  }

  @media screen and (max-width: 576px) {
    .blog {
      width: 47.7%;
    }
  }
`;