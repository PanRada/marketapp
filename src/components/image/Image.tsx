import React from 'react';
import {Image} from './Image.styled';
import {ImageProps} from './types';

const ImageComponent: React.FC<ImageProps> = props => {
  return <Image source={{uri: props.source}} testID={props.testID} />;
};

export default ImageComponent;
