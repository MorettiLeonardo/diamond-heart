import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 120px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  img {
    border-radius: 50%;
    max-width: 70px;
    max-height: 70px;
  }
`

export const Navbar = styled.nav`
  display: flex;
  gap: 24px;
  text-transform: uppercase;

  a {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-dark);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
