import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {PADDING} from '../../../constants';

const data = {
  labels: ['Since inception', 'Annualized'],
  datasets: [
    {
      data: [95319, 192875],
      colors: [() => '#17C59E', () => '#00544F'],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: () => 'black',
  labelColor: () => 'black',
  propsForLabels: {
    fontWeight: 'bold',
  },
  barPercentage: 1.5,
  spacingOuter: 10, // Adjust the outer spacing between bars
};

const CustomBarChart = () => {
  return (
    <BarChart
      data={data}
      width={Dimensions.get('window').width - PADDING * 4}
      height={220}
      yAxisLabel={'$'}
      chartConfig={chartConfig}
      withCustomBarColorFromData={true}
      withHorizontalLabels={false}
      flatColor={true}
      withInnerLines={false}
      showValuesOnTopOfBars={true}
      fromZero={true}
      showBarTops={false}
    />
  );
};

export default CustomBarChart;
