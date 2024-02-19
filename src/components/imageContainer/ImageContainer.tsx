import React from 'react';
import {ImageContainer, Image} from './ImageContainer.styled';
import {ImageProps} from './types';
const ImageContainerComponent: React.FC<ImageProps> = ({
  id,
  uri,
  handlePress,
}) => {
  return (
    <ImageContainer onPress={() => handlePress(id)}>
      <Image source={{uri: uri}} />
    </ImageContainer>
  );
};

export default ImageContainerComponent;
