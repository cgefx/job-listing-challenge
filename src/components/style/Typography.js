import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: ${({ large }) => (large ? '5.6rem' : '2.2rem')};
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-align: ${({ centered }) => (centered ? 'center' : 'initial')};
  @media (min-width: 900px) {
    font-size: ${({ medium }) => (medium ? '2.2rem' : '3.2rem')};
  }
`

export const HeadingSecondary = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
`

export const Paragraph = styled.p`
  font-size: ${({ small }) => (small ? '1.2rem' : '1.4rem')};
  font-weight: 700;
  color: ${({ theme }) => theme.textSecondary};
  text-transform: capitalize;
`

export const SubHeading = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  letter-spacing: 0.4rem;
  text-align: center;
  margin-bottom: 1rem;
`

export const SmallText = styled.small`
  font-size: 1.2rem;
  color: ${({ color }) =>
    color === 'up' ? `var(--limegreen)` : `var(--brightred)`};
  margin-left: 0.5rem;
`
