import React, {useState} from 'react';
import {ImageContainer} from './ImageContainer.styled';
import Image from '@components/image/Image';
import {ImageProps} from './types';

const ImageContainerComponent: React.FC<ImageProps> = ({
  id,
  uri,
  handlePress,
}) => {
  const [hasError, setHasError] = useState(false);
  const handleError = () => {
    setHasError(true);
  };
  return (
    <ImageContainer
      onPress={() => handlePress && handlePress(id)}
      testID="image-container">
      {!hasError && <Image source={uri} onError={handleError} testID="image" />}
    </ImageContainer>
  );
};

export default ImageContainerComponent;
