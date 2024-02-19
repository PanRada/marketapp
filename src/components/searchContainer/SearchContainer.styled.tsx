import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  background-color: darkblue;
  height: 220px;
  align-items: center;
  justify-content: center;
`;

export const SearchBox = styled.View`
  flex-direction: row;
  margin-top: 30px;
  height: 40px;
`;

export const SearchInput = styled.TextInput`
  border-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-color: black;
  padding: 10px;
  background-color: white;
`;
export const SearchText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const SearchBoxButton = styled.View`
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 40px;
  height: 40px;
`;
