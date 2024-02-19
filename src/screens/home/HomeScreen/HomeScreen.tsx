import React, {useEffect, useCallback} from 'react';

import Carousel from 'react-native-snap-carousel';
import ImageContainerComponent from '@components/imageContainer/ImageContainer';
import SearchContainerComponent from '@components/searchContainer/SearchContainer';
import InfoContainerComponent from '@components/infoContainer/InfoContainer';
import images from '@mocks/images';
import {useIPReader} from '@hooks/index';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const {ipInfo, ipInput, setIpInfo, setIpInput} = useIPReader();

  const fetchIpInfo = useCallback(
    async (ipAddress: string = '') => {
      try {
        const response = await fetch(`https://ipwho.is/${ipAddress}`);
        const data = await response.json();
        if (data.success) {
          setIpInfo({
            ip: data.ip,
            isp: data.connection.isp,
            city: `${data.city} ${data.country_code} ${data.postal}`,
            timezone: `${data.timezone.abbr} ${data.timezone.utc}`,
          });
        } else {
          // Handle error or invalid IP
        }
      } catch (error) {
        console.error('Failed to fetch IP info:', error);
      }
    },
    [setIpInfo],
  );

  useEffect(() => {
    // Fetch IP info on mount
    fetchIpInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImagePress = (index: string) => {
    // Pass the selected image and IP info to the second screen
    //TODO: to check if this works properly.
    const selectedImage = images[Number(index)];
    navigation.navigate('Profile', {selectedImage, ipInfo});
  };

  const renderItem = ({item}: {item: {uri: string; id: string}}) => {
    return (
      <ImageContainerComponent
        uri={item.uri}
        id={item.id}
        handlePress={() => handleImagePress(item.id)}
      />
    );
  };

  return (
    <>
      <SearchContainerComponent
        setIpInput={setIpInput}
        ipInput={ipInput}
        fetchIpInfo={fetchIpInfo}
      />
      <InfoContainerComponent ipInfo={ipInfo} />
      <Carousel
        layout={'default'}
        data={images}
        renderItem={renderItem}
        sliderWidth={360}
        itemWidth={300}
      />
    </>
  );
};

export default HomeScreen;
