import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PADDING} from '../../constants';
import TreasuryBar from '../../components/molecules/bar/treasuryBar';

export default function TreasuryScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TreasuryBar
        totalAssets={'$1,008,778.92'}
        totalCashInSweep={'$16,903.60'}
        totalInvestments={'$991,875.32'}
        realizedEarnings={'$21,382.91'}
      />
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
