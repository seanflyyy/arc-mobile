import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomLineChart from '../../atoms/lineChart';
import {GRAY_LIGHT, GRAY_MEDIUM, PADDING} from '../../../constants';
import TextContainer from '../../atoms/container/textContainer';

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
      <TextContainer
        title={'Balance number'}
        description={balance}
        descriptionFontSize={26}
      />
      <View style={styles.chart}>
        <CustomLineChart chartLabels={chartLabels} chartData={chartData} />
      </View>
      <View style={styles.row}>
        <View style={styles.bankNumberRow}>
          <TextContainer title={'Routing number'} description={routingNumber} />
        </View>
        <View style={styles.bankNumberRow}>
          <TextContainer title={'Account number'} description={accountNumber} />
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
    paddingVertical: 6,
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
