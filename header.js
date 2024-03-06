import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import UserProfile from './UserProfile';
import useIsMobile from './mobile';

const Header = () => {

  const isMobile = useIsMobile();

  return (
    <View style={[styles.header, isMobile && styles.header_mobile]}>
        <Image source={require('./imgs/icon_bar.png')} style={{ width: 20, height: 20 }}></Image>
      <UserProfile
        name="Fernando Ramirez"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        padding: 15,
        backgroundColor: '#0D7CC4',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    header_mobile: {
      paddingTop: 30
    }
})

export default Header;
