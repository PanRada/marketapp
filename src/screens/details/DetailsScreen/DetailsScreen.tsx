import React from 'react';
import Image from '@components/image/Image';
import Container from '@components/container/Container';
import Info from '@components/infoContainer/InfoContainer';

const DetailsScreen = ({route}: {route: any}) => {
  const {selectedImage, ipInfo} = route.params;

  return (
    <Container>
      <Image source={selectedImage.uri} />
      <Info ipInfo={ipInfo} />
    </Container>
  );
};

export default DetailsScreen;
