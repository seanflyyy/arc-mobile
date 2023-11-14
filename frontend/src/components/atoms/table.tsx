import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GRAY_HEAVY, GRAY_LIGHT, PADDING} from '../../constants';
import Line from './line';

const Table = () => {
  const mapContent = () => {
    const content = [
      ['Today', 'Rippling', '$2,400.12'],
      ['Yesterday', 'Volume 7', '$24,396.55'],
      ['Yesterday', 'Volume 7', '$24,396.55'],
      ['Yesterday', 'Volume 8', '$24,396.55'],
      ['Yesterday', 'Volume 7', '$24,396.55'],
      ['Yesterday', 'Volume 8', '$24,396.55'],
      ['11 Nov 2023', 'Volume 7', '$24,396.55'],
      ['11 Nov 2023', 'Volume 7', '$24,396.55'],
      ['11 Nov 2023', 'Volume 8', '$24,396.55'],
      ['11 Nov 2023', 'Volume 7', '$24,396.55'],
      ['11 Nov 2023', 'Volume 8', '$24,396.55'],
    ];

    return content.map((item, index) => {
      return <Row key={index} color={'black'} content={item} />;
    });
  };

  return (
    <View style={styles.container}>
      <Row color={GRAY_HEAVY} content={['Date', 'To/From', 'Amount']} />
      {mapContent()}
    </View>
  );
};

const Row = ({
  content,
  color = 'black',
  isLastItem = false,
}: {
  content: string[];
  color?: string;
  isLastItem?: boolean;
}) => {
  const getTextAlign = (index: number, listLength: number) => {
    return index === listLength - 1 ? 'right' : 'left';
  };

  const getRows = () => {
    return content.map((item, index: number) => (
      <Text
        style={[
          styles.element,
          {color: color, textAlign: getTextAlign(index, content.length)},
        ]}
        key={index}
        adjustsFontSizeToFit={true}>
        {item}
      </Text>
    ));
  };

  return (
    <View>
      <View style={styles.row}>{getRows()}</View>
      {!isLastItem && (
        <Line color={GRAY_LIGHT} width={1} marginVertical={PADDING / 1.7} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
  element: {
    flex: 1,
    fontSize: 13,
  },
});

export default Table;
