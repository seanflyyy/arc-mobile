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
  treasury = 'Treasury',
  operating = 'Operating',
  reserve = 'Reserve',
  treasuryColor = TREASURY_BACKGROUND_COLOR,
  operatingColor = OPERATING_BACKGROUND_COLOR,
  reserveColor = RESERVE_BACKGROUND_COLOR,
  isShowLegend = true,
}: {
  treasuryPercent: number;
  operatingPercent: number;
  reservePercent: number;
  treasury?: string;
  operating?: string;
  reserve?: string;
  treasuryColor?: string;
  operatingColor?: string;
  reserveColor?: string;
  isShowLegend?: boolean;
}) => {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.treasury,
            {
              width: `${treasuryPercent - 0.5}%`,
              backgroundColor: treasuryColor,
            },
          ]}
        />
        <View
          style={[
            styles.operating,
            {
              width: `${operatingPercent - 0.5}%`,
              backgroundColor: operatingColor,
            },
          ]}
        />
        <View
          style={[
            styles.reserve,
            {width: `${reservePercent - 0.5}%`, backgroundColor: reserveColor},
          ]}
        />
      </View>
      {isShowLegend && (
        <View style={styles.row}>
          <Assets
            percent={treasuryPercent}
            asset={treasury}
            backgroundColor={treasuryColor}
          />
          <Assets
            percent={operatingPercent}
            asset={operating}
            backgroundColor={operatingColor}
          />
          <Assets
            percent={reservePercent}
            asset={reserve}
            backgroundColor={reserveColor}
          />
        </View>
      )}
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
  },
  operating: {
    height: '100%',
    borderRadius: 3,
  },
  reserve: {
    height: '100%',
    borderRadius: 3,
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
