/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import AppNavigation from '../src/navigation/AppNavigator';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import '@testing-library/jest-native/extend-expect'; // Import the extend-expect function

test('checks if true is truthy', () => {
  expect(true).toBe(true);
});

describe('AppStack', () => {
  it('renders the correct home', async () => {
    const {getAllByText} = render(<AppNavigation />);
    await waitFor(() => getAllByText('Home'));
  });
  it('renders the correct details', async () => {
    const {getAllByText} = render(<AppNavigation />);
    await waitFor(() => getAllByText('Details'));
  });
  it('renders the correct market', async () => {
    const {getAllByText} = render(<AppNavigation />);
    await waitFor(() => getAllByText('Market'));
  });
});
