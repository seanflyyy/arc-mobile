import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {GRAY_LIGHT, GRAY_MEDIUM, PADDING} from '../../../constants';
import TextContainer from '../../atoms/container/textContainer';
const Basket = ({
  basket,
  basketName,
  description,
  amountTitle,
  amount,
  yieldTitle,
  yieldAmount,
  indicatorColor,
  icon,
  marginBottom,
}: {
  basket: string;
  basketName: string;
  description: string;
  amountTitle: string;
  amount: string;
  yieldTitle: string;
  yieldAmount: string;
  indicatorColor: string;
  icon: ImageSourcePropType;
  marginBottom?: number;
}) => {
  return (
    <View style={[styles.container, {marginBottom: marginBottom}]}>
      <View style={[styles.row, {marginBottom: PADDING / 1.25}]}>
        <View style={[styles.indicator, {backgroundColor: indicatorColor}]} />
        <Text style={styles.basket}>{basket}</Text>
      </View>
      <View style={[styles.row, {marginBottom: PADDING / 1.25}]}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.basketName}>{basketName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <TextContainer
          title={amountTitle}
          description={amount}
          style={{flex: 1}}
        />
        <TextContainer
          title={yieldTitle}
          description={yieldAmount}
          style={{flex: 1}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: GRAY_LIGHT,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_5,
    padding: PADDING,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  basket: {
    fontWeight: '600',
    fontSize: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderColor: GRAY_LIGHT,
  },
  basketName: {
    fontWeight: '500',
    fontSize: 17,
    marginBottom: PADDING / 2,
  },
  description: {
    fontSize: 11,
    color: GRAY_MEDIUM,
    fontWeight: '500',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 15,
    marginRight: 7,
  },
});

export default Basket;
