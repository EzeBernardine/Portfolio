import styled from "styled-components";
import { Flex } from "../Box/flexibleDiv.styles";

export const WorksStyle = styled.div`
  background: #1f2229;
  .pictureFrame {
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .container {
    padding: 50px 0;
    position: relative;
    /* box-shadow: inset 0 0 112px #000000; */
    section {
      .images {
        width: 80%;
        @media (max-width: 500px) {
          width: 90%;
        }
        .work {
          margin-bottom: 20px;
          &:not(:last-child) {
            padding-bottom: 20px;
            border-bottom: 1px solid #2b2e35;
          }
          .work-img {
            @media (max-width: 700px) {
              margin-top: 20px;
              width: 100%;
            }
            .imageAnchor {
              position: relative;
              &:hover .name {
                display: flex;
              }
              .pictureFrame {
                height: auto;
                width: 70%;
				max-height: 300px;
				height: 300px;
                @media (max-width: 1000px) {
                  width: 90%;
                }
                @media (max-width: 700px) {
                  width: 100%;
                }
                cursor: pointer;
                overflow: hidden;
                img {
                  height: 100%;
                  width: 100%;
                  object-fit: contain;
                }
              }
            }
            @media (max-width: 700px) {
              width: 100%;
            }
          }
          @media (max-width: 700px) {
            flex-direction: column;
          }
        }
        .work-details {
          .work-name {
            color: white;
            font-family: "Charmonman", cursive;
          }
          .work-stack {
			margin-top: 7px;
			ul {
				text-align: start;
			}
            li {
              list-style-type: none;
              display: inline-flex;
              margin-right: 10px;
              @media (max-width: 1000px) {
                margin-right: 5px;
                img {
                  width: 40px;
                  height: 40px;
                }
              }
              @media (max-width: 800px) {
                margin-right: 3px;
              }
            }
          }
          .work-review {
            color: white;
            text-align: start;
            font-size: 16px;
			margin-top: 30px;
          }
          @media (max-width: 700px) {
            width: 100%;
            order: -1;
          }
        }
      }
    }
  }
`;

export const StackContainer = styled(Flex)`
	background-color: #4a4949;
	padding: 3px 10px;
	border-radius: 4px;
`;

export const StackText = styled.span`
	color: #c2bfbf;
	margin: 0 0px 0 1px;
	font-size: 14px;
`;