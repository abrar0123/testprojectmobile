import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AppText from '../UI/AppText';
import {respHeight, respWidth} from '../responsiveness/RespHeight';
import mycolors from '../../styles/mycolors';
import {scale} from 'react-native-size-matters';
import Smcard from '../UI/SmallCard/smcard';
import imagesPath1 from '../../constants/imagesPath1';
import Button from '../UI/Button';

const Home = () => {
  return (
    <View style={styles.parent}>
      {/* ************ container 1 ************ */}
      <View style={styles.topMenuContainer}>
        {/* 1st  */}
        <View style={styles.imgContainer1}>
          <Image source={imagesPath1.shugah} style={styles.img} />
        </View>
        {/* 2nd ,1 ,1 */}
        <View style={styles.topMenuContainer1}>
          {/* 1 */}
          <View style={styles.imgContainer2}>
            <Image source={imagesPath1.cart} style={styles.img} />
          </View>
          {/* 2 */}
          <View style={styles.imgContainer2}>
            <Image source={imagesPath1.profile} style={styles.img} />
          </View>
        </View>
      </View>
      {/* ************ container 2 ************ */}
      <View>
        <View style={styles.imgGiftContainer}>
          <Image source={imagesPath1.topgift} style={styles.img} />
        </View>
      </View>
      {/* ************ container 3 ************ */}
      <View style={styles.voucherContainer}>
        <View style={styles.imgVoucherContainer}>
          <Image source={imagesPath1.arrow} style={styles.img} />
        </View>
        <View style={styles.voucherText}>
          <AppText style={{fontSize: scale(14)}}>
            Swipe To Redeem 15 AED Off On Your First Order.
          </AppText>
        </View>
        <View style={{...styles.imgVoucherContainer, padding: respHeight(1.2)}}>
          <Image source={imagesPath1.voucher} style={styles.img} />
        </View>
      </View>
      {/* ************ container 4 ************ */}
      <View style={styles.shopContainer}>
        {/* text View 1 */}
        <View style={styles.shopTextContainer}>
          <AppText style={styles.shopHeadText}>Browse & Shop</AppText>
          <AppText style={styles.shopPrimaryText}>
            Conect with top bakers,gift shops, and party planners for convenient
            delvery of your choice.
          </AppText>
        </View>
        {/* image View 2 */}
        <View style={styles.imgPartyContainer}>
          <Image source={imagesPath1.party1} style={styles.img1} />
        </View>
      </View>
      <Smcard></Smcard>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    // paddingHorizontal: respHeight(1.5),
    // paddingTop: respHeight(1),
    // paddingTop: (Platform.OS = 'android' && StatusBar.currentHeight),
    backgroundColor: mycolors.lightgrey,
  },
  headerText: {
    fontSize: scale(22),
    fontWeight: 'bold',
    color: mycolors.black,
  },
  cardStyle: {
    backgroundColor: mycolors.jaman,
    paddingHorizontal: respWidth(3),
    paddingVertical: respHeight(2.5),
    marginBottom: respHeight(2.5),
    borderRadius: 10,
  },
  topMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: respHeight(1.5),
    paddingHorizontal: respHeight(1.5),
    paddingTop: respHeight(0.5),
    backgroundColor: mycolors.white,
  },
  topMenuContainer1: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: respWidth(3),
  },
  imgContainer1: {
    width: 120,
    height: 70,
    // backgroundColor: mycolors.black,
  },
  imgContainer2: {
    width: respWidth(14),
    // width:50,
    height: respHeight(7),
    // height: 50,
    borderRadius: 60,
    padding: respHeight(1.4),
    backgroundColor: mycolors.lightgrey,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: scale(18),
    paddingHorizontal: respWidth(3),
    paddingVertical: respHeight(1.1),

    fontWeight: 'bold',
    color: mycolors.white,
    position: 'relative',
    bottom: respHeight(10),
  },
  //   container 2
  imgGiftContainer: {
    width: '100%',
    height: respHeight(25),
    // backgroundColor: mycolors.black,
  },
  //   conatiner 3
  voucherContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: mycolors.white,
    marginTop: respHeight(2),
    marginHorizontal: respHeight(2),
    borderRadius: 70,
    paddingRight: respHeight(1.5),
  },
  voucherText: {
    width: respWidth(60),
    fontSize: scale(10),
    paddingVertical: respHeight(0.7),
  },
  imgVoucherContainer: {
    width: respWidth(14),
    height: respHeight(7),
    padding: respHeight(0.7),
    // backgroundColor: mycolors.lightgrey,
  },

  //   container 4
  shopContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: mycolors.white,
    marginTop: respHeight(2),
    marginHorizontal: respHeight(2),
    borderRadius: 5,
    padding: respHeight(1),
  },
  shopHeadText: {
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  shopPrimaryText: {
    fontSize: scale(12),
    color: mycolors.dgrey,
    marginVertical: respHeight(0.4),
  },
  shopTextContainer: {
    width: respWidth(53),
  },
  imgPartyContainer: {
    width: respWidth(52),
    paddingRight: 10,
    height: respHeight(12),
    // backgroundColor: mycolors.lightgrey,
  },
  img1: {
    width: '100%',
    // height: '100%',
    resizeMode: 'contain',
    position: 'relative',
    bottom: respHeight(4.5),
    right: respWidth(9),
  },
});

export default Home;
