import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

const TextContainer = ({
  title,
  description,
  descriptionFontSize = 18,
  descriptionFontWeight,
  style,
}: {
  title: string;
  description: string;
  descriptionFontSize?: number;
  descriptionFontWeight?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={[
          styles.description,
          {fontSize: descriptionFontSize, fontWeight: descriptionFontWeight},
        ]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 12,
    paddingBottom: 6,
  },
  description: {
    fontWeight: '400',
  },
});

export default TextContainer;
