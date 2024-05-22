import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 120px;

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 2px solid var(--product-border);
  padding: 12px;
  cursor: pointer;
  transition: 0.4s;

  p {
    font-size: 18px;
  }

  h4 {
    font-size: 20px;
  }

  img {
    max-width: 275px;
    max-height: 275px;
  }

  &:hover {
    border-color: var(--text-dark);
  }
`
