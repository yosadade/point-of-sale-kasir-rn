import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const List = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#ABBBC2',
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.main,
  },
});
