import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: ${({ centered }) => (centered ? 'center' : 'space-between')};
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
  }
`
export default Row
