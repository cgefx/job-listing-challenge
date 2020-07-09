import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export default FlexBox
