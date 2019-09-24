import styled from "styled-components";

const Message = styled.div`
  padding: 30px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text-wrapper {
    background: ${props => props.theme.green};
    border-radius: 50%;
    height: 60px;
    width: 60px;
    font-weight: 800;
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Message;
