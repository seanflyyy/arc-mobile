import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PADDING} from '../../constants';
import ChartWithInformation from '../../components/molecules/chart/chartWithInformation';
import TransactionHistory from '../../components/molecules/transactionHistory/transactionHistory';
import Cards from '../../components/molecules/container/cards';

export default function OperatingScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ChartWithInformation
        balance={'$578,429.17'}
        routingNumber={'082472413'}
        accountNumber={'0824728305'}
        chartLabels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
        chartData={[50, 45, 50, 42, 50, 46, 60]}
      />
      <Cards />
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
