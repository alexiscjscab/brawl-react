import styled from 'styled-components';


export const StyledHome = styled.div`
  min-height: 100vh;
  h1 {
    text-align: center;
    letter-spacing: 2px;
    font-size: 2.5rem;
    font-weight: 450;
  }

  .cards{
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap:  30px;
    justify-items: center;
    align-items: center;    
    align-content: center;
  }


  .card{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    position: relative;
    p{
      text-align: right;
      font-size: 1.1rem;
      letter-spacing: 1px;
      font-weight: 700;
      margin-right: 2px;
      text-shadow: 0px 0px 2px #fff;
    }

    h3{;
      margin-left: 5px;
      position: absolute;
      bottom: 25px;
      color: #fff;
      background: rgba(30,30,30,0.5);
      border-radius: 5px;
      padding: 5px;
    }

    img{
      width: 160px;
      height:160px;
      transition: 0.4s ease-in-out;
      cursor: pointer;
      border-radius: 25px;
      filter: grayscale(50%);
      &:hover{
        transform: translateY(-5px);
        filter: grayscale(0%);
        box-shadow: 0px 0px 10px #fff;
      }
    }

    
  }
`