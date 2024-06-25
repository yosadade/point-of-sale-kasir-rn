import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import {
  ICDashbord,
  ICDiscount,
  ICLogout,
  ICReport,
  ICSetting,
} from '../../../assets/Icons';

const DATA = [
  {
    id: 1,
    title: 'Store',
    icon: <ICDashbord />,
  },
  {
    id: 2,
    title: 'Report',
    icon: <ICReport />,
  },
  {
    id: 3,
    title: 'Discount',
    icon: <ICDiscount />,
  },
  {
    id: 4,
    title: 'Setting',
    icon: <ICSetting />,
  },
];

const Sidebar = ({onPress}) => {
  const [selected, setSelected] = useState('Store');
  return (
    <View style={styles.page}>
      <View>
        {DATA.map(item => {
          return (
            <TouchableOpacity
              style={styles.btnWrapper}
              activeOpacity={0.7}
              key={item.title}
              onPress={() => {
                onPress(item.title);
                setSelected(item.title);
              }}>
              <View style={styles.btn(selected, item.title)}>{item.icon}</View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.btnWrapper} activeOpacity={0.7}>
        <View style={styles.btn}>
          <ICLogout />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  page: {
    width: 104,
    borderRadius: 16,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.main,
  },
  btnWrapper: {
    width: '100%',
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: (selected, title) => ({
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selected === title ? '#5e6cb9' : colors.main,
  }),
});
