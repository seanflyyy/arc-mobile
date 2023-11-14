import {StyleSheet, Text, View} from 'react-native';
import Table from '../../atoms/table';
import {PADDING} from '../../../constants';

const TransactionHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent transactions</Text>
      <Table />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: PADDING * 1.2,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: PADDING,
  },
});

export default TransactionHistory;
