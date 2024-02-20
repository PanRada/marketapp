import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  ReactNode,
  useState,
} from 'react';

interface WebSocketContextType {
  connectWebSocket: () => void;
  disconnectWebSocket: () => void;
  trades: number[];
  errorMsg: string | null;
}

const WebSocketContext = createContext<WebSocketContextType>({
  connectWebSocket: () => {},
  disconnectWebSocket: () => {},
  trades: [],
  errorMsg: null,
});

interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const wsRef = useRef<WebSocket | null>(null);
  const [trades, setTrades] = useState<number[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const maxTradesToShow = 20; // Adjust based on how many trades you want to display

  const connectWebSocket = useCallback(() => {
    wsRef.current = new WebSocket(
      'wss://stream.binance.com:443/ws/btcusdt@aggTrade',
    );
    wsRef.current.onmessage = async e => {
      const data = JSON.parse(e.data);

      await new Promise(resolve => setTimeout(resolve, 0));

      setTrades(currentTrades => [
        ...currentTrades.slice(-(maxTradesToShow - 1)),
        parseFloat(data.p),
      ]);
    };
    wsRef.current.onerror = error => {
      setErrorMsg(error.message);
    };
    wsRef.current.onclose = () => {
      console.log('WebSocket Disconnected');
    };
  }, []);

  const disconnectWebSocket = useCallback(() => {
    wsRef.current?.close();
  }, []);

  return (
    <WebSocketContext.Provider
      value={{connectWebSocket, disconnectWebSocket, trades, errorMsg}}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = (): WebSocketContextType =>
  useContext(WebSocketContext);
