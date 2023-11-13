import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChartWithInformation from '../../components/molecules/chart/chartWithInformation';
import {PADDING} from '../../constants';

export default function ReserveScreen() {
  return (
    <View style={styles.container}>
      <ChartWithInformation
        balance={'$4,821,882'}
        routingNumber={'082472413'}
        accountNumber={'0824728228'}
        chartLabels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
        chartData={[10, 20, 28, 34, 43, 48, 53]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: PADDING,
    flex: 1,
  },
});
