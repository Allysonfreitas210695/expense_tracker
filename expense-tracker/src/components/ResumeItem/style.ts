import styled from "styled-components";

export const Container = styled.div`
  padding-left: 10px;
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 7px;
`;

export const Value = styled.div<{color?: string}>`
  text-align: center;
  font-weight: bold;
  color: ${props => props.color ?? '#000'};
`;