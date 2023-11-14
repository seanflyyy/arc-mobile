import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ChartWithInformation from '../../components/molecules/chart/chartWithInformation';
import {PADDING} from '../../constants';
import TransactionHistory from '../../components/molecules/transactionHistory/transactionHistory';
import YieldSummary from '../../components/molecules/chart/barChartYield';

export default function ReserveScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ChartWithInformation
        balance={'$4,821,882.94'}
        routingNumber={'082472413'}
        accountNumber={'0824728228'}
        chartLabels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
        chartData={[10, 20, 28, 34, 43, 48, 53]}
      />
      <YieldSummary />
      <TransactionHistory />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: PADDING,
    flex: 1,
  },
});
