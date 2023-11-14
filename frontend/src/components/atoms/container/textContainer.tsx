import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextContainer = ({
  title,
  description,
  descriptionFontSize = 18,
}: {
  title: string;
  description: string;
  descriptionFontSize?: number;
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.description, {fontSize: descriptionFontSize}]}>
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
