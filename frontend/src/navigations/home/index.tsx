import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {PADDING} from '../../constants';
import AssetsContainer from '../../components/molecules/container/assetsContainer';
import TransactionHistory from '../../components/molecules/transactionHistory/transactionHistory';
import HomeAssetsBar from '../../components/molecules/bar/homeBar';
import Padding from '../../components/atoms/style/Padding';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HomeAssetsBar />
      <AssetsContainer />
      <TransactionHistory />
      <Padding />
      <Padding />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: PADDING,
    flex: 1,
  },
  transactionHistory: {
    paddingVertical: PADDING / 2,
  },
});
