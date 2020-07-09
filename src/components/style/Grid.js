import styled from 'styled-components'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: ${({ large }) => (large ? '2.4rem' : '1.6rem')};

  @media (min-width: 1100px) {
    grid-gap: 2.4rem;
  }
`

export default Grid
