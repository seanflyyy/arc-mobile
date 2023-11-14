import React from 'react';
import {StyleSheet, View} from 'react-native';
import Bar from '../../atoms/bar/bar';
import TextContainer from '../../atoms/container/textContainer';
import {PADDING} from '../../../constants';

const TreasuryBar = ({
  totalAssets,
  totalCashInSweep,
  totalInvestments,
  realizedEarnings,
}: {
  totalAssets: string;
  totalCashInSweep: string;
  totalInvestments: string;
  realizedEarnings: string;
}) => {
  const convertCurrencyStringToNumber = (currencyString: string): number => {
    // Remove the dollar sign and commas
    const numericString = currencyString.replace(/[$,]/g, '');

    // Convert the string to a number
    const number = parseFloat(numericString);

    // Return the number, or NaN if the conversion failed
    return isNaN(number) ? 0 : number;
  };

  const total =
    convertCurrencyStringToNumber(totalAssets) +
    convertCurrencyStringToNumber(totalCashInSweep) +
    convertCurrencyStringToNumber(totalInvestments);

  const convertToPercent = (value: string): number => {
    return parseFloat(
      ((convertCurrencyStringToNumber(value) / total) * 100).toFixed(2),
    );
  };

  return (
    <View>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <TextContainer title="Total assets" description={totalAssets} />
        </View>
        <View style={{flex: 1}}>
          <TextContainer
            title="Total cash in sweep"
            description={totalCashInSweep}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <TextContainer title="Total assets" description={totalInvestments} />
        </View>
        <View style={{flex: 1}}>
          <TextContainer
            title="Realized earnings"
            description={realizedEarnings}
          />
        </View>
      </View>
      <Bar
        treasuryPercent={convertToPercent(totalAssets)}
        operatingPercent={convertToPercent(totalCashInSweep)}
        reservePercent={convertToPercent(totalInvestments)}
        treasuryColor={'#C89A64'}
        operatingColor={'#B07F43'}
        reserveColor={'#76552C'}
        isShowLegend={true}
        treasury={'Assets'}
        operating={'Cash'}
        reserve={'Investments'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingBottom: PADDING / 2,
  },
});

export default TreasuryBar;
