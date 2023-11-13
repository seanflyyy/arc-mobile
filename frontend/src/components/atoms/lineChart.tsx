import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {PADDING} from '../../constants';

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 150, 136, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(136, 136, 136, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

export default function CustomLineChart({
  chartLabels,
  chartData,
}: {
  chartLabels: string[];
  chartData: number[];
}) {
  const getChartData = () => {
    const data = {
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43, 50],
          color: () => `rgba(17, 160, 128, 1)`,
          strokeWidth: 2, // optional
        },
      ],
    };

    data.labels = chartLabels;
    data.datasets[0].data = chartData;

    return data;
  };

  return (
    <LineChart
      data={getChartData()}
      width={Dimensions.get('window').width - PADDING * 2}
      height={220}
      chartConfig={chartConfig}
      bezier
      fromZero={true}
      withDots={false}
      withVerticalLines={false}
      withHorizontalLines={false}
      withHorizontalLabels={false}
      style={
        {
          // borderRadius: 16,
        }
      }
    />
  );
}
