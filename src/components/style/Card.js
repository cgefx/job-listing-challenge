import styled from 'styled-components'

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2.4rem;
  border-radius: 4px;
  margin: 0 auto;
  height: 100%;

  :hover,
  :focus {
    background: ${({ theme }) => theme.cardBackgroundHover};
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    box-shadow: var(--shadow-hover);
  }
`

export default Card
