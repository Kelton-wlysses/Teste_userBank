import styled from "styled-components";

export const Container = styled.div`

  width: 30%;
  padding: 20px 0;
  margin-bottom: 4rem;
  background: #FFFFFF;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 85%;
    height: 25rem;
    border-radius: 2.5rem;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.5rem;
  } 

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    margin-bottom: 1rem;

    h2 {
      margin-bottom: 1rem;

      font-style: normal;
      font-weight: 500;
      font-size: 30px;

      color: #000000;
    }

    p {
      display: flex;
      gap: .5rem;

      font-style: normal;
      font-weight: 600;
      font-size: 16px;

      color: #000000;

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;

        color: gray;
      }
    }
  }

  a {
    background-color: var(--color-primary);
    border-radius: 2rem;

    width: 85%;
    margin-top: 1rem;
    padding: .8rem 0;

    text-align: center;
    color: var(--color-grey-0);

    :hover {
      transition: .4s;
      transform: scale(1.04);
      filter: brightness(0.9);
    }
  }

`