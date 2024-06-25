import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILSplash} from '../../assets/Ilustrations';
import {fonts} from '../../utils/fonts';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  });
  return (
    <View style={styles.page}>
      <ILSplash />
      <View style={styles.wrapper}>
        <Text style={styles.title}>CWBPOS</Text>
        <Text style={styles.subTitle}>Manajemen Mudah untuk Toko Anda</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 124,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.primary[700],
    color: '#2A3256',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: '#2A3256',
  },
});
