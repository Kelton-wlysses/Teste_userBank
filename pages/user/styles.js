import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 94vh;
  background: #F7F7F7;

  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;

    margin-top: 4rem;
    width: 80%;
    height: 75%;

    padding: 2rem;
    background: #FFFFFF;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.1);
    border-radius: 25px;

    figure {
      width: 35%;
      height: 100%;
      padding-left: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      img {
        width: 100%;
        height: 80%;

        background: #FFFFFF;
        box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.1);
        border-radius: 25px;
      }

      h2 {
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;

        color: #000000;
      }
    }

    .infos {
      width: 62%;
      height: 93%;
      display: flex;
      justify-content: space-around;

      .up, .down{
        width: 100%;
        height: 85%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .pessoal, .contato, .cadastro, .endereco{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .endereco {
        padding-top: 4rem;
        margin-top: 2rem;
      }

      h2 {
        text-align: start;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        padding-bottom: 1rem;

        color: #000000;
      }
      p {
        display: flex;
        gap: 0.3rem;
        flex-direction: column;

        text-align: start;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;

        color: #000000;
      }
      span {
        text-align: start;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

        color: #676767;
      }
    }

  }




`