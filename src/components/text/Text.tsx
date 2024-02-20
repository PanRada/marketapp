import React from 'react';
import {Text} from './Text.styled';
import {TextProps} from './types';

const TextComponent: React.FC<TextProps> = ({text}) => {
  return <Text>{text}</Text>;
};

export default TextComponent;
