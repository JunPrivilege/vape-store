import { View, Image, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../src/images/logoVape.png'
import Colors from '../src/constant/Colors';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const splashDuration = 3000;
    const timer = setTimeout(() => {
      navigation.replace('MainApp');
    }, splashDuration);

    return () => clearTimeout(timer); 
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={Logo}/>
          </View>
        </View>
    </View>
  );
};

export default Splashscreen

const styles = StyleSheet.create ({
  container: {
    flex:1, 
    backgroundColor: Colors.white
  },
  content: {
    flex:1
  },
  imageWrapper: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center' 
  },
  image: {
    width:350, 
    height:300
  }
})
