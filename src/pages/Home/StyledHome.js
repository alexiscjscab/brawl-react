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
      letter-spacing: 1px;
      font-weight: 700;
      margin-right: 2px;
      background: rgba(230,230,230,0.5);
      position: absolute;
      bottom: -20px;
      right: 0;
      text-align: right;
      padding: 2px;
    }

    h3{;
      margin-left: 5px;
      position: absolute;
      bottom: 15px;
      /* color: #fff; */
      border-radius: 5px;
      padding: 5px;
      font-weight: bold;
      background: #000;
    }

    h4{
      position: absolute;
      top: 10px;
      color: #fff;
      z-index: 1;
      margin-left: 5px;
      letter-spacing: 1px;
      font-weight: 300;
      left: 2px;
      background: #000;
      padding: 8px;
      border-radius: 50px;
    }

    img{
      width: 160px;
      height:160px;
      transition: 0.4s ease-in-out;
      cursor: pointer;
      border-radius: 25px;
      filter: grayscale(50%);
      &:hover{
        transform: translate3d(10px, 10px, 0) rotate(5deg);
        filter: grayscale(0%);
        box-shadow: 0px 0px 10px #fff;
      }
    }
  }
`