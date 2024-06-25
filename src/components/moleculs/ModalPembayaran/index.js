import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils';
import {Divider} from '../../atoms';
import {ICWallet} from '../../../assets/Icons';

const ModalPembayaran = ({
  visible,
  onRequestClose,
  onHandleClose,
  onHandlePay,
  children,
}) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        {children}
        <View style={styles.contentRight}>
          <Text style={styles.titleHedaer}>Pembayaran</Text>
          <Text style={styles.titleSubHeader}>1 opsi pembayaran tersedia</Text>
          <Divider />
          <Text style={styles.titleHedaer}>Metode Bayar</Text>
          <View style={styles.wrapperButtonBayar}>
            <TouchableOpacity style={styles.buttonBayar} activeOpacity={0.7}>
              <ICWallet />
              <Text style={styles.titleButtonBayar}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled
              style={styles.buttonBayarInactive}
              activeOpacity={0.7}>
              <Text style={styles.titleButtonBayarInactive}>QRIS</Text>
            </TouchableOpacity>
          </View>
          <Divider />
          <Text style={styles.titleInput}>Total Bayar</Text>
          <View style={styles.wrapperInput}>
            <Text>Rp. </Text>
            <TextInput placeholder="" style={styles.input} />
          </View>
          <Text style={styles.titleInput}>Diterima</Text>
          <View style={styles.wrapperInput}>
            <Text>Rp. </Text>
            <TextInput placeholder="" style={styles.input} />
          </View>
          <Text style={styles.titleInput}>kembalian</Text>
          <View style={styles.wrapperInput}>
            <Text>Rp. </Text>
            <TextInput placeholder="" style={styles.input} />
          </View>
          <View style={styles.wrapperButtonFooter}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonFooterInactive}
              onPress={onHandleClose}>
              <Text style={styles.titleButtonFooterInactive}>Batalkan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonFooter}
              onPress={onHandlePay}>
              <Text style={styles.titleButtonFooter}>Bayar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPembayaran;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    flex: 1,
  },
  contentRight: {
    backgroundColor: '#FFFFFF',
    width: '30%',
    height: '100%',
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
  titleHedaer: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
  titleSubHeader: {
    fontSize: 16,
    marginBottom: 24,
    fontFamily: fonts.primary.normal,
    color: colors.secondary,
  },
  buttonBayar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 8,
    width: 101,
    height: 64,
    marginTop: 16,
    marginRight: 8,
  },
  buttonBayarInactive: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 101,
    height: 64,
    marginTop: 16,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  titleButtonBayar: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: '#FFFFFF',
  },
  titleButtonBayarInactive: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.secondary,
  },
  wrapperButtonBayar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  wrapperInput: {
    width: '100%',
    paddingHorizontal: 14,
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 16,
    borderColor: colors.secondary,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  input: {
    alignItems: 'center',
  },
  titleInput: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.main,
  },
  wrapperButtonFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  buttonFooterInactive: {
    width: '48%',
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.secondary,
  },
  buttonFooter: {
    width: '48%',
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  titleButtonFooterInactive: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
  },
  titleButtonFooter: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: '#FFFFFF',
  },
});
