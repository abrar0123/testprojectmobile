import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../components/UI/AppText';
import mycolors from '../../styles/mycolors';
import Smcard from '../../components/UI/SmallCard/smcard';

import {
  respHeight,
  respWidth,
} from '../../components/responsiveness/RespHeight';
import {moderateScale} from 'react-native-size-matters';
import {
  brownie,
  cakes,
  chocolate,
  custom,
  gulabjamun,
  storedata,
} from '../../constants/data';

import {useState} from 'react';
const allstoredata = cakes.concat(custom, brownie, chocolate);
const Store = () => {
  const [selectIndex, setselectIndex] = useState({id: 0, bgc: mycolors.black});

  // console.log('data:\n', cakes.concat(custom, brownie));

  const selectHandler = (ind, bgc) => {
    setselectIndex({id: ind, bgc: bgc});
  };
  console.log('select', selectIndex);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={selectHandler.bind(this, item.id, item.color)}
        activeOpacity={0.9}>
        <Smcard
          style={{
            ...styles.storeCardStyle,
            backgroundColor:
              item.id === selectIndex.id ? item.color : mycolors.lightgrey,
          }}>
          <Image source={item.image} style={styles.img} />
          <AppText
            style={{
              ...styles.title,
              color:
                item.id === selectIndex.id ? mycolors.white : mycolors.l2black,
            }}>
            {item.name}
          </AppText>
        </Smcard>
      </TouchableOpacity>
    );
  };

  const renderCakes = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View
          style={{
            ...styles.storeCakeStyle,
            backgroundColor: selectIndex.bgc,
          }}>
          <Image source={item.img} style={styles.cakeimg} />
          <AppText style={styles.cakeTitle}>{item.name}</AppText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.parent}>
      <Smcard style={{...styles.cardStyle, backgroundColor: selectIndex.bgc}}>
        <AppText style={{...styles.headerText}}>Jdk Store</AppText>
      </Smcard>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={storedata}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
      />

      {selectIndex.id === 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: respHeight(72)}}
          data={allstoredata}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderCakes}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={
            selectIndex.id === 1
              ? cakes
              : selectIndex.id === 2
              ? custom
              : selectIndex.id === 3
              ? brownie
              : selectIndex.id === 4
              ? chocolate
              : selectIndex.id === 5 && gulabjamun
          }
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderCakes}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    padding: 15,
    backgroundColor: mycolors.white,
  },
  headerText: {
    fontSize: 22,
    // marginBottom: 20,
    fontWeight: 'bold',
    color: mycolors.white,
  },
  primaryText: {
    fontSize: 16,
    color: mycolors.white,
    marginVertical: 5,
  },
  cardStyle: {
    backgroundColor: mycolors.primaryorange,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },

  // ------
  storeCardStyle: {
    width: respWidth(36),
    height: respHeight(16),
    // height: 300,
    marginVertical: moderateScale(5),
    borderRadius: 10,
    // gap: moderateScale(5),
    overflow: 'hidden',
  },

  img: {
    width: '100%',
    height: 150,
    // backgroundColor: mycolors.jaman,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
    position: 'relative',
    bottom: 45,
    left: 40,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: mycolors.white,
    position: 'relative',
    bottom: 66,
  },

  storeCakeStyle: {
    width: respWidth(44),
    // width: '100%',
    height: respHeight(16),
    // height: 300,
    marginVertical: moderateScale(5),
    borderRadius: 10,
    // gap: moderateScale(5),
    overflow: 'hidden',
  },
  cakeimg: {
    width: '80%',
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cakeTitle: {
    fontSize: 18,
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: mycolors.white,
  },
});

export default Store;
