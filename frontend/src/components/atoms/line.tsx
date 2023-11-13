import React from 'react';
import {View} from 'react-native';

const Line = ({
  color,
  width,
  marginVertical,
}: {
  color: string;
  width: number;
  marginVertical: number;
}) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: width,
        marginVertical: marginVertical,
      }}
    />
  );
};

export default Line;
