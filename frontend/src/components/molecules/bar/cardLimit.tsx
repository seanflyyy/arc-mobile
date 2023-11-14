import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProgressBar from '../../atoms/bar/progressBar';
import {PADDING} from '../../../constants';

const CardLimit = ({
  moneySoFar,
  limit,
  style,
}: {
  moneySoFar: number;
  limit: number;
  style?: any;
}) => {
  const formatCurrency = number => {
    if (number !== Math.floor(number)) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(number);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // Remove these options if you want the decimal part for currencies like $95,319.00
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(number);
    }
  };

  return (
    <View style={style}>
      <View style={styles.progressBar}>
        <ProgressBar progress={moneySoFar / limit} />
      </View>
      <Text style={styles.amount}>
        <Text style={styles.amountSoFar}>{formatCurrency(moneySoFar)}</Text> /{' '}
        {formatCurrency(limit)} limit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  amount: {
    flexDirection: 'row',
    fontSize: 24,
  },
  amountSoFar: {
    fontWeight: 'bold',
  },
  progressBar: {
    marginBottom: PADDING,
  },
});

export default CardLimit;
