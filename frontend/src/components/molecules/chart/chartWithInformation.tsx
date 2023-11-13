import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomLineChart from '../../atoms/lineChart';
import {GRAY_LIGHT, GRAY_MEDIUM, PADDING} from '../../../constants';

const ChartWithInformation = ({
  balance,
  routingNumber,
  accountNumber,
  chartLabels,
  chartData,
}: {
  balance: string;
  routingNumber: string;
  accountNumber: string;
  chartLabels: string[];
  chartData: number[];
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balance</Text>
      <Text style={styles.amount}>{balance}</Text>

      {/* <View style={{left: -50, backgroundColor: 'purple'}}> */}
      <View style={styles.chart}>
        <CustomLineChart chartLabels={chartLabels} chartData={chartData} />
      </View>
      <View style={styles.row}>
        <View style={styles.bankNumberRow}>
          <Text style={styles.title}>Routing number</Text>
          <Text style={styles.bankNumber}>{routingNumber}</Text>
        </View>
        <View style={styles.bankNumberRow}>
          <Text style={styles.title}>Account number</Text>
          <Text style={styles.bankNumber}>{accountNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: GRAY_LIGHT,
    borderRadius: 10,
    borderWidth: 1,
    padding: PADDING / 1.25,
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
    paddingBottom: 6,
  },
  amount: {
    fontWeight: '600',
    fontSize: 26,
    paddingBottom: 5,
  },
  chart: {
    paddingBottom: 6,
  },
  row: {
    flexDirection: 'row',
  },
  bankNumber: {
    fontWeight: '400',
    fontSize: 18,
  },
  bankNumberRow: {
    flex: 1,
  },
});

export default ChartWithInformation;
