import styled from 'styled-components';

export const StyledMaps = styled.div`
  min-height: 100vh;
  h1{
    text-align: center;
    letter-spacing: 2px;
    font-size: 2.5rem;
    font-weight: 450;
  }

  .cards {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 2fr));
    grid-gap: 30px;
    justify-items: center;
    align-items: center;
    align-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    background: rgba(230,230,230,0.5);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    img{
      width: 200px;
      height: 200px;
      cursor: pointer;
      filter: grayscale(50%);
      transition: 0.4s ease-in-out;
      border-radius: 5px;
      :hover{ 
        filter: grayscale(0%);
      }
    }
    h3{
      padding: 5px;
      font-weight: bold;
    }
  }
`