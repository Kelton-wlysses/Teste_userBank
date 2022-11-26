import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 8%;

  .background{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    nav {
      width: 80%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 0;

      .logo {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
          /* margin-top: 4rem; */
          font-style: normal;
          font-weight: 500;
          font-size: 32px;

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
            font-size: 22px;

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

  }
 
`
