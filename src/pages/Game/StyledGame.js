import styled from 'styled-components';

export const StyledGame = styled.div`
  
  .title {
    letter-spacing: 2px;
    padding: 10px;
    text-align: center;
    h1 {
      margin-top: 2.5rem;
      text-shadow: 0px 0px 10px #fff;
    }
  }

  .cards {
    margin-top: 20px;
    padding: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    text-align: center;
    &:hover{
      box-shadow: 0px 0px 10px #000 inset, 0px 0px 10px #000;
      transform: translateY(-5px);
    }

    img {
      width: 40px;
      height: 40px;
    }

    h3 {
      letter-spacing: 1px;
      font-weight: 700;
      text-shadow: 1px 1px 10px #fff;
    }

    p {
      color: #fff;
      letter-spacing: 1px;
      font-weight: 700;
      text-shadow: 1px 1px 10px #000;
    }
  }

  .loader{
    margin: 6rem 0;
    padding: 10px;
  }
`;
