// A simple App component that renders the AppNavigator component.
import React from 'react';
import AppNavigator from '@navigation/AppNavigator';
import {WebSocketProvider} from '@hooks/WebsocketContext';

function App() {
  return (
    <WebSocketProvider>
      <AppNavigator />
    </WebSocketProvider>
  );
}
export default App;
