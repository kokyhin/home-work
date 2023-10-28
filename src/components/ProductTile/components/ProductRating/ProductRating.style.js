import styled from 'styled-components/macro';

export const Rating = styled.span`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};;
  margin-bottom: 10px;

  .outline {
    width: 20px;
  }
`;
