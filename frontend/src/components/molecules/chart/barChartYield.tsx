import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomBarChart from '../../atoms/chart/barChart';
import TextContainer from '../../atoms/container/textContainer';
import {GRAY_LIGHT, PADDING} from '../../../constants';

const YieldSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yield summary</Text>
      <CustomBarChart />
      <View style={styles.row}>
        <TextContainer
          title={'Last month yield'}
          description={'$16,019.37'}
          style={styles.half}
        />
        <TextContainer
          title={'Last month rate'}
          description={'4.00%'}
          style={styles.half}
        />
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
    marginBottom: PADDING,
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
    paddingBottom: 15,
  },
  row: {
    paddingTop: PADDING * 1.5,
    flexDirection: 'row',
  },
  half: {
    flex: 1,
  },
});

export default YieldSummary;
