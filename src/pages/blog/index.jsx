import React from "react";
import { BlogStyle } from "./styles.js";
import MsallMenu from "../../component/SmallMenu";
import { Flex, Grid } from "../../component/Box/flexibleDiv.styles";
import Footer from "../../component/Footer";
import blogs from "./data";
import tech from "../../assets/images/thech.webp";

const Blog = () => {
  return (
    <BlogStyle>
      <MsallMenu />

      <Flex className="blog-container">
        <Grid
          className="blogs"
          gridCol="repeat(auto-fit, 300px)"
          gap="50px"
          alignItems="stretch"
        >
          {blogs.map(({ href, title, img, subTitle, expKey }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={expKey}
            >
              <Flex className="blog" width="300px">
                <Flex justifyContent="flex-start">
                  <h2 className="title">{title}</h2>

                  <Flex height="200px" className="pictureFrame">
                    {<img src={img ? img : tech} alt={title} />}
                  </Flex>

                  <Flex width="auto" height="auto" className="subTitle">
                    <p> {subTitle}</p>
                  </Flex>
                </Flex>
              </Flex>
            </a>
          ))}
        </Grid>
      </Flex>

      <Footer />
    </BlogStyle>
  );
};

export default Blog;
