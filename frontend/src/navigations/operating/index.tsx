import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {PADDING} from '../../constants';
import ChartWithInformation from '../../components/molecules/chart/chartWithInformation';

export default function OperatingScreen() {
  return (
    <ScrollView style={styles.container}>
      <ChartWithInformation
        balance={'$578.429'}
        routingNumber={'082472413'}
        accountNumber={'0824728305'}
        chartLabels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']}
        chartData={[50, 45, 50, 42, 50, 46, 60]}
      />
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

// import * as React from 'react';
// import {View, useWindowDimensions} from 'react-native';
// import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

// const SecondRoute = () => (
//   <View style={{flex: 1, backgroundColor: '#673ab7'}} />
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// const renderTabBar = (props: any) => (
//   <TabBar
//     {...props}
//     // indicatorStyle={{backgroundColor: 'white', color: 'black'}}
//     style={{backgroundColor: 'purple', color: 'black', fontWeight: 'bold'}}
//   />
// );

// export default function OperatingScreen() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'First'},
//     {key: 'second', title: 'Second'},
//   ]);

//   return (
//     <TabView
//       navigationState={{index, routes}}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{width: layout.width}}
//       renderTabBar={renderTabBar}
//     />
//   );
// }
