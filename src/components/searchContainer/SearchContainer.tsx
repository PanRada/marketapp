import React from 'react';
import {
  SearchContainer,
  SearchInput,
  SearchText,
  SearchBox,
  SearchBoxButton,
} from './SearchContainer.styled';
import Icon from 'react-native-vector-icons/AntDesign';
import {SearchProps} from './types';

const SearchContainerComponent: React.FC<SearchProps> = ({
  setIpInput,
  ipInput,
  fetchIpInfo,
}) => {
  return (
    <SearchContainer>
      <SearchText>IP Tracker</SearchText>
      <SearchBox>
        <SearchInput
          onChangeText={setIpInput}
          value={ipInput}
          placeholder="Search for any IP address"
        />
        <SearchBoxButton>
          <Icon
            name="right"
            onPress={() => fetchIpInfo(ipInput)}
            color="white"
          />
        </SearchBoxButton>
      </SearchBox>
    </SearchContainer>
  );
};
export default SearchContainerComponent;
