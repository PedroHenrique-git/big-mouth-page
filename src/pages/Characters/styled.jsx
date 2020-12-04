import styled from "styled-components";
import * as colors from "../../config/colors";

export const CharactersContainer = styled.main`
  //padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CharacterCard = styled.div`
  background: ${colors.marromClaro};
  width: 450px;
  height: auto;
  margin: 22px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 0.3s;
  }

  @media (max-width: 640px) {
    width: 430px;
    &:hover {
      transform: none;
      transition: none;
    }
  }

  figure {
    display: flex;

    figcaption {
      padding: 0 20px;

      a {
        text-decoration: none;
        h3 {
          margin-bottom: 15px;
          white-space: nowrap;
          color: ${colors.verde};
          font-size: 20px;

          &:hover {
            color: #fff;
            transition: all 10ms;
          }
        }
      }

      p {
        padding: 2px 0;
        span {
          margin-right: 10px;
        }
        font-size: 20px;
        margin-right: 14px;
        color: ${colors.marfim};
      }
    }

    img {
      border-radius: 5px;
      width: 200px;
      height: 200px;
    }
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;

  button {
    border-radius: 50%;
    padding: 20px;
    height: 100px;
    width: 100px;
    margin-right: 80px;
    border: 1px solid ${colors.laranja};
    outline: none;
    background: transparent;
    cursor: pointer;
  }
`;
