import styled from "styled-components";

const StyledFooter = styled.footer`
  flex-shrink: 0;
  padding: 2rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  .footer-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 0;
    }
  }

  a:visited,
  a:link {
    color: white;
    font-size: 1.6rem;
    display: inline-block;
    text-decoration: none;
    padding: 1rem;
    transition: all 0.2s;
    text-transform: uppercase;
  }

  a:hover,
  a:active {
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }
`;

export default StyledFooter;
