import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICAddCart} from '../../../assets/Icons';
import {IL1} from '../../../assets/Ilustrations';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const CardMenu = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <TouchableOpacity style={styles.btnAddCart} activeOpacity={0.7}>
        <ICAddCart />
      </TouchableOpacity>
      <View style={styles.wrapperImage}>
        <Image source={IL1} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.titleName}>Healthy noodle with spinach leaf</Text>
      <View style={styles.wrapperTitle}>
        <Text style={styles.titleType}>Makanan</Text>
        <Text style={styles.titlePrice}>Rp. 40.000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: 192,
    // height: 259,
    marginBottom: 42,
    borderColor: '#C7D0EB',
    borderWidth: 1,
    padding: 12,
  },
  btnAddCart: {
    borderRadius: 35,
    width: 35,
    height: 35,
    backgroundColor: colors.main,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 132,
    height: 132,
  },
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 14,
    marginTop: 9,
    color: '#3949AB',
    fontFamily: fonts.primary.normal,
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  titleType: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#ABBBC2',
  },
  titlePrice: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: colors.main,
  },
});
