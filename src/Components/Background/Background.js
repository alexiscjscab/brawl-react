import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

`