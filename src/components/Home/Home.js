import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../UI/AppText';
import {respHeight, respWidth} from '../responsiveness/RespHeight';
import mycolors from '../../styles/mycolors';
import {scale} from 'react-native-size-matters';
import Smcard from '../UI/SmallCard/smcard';

const Home = () => {
  return (
    <View style={styles.parent}>
      <Smcard>
        <AppText style={styles.headerText}>welcome to shugha</AppText>
      </Smcard>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: respHeight(1.5),
    paddingTop: respHeight(2),
    // paddingTop: (Platform.OS = 'android' && StatusBar.currentHeight),
    backgroundColor: mycolors.white,
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
});

export default Home;
