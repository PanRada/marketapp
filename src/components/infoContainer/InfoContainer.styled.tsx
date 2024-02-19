import styled from 'styled-components/native';

export const InfoContainer = styled.View`
  background-color: black;
  height: 120px;
`;

export const Input = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  width: 80%;
`;
export const Text = styled.Text`
  color: lightgrey;
  padding-top: 8px;
  font-size: 9px;
  text-align: center;
`;

export const BolderText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 12px;
  text-align: center;
`;

export const Col = styled.View`
  width: 25%;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const Box = styled.View`
  background-color: black;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
