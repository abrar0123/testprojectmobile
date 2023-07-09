import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import mycolors from '../../styles/mycolors';
import Swiper from 'react-native-swiper';
import {respHeight,} from '../responsiveness/RespHeight';

const MySwiper = ({swiperdata}) => {
  return (
    <View>
      {/* swiper */}
      <Swiper
        style={{
          //   backgroundColor: mycolors.black,
          height: respHeight(27),
        }}
        // autoplay={true}
        showsPagination={true}
        paginationStyle={[
          styles.pagination,
          {
            top: respHeight(27),
          },
        ]}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}>
        {swiperdata &&
          swiperdata.map((item, index) => {
            return (
              <View style={styles.mapcontainer} key={index}>
                <View style={styles.imgGiftContainer}>
                  <Image source={item.url} style={styles.img} />
                </View>
              </View>
            );
          })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    top: 0,
    // backgroundColor: mycolors.red,
  },
  dot: {
    width: 10,
    height: 3,
    backgroundColor: mycolors.grey,
    marginHorizontal: 2.5,
    borderRadius: 2,
  },

  activeDot: {
    width: 25,
    height: 3,
    backgroundColor: mycolors.pink,
    marginHorizontal: 1.5,
    borderRadius: 3,
  },
  imgGiftContainer: {
    // width: '100%',
    height: respHeight(25),
    marginHorizontal: respHeight(2),
    // backgroundColor: mycolors.black,
  },
  img: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },
});

export default MySwiper;
