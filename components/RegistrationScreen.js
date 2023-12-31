import React, {useState} from 'react'

import { 
  View, 
  Text, 
  StatusBar, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  ScrollView,
  ImageBackground,
  StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import background from '../src/images/smoke.png'
import Colors from '../src/constant/Colors';

function Register ({navigation})  {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const togglePasswordVisibilityConfirm = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };

  return (
<SafeAreaView style={styles.container}>
  <ImageBackground style={{flex:1}} source={background}>
    <StatusBar backgroundColor='#f5f5f5' barStyle={'dark-content'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.bannerHeader}>
            <Image style={styles.imageHeader} source={require('../src/images/logormv.png')}/>
          </View>
            <Text style={styles.title}>Registration</Text>
          <View style={styles.inputWrapper}>
            <Feather name='user' size={20}/>
            <TextInput style={styles.textInput} 
              placeholder='Username' 
              placeholderTextColor='black'/>
          </View>
          <View style={styles.inputWrapperPassword}>
            <View style={styles.passwordField}>
              <Ionicons name='lock-open-outline' size={20}/>
              <TextInput style={styles.textInputPassword}
                value={password}
                onChangeText={setPassword}
                placeholder='Password' 
                placeholderTextColor='black' 
                secureTextEntry={!showPassword}/>
            </View>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} />
              </TouchableOpacity>
          </View>
          <View style={styles.inputWrapperPassword}>
            <View style={styles.passwordField}>
              <Ionicons name='lock-open-outline' size={20}/>
              <TextInput style={styles.textInputPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder='Confirm Password' 
                placeholderTextColor='black' 
                secureTextEntry={!showConfirmPassword}/>
            </View>
              <TouchableOpacity onPress={togglePasswordVisibilityConfirm}>
                <Feather name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} />
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>CREATE ACCOUNT</Text>
          </TouchableOpacity>    
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textSecond}>Login</Text>
              </TouchableOpacity>
          </View>
       </View>
     </ScrollView>
  </ImageBackground>
</SafeAreaView>
)}

export default Register

const styles = StyleSheet.create({
  container: {
    flex:1
    },
  content: {
    flex:1, 
    paddingHorizontal:10, 
    justifyContent:'center'
  },
  bannerHeader: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    paddingTop:30 
    },
  imageHeader: {
    width:200, 
    height:200
  },
  title: {
    fontSize:25, 
    fontWeight:'400', 
    color: Colors.black, 
    marginTop:20,
    paddingBottom:15
  },
  inputWrapper: {
    flexDirection:'row', 
    alignItems:'center',
    borderBottomWidth:1, 
    borderColor: Colors.black
  },
  textInput: {
    flex:1, 
    marginLeft:10, 
    color: Colors.black
  },
  inputWrapperPassword: {
    flexDirection:'row', 
    alignItems:'center', 
    borderBottomWidth:1, 
    borderColor: Colors.black, 
    marginTop:8,
    justifyContent:'space-between'
  },
  passwordField: {
    flexDirection:'row', 
    alignItems:'center'
  },
  textInputPassword: {
    color: Colors.black, 
    marginLeft:10
  },
  button: {
    padding:15,
    borderRadius:25,
    marginBottom:15,
    backgroundColor: Colors.green, 
    marginTop:20
  },
  textButton: {
    fontSize:15,
    textAlign:'center',
    color: Colors.white
  },
  textWrapper: {
    flexDirection:'row', 
    justifyContent:'center', 
    paddingTop:10, 
    paddingBottom:30
  },
  text: {
    color: Colors.primary, 
    fontWeight:'400'
  },
  textSecond: {
    color: Colors.blue, 
    borderBottomWidth:1, 
    borderColor: Colors.blue
  },
})