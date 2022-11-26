import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 460px;
  background-color: red;

  .background{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    nav {
      width: 80%;
      height: 8rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        h1{
          font-style: normal;
          font-weight: 500;
          font-size: 48px;

          color: #FFFFFF
        }
      }

      .menu {
        display: flex;
        gap: 3rem;
        li {
          list-style: none;

          a {
            font-style: normal;
            font-weight: 500;
            font-size: 24px;

            color: #FFFFFF;
            transition: 0.4s;
            border-bottom: 2px solid transparent;

            :hover{
              border-color: #FFFFFF;
            }
          }
        }
      }
    }

    .title {
      width: 60%;
      padding: 0 0 6% 0;
      font-style: normal;
      font-weight: 600;
      font-size: 52px;
      line-height: 96px;
      text-align: center;

      color: #FFFFFF;
    }

  }

 
`
