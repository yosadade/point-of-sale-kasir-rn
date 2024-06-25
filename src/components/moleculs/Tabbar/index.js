import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const DATA = [
  {
    id: 1,
    title: 'Semua',
  },
  {
    id: 2,
    title: 'Makanan',
  },
  {
    id: 3,
    title: 'Minuman',
  },
  {
    id: 4,
    title: 'Snack',
  },
];

const Tabbar = ({onPress}) => {
  const [selected, setSelected] = useState('Semua');
  return (
    <View style={styles.container}>
      {DATA.map((item, idx) => {
        return (
          <TouchableOpacity
            style={styles.btn(selected, item.title)}
            key={idx}
            onPress={() => {
              onPress(item.title);
              setSelected(item.title);
            }}>
            <Text style={styles.titleBtn}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  btn: (selected, title) => ({
    paddingBottom: 13,
    marginRight: 32,
    borderBottomWidth: 3,
    borderColor: selected === title ? colors.main : 'transparent',
  }),
  titleBtn: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
});
