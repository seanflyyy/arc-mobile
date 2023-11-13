import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TreasuryIcon from '../../../assets/icons/treasury-logo';
import {
  GRAY_LIGHT,
  GRAY_MEDIUM,
  INTEREST_RATE_GREEN,
  OPERATING_BACKGROUND_COLOR,
  PADDING,
  RESERVE_BACKGROUND_COLOR,
  TREASURY_BACKGROUND_COLOR,
} from '../../../constants';
import OperatingIcon from '../../../assets/icons/operating-logo';
import ReserveIcon from '../../../assets/icons/reserve-logo';
import Line from '../../atoms/line';

const AssetsContainer = () => {
  return (
    <View style={styles.container}>
      <AssetsRow
        icon={<TreasuryIcon color={'white'} />}
        asset={'Treasury'}
        bank={'BNY Mellon Pershing *9876'}
        interestEarned={'5.45'}
        amountOfAssets={'$11,020,469.30'}
      />
      <Line color={GRAY_LIGHT} width={1} marginVertical={PADDING / 1.25} />
      <AssetsRow
        icon={<OperatingIcon color={'white'} />}
        asset={'Operating'}
        bank={'Evolve Bank *2345'}
        amountOfAssets={'$215,844.57'}
      />
      <Line color={GRAY_LIGHT} width={1} marginVertical={PADDING / 1.25} />
      <AssetsRow
        icon={<ReserveIcon color={'white'} />}
        asset={'Reserve'}
        bank={'Evolve Bank *4567'}
        interestEarned={'4.00'}
        amountOfAssets={'$1,065,300.25'}
      />
    </View>
  );
};

const AssetsRow = ({
  icon,
  asset,
  bank,
  interestEarned,
  amountOfAssets,
}: {
  icon: JSX.Element;
  asset: string;
  bank: string;
  interestEarned?: string;
  amountOfAssets: string;
}) => {
  const getBackgroundColor = () => {
    switch (asset) {
      case 'Treasury':
        return TREASURY_BACKGROUND_COLOR;
      case 'Operating':
        return OPERATING_BACKGROUND_COLOR;
      case 'Reserve':
        return RESERVE_BACKGROUND_COLOR;
      default:
        return 'black';
    }
  };

  const getIconPadding = () => {
    if (asset === 'Reserve') {
      return 6;
    } else {
      return 4;
    }
  };

  return (
    <View style={styles.row}>
      <View style={styles.rowWithinRow}>
        <View
          style={[
            styles.icon,
            {backgroundColor: getBackgroundColor(), padding: getIconPadding()},
          ]}>
          {icon}
        </View>
        <View style={styles.leftRow}>
          <Text adjustsFontSizeToFit={true} style={styles.asset}>
            {asset}
          </Text>
          <Text adjustsFontSizeToFit={true} style={styles.bank}>
            {bank}
          </Text>
        </View>
      </View>
      <View style={styles.rightRow}>
        <Text adjustsFontSizeToFit={true} style={styles.amountOfAssets}>
          {amountOfAssets}
        </Text>
        {interestEarned && (
          <Text adjustsFontSizeToFit={true} style={styles.interestRate}>
            Earns {interestEarned}% net APY
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: GRAY_LIGHT,
    borderRadius: 4,
    borderWidth: 1,
    padding: PADDING / 1.25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  rowWithinRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 'auto',
  },
  icon: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    marginRight: 10,
  },
  asset: {
    fontWeight: '600',
    fontSize: 12,
  },
  bank: {
    fontWeight: '500',
    color: GRAY_MEDIUM,
    fontSize: 11,
  },
  interestRate: {
    fontWeight: '400',
    color: INTEREST_RATE_GREEN,
    fontSize: 9.5,
  },
  amountOfAssets: {
    fontWeight: '600',
    fontSize: 13,
  },
  leftRow: {
    justifyContent: 'space-between',
  },
  rightRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default AssetsContainer;
