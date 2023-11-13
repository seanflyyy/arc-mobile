import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  OPERATING_BACKGROUND_COLOR,
  RESERVE_BACKGROUND_COLOR,
  TREASURY_BACKGROUND_COLOR,
} from '../../../constants';

const AssetsBar = ({
  treasuryPercent,
  operatingPercent,
  reservePercent,
}: {
  treasuryPercent: number;
  operatingPercent: number;
  reservePercent: number;
}) => {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <View style={[styles.treasury, {width: `${treasuryPercent - 0.5}%`}]} />
        <View
          style={[styles.operating, {width: `${operatingPercent - 0.5}%`}]}
        />
        <View style={[styles.reserve, {width: `${reservePercent - 0.5}%`}]} />
      </View>
      <View style={styles.row}>
        <Assets
          percent={treasuryPercent}
          asset="Treasury"
          backgroundColor="#BA8549"
        />
        <Assets
          percent={operatingPercent}
          asset="Operating"
          backgroundColor="#00756E"
        />
        <Assets
          percent={reservePercent}
          asset="Reserve"
          backgroundColor="#00A99D"
        />
      </View>
    </View>
  );
};

const Assets = ({
  percent,
  asset,
  backgroundColor,
}: {
  percent: number;
  asset: string;
  backgroundColor: string;
}) => {
  return (
    <View style={styles.assetsRow}>
      <View
        style={[styles.assetsIndicator, {backgroundColor: backgroundColor}]}
      />
      <Text style={styles.assetsLabel}>
        {percent}% {asset}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    marginBottom: 25,
  },
  container: {
    height: 10,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  treasury: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: TREASURY_BACKGROUND_COLOR,
  },
  operating: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: OPERATING_BACKGROUND_COLOR,
  },
  reserve: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: RESERVE_BACKGROUND_COLOR,
  },
  assetsIndicator: {
    height: 12,
    width: 12,
    borderRadius: 2,
    marginRight: 7,
  },
  assetsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 15,
  },
  row: {
    flexDirection: 'row',
  },
  assetsLabel: {
    fontSize: 12,
  },
});

export default AssetsBar;

// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// const ProgressBar = ({progress}) => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.filler, {width: `${progress / 2}%`}]} />
//       <View style={[styles.filler, {width: `${progress / 2}%`}]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {

//   },
//   filler: {
//     height: '100%',
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
// });

// export default ProgressBar;
