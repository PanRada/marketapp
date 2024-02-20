import React from 'react';
import {Container} from './Container.styled';

import {ContainerProps} from './types';

const ContainerComponent: React.FC<ContainerProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default ContainerComponent;
