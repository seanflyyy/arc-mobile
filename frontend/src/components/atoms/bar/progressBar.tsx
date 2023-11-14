import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ProgressBar = ({progress}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, {width: `${progress * 100}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 6,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#11A080',
  },
});

export default ProgressBar;
