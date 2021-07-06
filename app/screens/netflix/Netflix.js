/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NetflixStyles from './Netflix.style';
import {StatusBarHeight} from '../../utils/functions-file';

const STATUSBAR_HEIGHT = StatusBarHeight;
const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 100;

const HeaderView = () => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: STATUSBAR_HEIGHT,
        height: HEADER_MAX_HEIGHT,
        backgroundColor: 'yellow',
        zIndex: 99,
        opacity: 0.6,
      }}
    />
  );
};
const RepeatingView = ({title}) => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{marginStart: wp('1%'), color: 'white'}}>{title}</Text>
      <FlatList
        data={[{}, {}, {}, {}, {}]}
        keyExtractor={(item, index) => `${title}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <View
            style={{
              marginHorizontal: wp('1%'),
              height: hp('25%'),
              width: wp('30%'),
              backgroundColor: 'red',
              borderRadius: wp('2%'),
            }}
          />
        )}
      />
    </View>
  );
};
const Netflix = () => {
  return (
    <SafeAreaView style={NetflixStyles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <HeaderView />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp('5%')}}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        <View style={{height: hp('60%'), backgroundColor: 'green'}} />
        <View style={{marginTop: 20}}>
          <Text style={{marginStart: wp('1%'), color: 'white'}}>
            Only on Netflix
          </Text>
          <FlatList
            data={[{}, {}, {}, {}, {}]}
            keyExtractor={(item, index) => `onNetflix-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <View
                style={{
                  marginHorizontal: wp('1%'),
                  height: hp('40%'),
                  width: wp('45%'),
                  backgroundColor: 'red',
                  borderRadius: wp('2%'),
                }}
              />
            )}
          />
        </View>
        <RepeatingView title={'Trending now'} key={'Trending'} />
        <RepeatingView title={'Sitcoms'} key={'Sitcoms'} />
        <RepeatingView title={'My List'} key={'MyList'} />
      </ScrollView>
      <View
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: hp('8%'),
          alignItems: 'flex-end',
        }}>
        <View>
          <Text>Home</Text>
        </View>
        <View>
          <Text>Coming soom</Text>
        </View>
        <View>
          <Text>Fast Laughs</Text>
        </View>
        <View>
          <Text>Downloads</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Netflix;
