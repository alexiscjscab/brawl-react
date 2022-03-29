import styled from 'styled-components';

export const StyledMaps = styled.div`
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
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
    box-shadow: 0px 0px 10px #000;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: rgba(30,30,30,1);
      color: #fff;
      box-shadow: 0px 0px 10px #fff inset, 0px 0px 10px #fff;
    }

    .image__maps{
      
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

    .image__gameMode{
      width: 40px;
      height: 40px;
    }
    h3{
      padding: 5px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  .loader{
    margin: 6rem 0;
    padding: 10px;
  }
`