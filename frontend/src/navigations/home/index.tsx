import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import AssetsBar from '../../components/molecules/bar/assetsBar';
import {PADDING} from '../../constants';
import AssetsContainer from '../../components/molecules/container/assetsContainer';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Welcome, Miles</Text>
      <Text style={styles.assetsContainer}>
        <Text adjustsFontSizeToFit={true} style={styles.assets}>
          Your total assets are{' '}
        </Text>
        <Text adjustsFontSizeToFit={true} style={styles.amount}>
          $12,301,614
        </Text>
      </Text>
      <AssetsBar treasuryPercent={89} operatingPercent={2} reservePercent={9} />
      <AssetsContainer />
      {/* <AssetsBar progress={80} /> */}
      <Text>Recent transcations</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: PADDING,
    flex: 1,
  },
  welcome: {
    fontWeight: '400',
    paddingBottom: 8,
    fontSize: 13,
  },
  assetsContainer: {
    paddingBottom: 20,
  },
  assets: {
    fontWeight: '400',
    fontSize: 22,
  },
  amount: {
    fontWeight: '600',
    fontSize: 22,
  },
});
