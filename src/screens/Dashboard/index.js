import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Sidebar from '../../components/moleculs/Sidebar';
import Store from '../Store';
import Setting from '../Setting';
import Report from '../Report';
import Discount from '../Discount';

const Dashboard = () => {
  const [selected, setSelected] = useState('Dashboard');
  return (
    <View style={styles.page}>
      <Sidebar onPress={title => setSelected(title)} />
      {selected === 'Store' ? (
        <Store />
      ) : selected === 'Report' ? (
        <Report />
      ) : selected === 'Discount' ? (
        <Discount />
      ) : selected === 'Setting' ? (
        <Setting />
      ) : (
        <Store />
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
});
