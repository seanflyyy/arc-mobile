import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ASSETS_COLOR, INVESTMENTS_COLOR, PADDING} from '../../constants';
import TreasuryBar from '../../components/molecules/bar/treasuryBar';
import Basket from '../../components/molecules/container/basketContainer';
import AmericaIcon from '../../assets/icons/america.png';
import DreyfusIcon from '../../assets/icons/dreyfus.png';
import VanguardIcon from '../../assets/icons/vanguard.png';
import Padding from '../../components/atoms/style/Padding';

export default function TreasuryScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TreasuryBar
        totalAssets={'$1,008,778.92'}
        totalCashInSweep={'$16,903.60'}
        totalInvestments={'$991,875.32'}
        realizedEarnings={'$21,382.91'}
      />
      <Basket
        basket={'Bank Sweep'}
        basketName={'Dreyfus Insured Deposits'}
        description={'$5.0M FDIC Insurance'}
        amountTitle={'Total balance'}
        amount={'$16,903.60'}
        yieldTitle={'Avg. 7-day yield'}
        yieldAmount={'2-3%'}
        marginBottom={PADDING / 1.25}
        indicatorColor={ASSETS_COLOR}
        icon={DreyfusIcon}
      />
      <Basket
        basket={'Money Market Fund'}
        basketName={'Vanguard Federal'}
        description={'$500K SIPC Insurance'}
        amountTitle={'Cost basis'}
        amount={'$153,868.69'}
        yieldTitle={'Avg. 7-day yield'}
        yieldAmount={'5.06%'}
        marginBottom={PADDING / 1.25}
        indicatorColor={ASSETS_COLOR}
        icon={VanguardIcon}
      />
      <Basket
        basket={'Treasury Bills'}
        basketName={'3 month Treasury Bill'}
        description={'Maturity: 07/04/2023'}
        amountTitle={'Cost basis'}
        amount={'$838,006.63'}
        yieldTitle={'Earnings at maturity'}
        yieldAmount={'$12,993.37'}
        marginBottom={PADDING / 1.25}
        indicatorColor={INVESTMENTS_COLOR}
        icon={AmericaIcon}
      />
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
});
