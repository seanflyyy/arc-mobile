import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BORDER_RADIUS_5, GRAY_LIGHT, PADDING} from '../../../constants';

const TextButton = ({text}: {text: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: PADDING / 2,
    width: '100%',
    borderRadius: BORDER_RADIUS_5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default TextButton;
