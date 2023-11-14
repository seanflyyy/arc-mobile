import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AssetsBar from '../../atoms/bar/bar';

const HomeAssetsBar = () => {
  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
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

export default HomeAssetsBar;
