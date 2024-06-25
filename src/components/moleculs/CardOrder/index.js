import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IL1} from '../../../assets/Ilustrations';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';
import {ICTrash} from '../../../assets/Icons';

const CardOrder = () => {
  const [count, setCount] = useState(1);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleMinCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperLeft}>
          <View style={styles.wrapper}>
            <Image source={IL1} style={styles.img} />
            <View>
              <Text style={styles.titleName}>Healthy noodle with...</Text>
              <Text style={styles.titlePrice}>Rp. 40.000</Text>
            </View>
          </View>
          <View style={styles.wrapperCount}>
            <TouchableOpacity
              style={styles.count}
              activeOpacity={0.7}
              onPress={handleMinCount}>
              <Text style={styles.titleCount}>-</Text>
            </TouchableOpacity>
            <View style={styles.qty}>
              <Text style={styles.titleBtn}>{count}</Text>
            </View>
            <TouchableOpacity
              style={styles.count}
              activeOpacity={0.7}
              onPress={handleAddCount}>
              <Text style={styles.titleCount}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperRight}>
          <Text style={styles.titlePriceQty}>Rp. 80.000</Text>
        </View>
      </View>
      <View style={styles.wrapperBottom}>
        <TextInput placeholder="Catatan Pesanan" style={styles.input} />
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <ICTrash />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  img: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  wrapperLeft: {
    width: '75%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperRight: {
    width: '25%',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 14,
    marginLeft: 8,
    fontFamily: fonts.primary.normal,
    color: colors.main,
  },
  titlePrice: {
    fontSize: 12,
    marginLeft: 8,
    fontFamily: fonts.primary.normal,
    color: '#ABBBC2',
  },
  wrapperCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    width: 25,
    height: 25,
    borderRadius: 8,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCount: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: '#FFFFFF',
  },
  qty: {
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  titleBtn: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.main,
  },
  titlePriceQty: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
  input: {
    width: '75%',
    paddingHorizontal: 14,
    height: 48,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  wrapperBtn: {
    marginLeft: 12,
    alignItems: 'flex-start',
    width: '25%',
  },
  btn: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  wrapperBottom: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
