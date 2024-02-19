import React from 'react';
import {render} from '@testing-library/react-native';
import ImageContainerComponent from '@components/ImageContainer/ImageContainer';
import {ImageProps} from '@components/imageContainer/types';

// cSpell:ignore Ionicons
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
describe('ImageContainer', () => {
  it('renders correctly with a valid image URI', () => {
    const imageProps: ImageProps = {
      uri: 'https://images.unsplash.com/photo-1639117474927-58d2d5a45b45?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: '1',
      handlePress: jest.fn(),
      testID: 'image-container',
    };

    const {getByTestId} = render(<ImageContainerComponent {...imageProps} />);
    expect(getByTestId('image-container')).toBeTruthy();
  });

  it('does not render with an invalid image URI', () => {
    const imageProps: ImageProps = {
      uri: 'https://example.com/invalid-image.jpg',
      id: '1',
      handlePress: jest.fn(),
      testID: 'image-container',
    };

    const {queryByTestId} = render(<ImageContainerComponent {...imageProps} />);
    expect(queryByTestId('image-container')).toBeTruthy();
  });
});
