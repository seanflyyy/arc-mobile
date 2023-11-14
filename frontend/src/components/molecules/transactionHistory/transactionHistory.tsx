import {StyleSheet, Text, View} from 'react-native';
import Table from '../../atoms/table/table';
import {PADDING} from '../../../constants';

const TransactionHistory = () => {
  return (
    <View>
      <Text style={styles.title}>Recent transactions</Text>
      <Table />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: PADDING,
  },
});

export default TransactionHistory;
