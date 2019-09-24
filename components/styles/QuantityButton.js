import styled from 'styled-components';

const QuantityButton = styled.button`
  border-radius: 5px;
  border: 0;
  position: relative;
  width: 30px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.grey};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.5;
  }

  img {
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default QuantityButton;