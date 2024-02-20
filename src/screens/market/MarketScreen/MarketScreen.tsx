import React, {useEffect, useMemo} from 'react';
import {Dimensions} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Container from '@components/container/Container';
import Text from '@components/text/Text';
import {LineChart} from 'react-native-chart-kit';
import {useWebSocket} from '@hooks/WebsocketContext';

const MarketScreen = () => {
  const {connectWebSocket, disconnectWebSocket, trades} = useWebSocket();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      connectWebSocket();
    } else {
      disconnectWebSocket();
    }
  }, [connectWebSocket, disconnectWebSocket, isFocused]);

  // useMemo to memorize the chart data
  const chartData = useMemo(
    () => ({
      labels: [],
      datasets: [
        {
          data: trades,
        },
      ],
    }),
    [trades],
  );

  const isNotEmpty = trades.length > 0;

  return (
    <Container>
      <Text text={'Real-Time BTC/USDT Trade Data'} />
      {isNotEmpty && (
        <LineChart
          withHorizontalLabels={false}
          withVerticalLabels={false}
          data={chartData}
          width={Dimensions.get('window').width - 16}
          height={320}
          chartConfig={{
            backgroundColor: '#4b4b4b',
            backgroundGradientFrom: '#6c6358',
            backgroundGradientTo: '#847258',
            decimalPlaces: 8,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
            },
            propsForDots: {
              r: '2',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
        />
      )}
    </Container>
  );
};

export default MarketScreen;
