import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  padding:15px;
  border:1px solid;
  
  color: ${ ({ type }) => type === 'warning' ? 'yellow': 'red' };
  overflow:auto;
`;

