import React from "react";
import { BlogStyle } from "./styles.js";
import MsallMenu from "../../component/SmallMenu";
import { Flex, Grid } from "../../component/Box/flexibleDiv.styles";
import Footer from "../../component/Footer";
import blogs from "./data";
import tech from "../../public/images/thech.webp";
import Image from "next/image.js";

const Blog = () => {
  return (
    <BlogStyle>
      <MsallMenu />

      <Flex className="blogs-container">
        <Grid
          className="blogs"
          gridCol="repeat(auto-fit, 300px)"
          gap="50px"
          alignItems="stretch"
        >
          {blogs.map(({ href, title, img, subTitle, expKey }) => (
            <dvi className='blog-container' key={title}>
              <small
                className="url"
                onClick={() => navigator.clipboard.writeText(href)}
              >
                Copy URL
              </small>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={expKey}
              >
                <Flex className="blog" width="300px">
                  <Flex justifyContent="flex-start" className="blog-main">
                    <h2 className="title">{title}</h2>

                    <Flex height="200px" className="pictureFrame">
						{<Image src={img ? img : tech.src} alt={title} fill/>}
                    </Flex>

                    <Flex width="auto" height="auto" className="subTitle">
                      <sub> {subTitle}</sub>
                    </Flex>
                  </Flex>
                </Flex>
              </a>
            </dvi>
          ))}
        </Grid>
      </Flex>

      <Footer />
    </BlogStyle>
  );
};

export default Blog;
