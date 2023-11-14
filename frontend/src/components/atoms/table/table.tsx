import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GRAY_HEAVY, GRAY_LIGHT, PADDING} from '../../../constants';
import Line from '../line/line';

const Table = () => {
  const mapContent = () => {
    const content = [
      ['Today', 'Acme Corp', '$2,400.12'],
      ['Yesterday', 'Globex', '$24,396.55'],
      ['Yesterday', 'Soylent Corp', '$2,500.30'],
      ['Yesterday', 'Initech', '$9,897.75'],
      ['Yesterday', 'Vandelay', '$24,100.20'],
      ['Yesterday', 'Hooli', '$10,950.45'],
      ['11 Nov 2023', 'Pied Piper', '$23,789.60'],
      ['11 Nov 2023', 'Stark Industries', '$13,200.85'],
      ['11 Nov 2023', 'Wayne Enterprises', '$23,650.99'],
      ['11 Nov 2023', 'Dunder Mifflin', '$40,050.10'],
      ['11 Nov 2023', 'Bluth Company', '$23,300.20'],
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
  row: {
    flexDirection: 'row',
  },
  element: {
    flex: 1,
    fontSize: 13,
  },
});

export default Table;
