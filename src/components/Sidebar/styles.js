import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-top: 1.5rem;
  background: var(--background-black);
  position: fixed;
  left: 0;
  width: 14.25rem;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;

    padding: 0 24px;
    margin: 0 0 18px;

    :hover {
      cursor: pointer;
    }

    img {
      height: 2.5rem;
      filter: brightness(0) invert(1);
      margin-right: 0.25rem;
    }
  }
`
