import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';

const Divider = () => {
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: '100%',
    marginVertical: 8,
    height: 1,
  },
});
