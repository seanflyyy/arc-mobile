import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BORDER_RADIUS_5, GRAY_LIGHT, PADDING} from '../../../constants';
import CardIcon from '../../../assets/icons/card-icon';
import SettingsIcon from '../../../assets/icons/settings-icon';
import AddCircleIcon from '../../../assets/icons/add-circle';
import CardImage from '../../../assets/images/card.png';
import CardLimit from '../bar/cardLimit';
import TextButton from '../../atoms/button/textButton';

const Cards = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.row,
          {justifyContent: 'space-between', marginBottom: PADDING * 1.75},
        ]}>
        <View style={styles.row}>
          <CardIcon style={{marginRight: 10}} />
          <Text style={styles.title}>Your cards</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <SettingsIcon style={{marginRight: 10}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AddCircleIcon />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={CardImage} style={styles.image} />
      <CardLimit
        moneySoFar={8430.42}
        limit={30000}
        style={{marginBottom: PADDING}}
      />
      <TextButton text={'View card details'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: GRAY_LIGHT,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_5,
    padding: PADDING,
    marginBottom: PADDING,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginBottom: PADDING * 1.75,
  },
});

export default Cards;
