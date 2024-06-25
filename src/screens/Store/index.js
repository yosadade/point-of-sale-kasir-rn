import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {
  ICDiscountMini,
  ICLayanan,
  ICOngkir,
  ICSearch,
  ICTax,
} from '../../assets/Icons';
import {fonts} from '../../utils/fonts';
import {
  Button,
  CardMenu,
  Divider,
  List,
  ModalPembayaran,
  Tabbar,
} from '../../components';
import {IL1} from '../../assets/Ilustrations';
import CardOrder from '../../components/moleculs/CardOrder';

const DATA_MENU = [
  {
    id: 1,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
  {
    id: 2,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
  {
    id: 3,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
  {
    id: 4,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
  {
    id: 5,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
  {
    id: 6,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
  {
    id: 7,
    title: 'Healthy noodle with spinach leaf',
    src: IL1,
  },
];

const DATA_TAB_ORDER = [
  {
    id: 1,
    title: 'Dine In',
  },
  {
    id: 1,
    title: 'To Go',
  },
  {
    id: 1,
    title: 'Delivery',
  },
];

const Store = () => {
  const [selectedOrder, setSelectedOrder] = useState('Dine In');
  const [modalVisible, setModalVisible] = useState(false);

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderOrder = () => {
    return (
      <View style={styles.order(modalVisible)}>
        <View>
          <Text style={styles.titleOrder}>Orders #1</Text>
          <View style={styles.tabOrder}>
            {DATA_TAB_ORDER.map((item, idx) => {
              return (
                <TouchableOpacity
                  style={styles.btnTabOrder(selectedOrder, item.title)}
                  onPress={() => setSelectedOrder(item.title)}
                  activeOpacity={0.7}
                  key={idx}>
                  <Text
                    style={styles.titleBtnTabOrder(selectedOrder, item.title)}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.contentOrder}>
            <View style={styles.titleContentOrder}>
              <View
                style={{
                  width: '75%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.labelOrder}>Item</Text>
                <Text style={styles.labelOrder}>Qty</Text>
              </View>
              <View
                style={{
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.labelOrder}>Price</Text>
              </View>
            </View>
            <View style={{height: modalVisible ? 360 : 280}}>
              <ScrollView>
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.wrapperPayment}>
          <View style={styles.wrapperDiscount}>
            <Button icon={<ICOngkir />} title="Ongkir" />
            <Button icon={<ICDiscountMini />} title="Diskon" />
            <Button icon={<ICTax />} title="Pajak" />
            <Button icon={<ICLayanan />} title="Layanan" />
          </View>
          <Divider />
          <List label="Ongkir" value="Rp. 0" />
          <List label="Pajak" value="10%" />
          <List label="Diskon" value="Rp. 0" />
          <List label="Sub Total" value="Rp. 120.000" />
          {!modalVisible && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btnPayment}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.titleBtnPembayaran}>
                Lanjutkan Pembayaran
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <ModalPembayaran
        visible={modalVisible}
        onRequestClose={() => {}}
        onHandleClose={() => setModalVisible(false)}
        children={<RenderOrder />}
      />
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View>
            <Text style={styles.title}>CWB Resto</Text>
            <Text style={styles.subTitle}>Minggu, 21 Januari 2024</Text>
          </View>
          <View style={styles.wrapperInput}>
            <ICSearch />
            <TextInput style={styles.input} placeholder="search for food ..." />
          </View>
        </View>
        <Tabbar onPress={value => console.log(value)} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA_MENU}
          renderItem={() => <CardMenu />}
          numColumns={3}
          keyExtractor={item => item.id}
          columnWrapperStyle={styles.wrappetColumnFlatlist}
          style={styles.wrapperFlatlist}
        />
      </View>
      <RenderOrder />
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 14,
    flex: 1.5,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    fontWeight: '400',
    color: '#7890CD',
  },
  wrapperInput: {
    paddingHorizontal: 14,
    width: 200,
    height: 48,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    alignItems: 'center',
    fontFamily: fonts.primary[400],
    color: '#ABBBC2',
  },
  wrapperFlatlist: {
    marginTop: 18,
  },
  wrappetColumnFlatlist: {
    flex: 1,
    justifyContent: 'space-between',
  },
  order: modalVisible => ({
    flex: !modalVisible ? 1 : 0,
    width: modalVisible ? '35%' : 'auto',
    marginLeft: modalVisible ? 'auto' : 0,
    padding: 14,
    backgroundColor: '#FFFFFF',
  }),
  titleOrder: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
  tabOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  btnTabOrder: (selected, title) => ({
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: selected === title ? 0 : 1,
    borderColor: selected === title ? '#FFFFFF' : colors.secondary,
    backgroundColor: selected === title ? colors.main : '#FFFFFF',
  }),
  titleBtnTabOrder: (selected, title) => ({
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: selected === title ? '#FFFFFF' : colors.main,
  }),
  contentOrder: {
    marginTop: 24,
  },
  titleContentOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: 1,
    paddingBottom: 13,
    borderColor: colors.secondary,
  },
  labelOrder: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
  wrapperPayment: {
    // paddingTop: 17,
    width: '100%',
    marginTop: 'auto',
  },
  btnPayment: {
    width: '100%',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 8,
    padding: 14,
  },
  titleBtnPembayaran: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: fonts.primary[600],
  },
  wrapperDiscount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
  },
});
