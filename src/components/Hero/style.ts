import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px 120px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4px;

  @media (max-width: 1024px) {
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;

    img {
      max-height: 100px;
    }
  }

  @media (max-width: 596px) {
    grid-template-columns: 1fr;
  }

  a {
    position: relative;
  }

  img {
    max-width: 100%;
    max-height: 450px;
    object-fit: cover;
    z-index: 10;
  }

  span {
    position: absolute;
    z-index: 20;
    color: white;
    font-weight: bold;
    font-size: 32px;
    bottom: 24px;
    left: 24px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: black;
  opacity: 30%;
  transition: 0.4s;

  &:hover {
    opacity: 60%;
  }
`
