import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils';
import {ILSplash} from '../../assets/Ilustrations';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperIcon}>
        <ILSplash width="150" />
      </View>
      <Text style={styles.title}>RESTO WITH ME</Text>
      <Text style={styles.subTitle}>Akses Login Kasir</Text>
      <View>
        <Text style={styles.titleInput}>Email</Text>
        <TextInput placeholder="masukkan email..." style={styles.input} />
      </View>
      <View>
        <Text style={styles.titleInput}>Password</Text>
        <TextInput
          placeholder="masukkan password..."
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.replace('Dashboard')}>
        <Text style={styles.titleButton}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 96,
    // alignItems: 'center',
  },
  wrapperIcon: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 6,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: '#222222',
  },
  subTitle: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 32,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    color: colors.secondary,
  },
  titleInput: {
    fontSize: 16,
    marginVertical: 8,
    fontFamily: fonts.primary.normal,
    color: '#222222',
  },
  input: {
    fontSize: 14,
    marginBottom: 8,
    paddingHorizontal: 12,
    width: '100%',
    color: colors.secondary,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
  },
  titleButton: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: fonts.primary[600],
  },
});
