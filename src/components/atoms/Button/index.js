import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const Button = ({icon, title, backgroundColor}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container(backgroundColor)}>
        {icon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    width: 48,
    height: 48,
    backgroundColor: backgroundColor,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.secondary,
  }),
  title: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.main,
  },
});
