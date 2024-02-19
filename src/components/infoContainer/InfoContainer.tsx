import React from 'react';
import {
  InfoContainer,
  BolderText,
  Box,
  Col,
  Text,
} from './InfoContainer.styled';
import {InfoProps} from './types';

const InfoContainerComponent: React.FC<InfoProps> = ({ipInfo}) => {
  return (
    <InfoContainer>
      <Box>
        <Col>
          <BolderText>IP Address:</BolderText>
          <Text>{ipInfo?.ip || 'Detecting...'}</Text>
        </Col>
        <Col>
          <BolderText>Location:</BolderText>
          <Text>{ipInfo?.city || 'Detecting...'}</Text>
        </Col>
        <Col>
          <BolderText>Timezone:</BolderText>
          <Text>{ipInfo?.timezone || 'Detecting...'}</Text>
        </Col>
        <Col>
          <BolderText>ISP:</BolderText>
          <Text>{ipInfo?.isp || 'Detecting...'}</Text>
        </Col>
      </Box>
    </InfoContainer>
  );
};

export default InfoContainerComponent;
