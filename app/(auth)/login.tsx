import { Text } from 'react-native'
import React, { Component, useState } from 'react'
import { ButtonText,View,Image, EyeIcon, Button,EyeOffIcon, FormControl, GluestackUIProvider, Heading, Input, InputField, InputIcon, InputSlot, VStack } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { Link, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';

import * as Font from 'expo-font';
import LoginForm from '@/components/input/loginForm'
export class login extends Component {
 
  render() {
    return(

      <GluestackUIProvider config={config} >

      <View style={{backgroundColor:'white',height:'100%'}}>

      <View style={{marginTop:30}}>
                <Image
                source={require('@/assets/images/loginImage.png')}
                style={{ width: '100%', height: 220 }}
                resizeMode='contain'
                />
      </View>

      <LoginForm/>

      <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#BDBDBD',fontFamily:'Khmer-Regular',fontSize:12}}>តើអ្នកមិនទាន់មានគណនីទេឬ? </Text>
          <Text style={{color:'#5F3C8D',textDecorationLine:'underline',fontFamily:'Khmer-Regular',fontSize:12}}>សូមចុះឈ្មោះនៅទីនេះ</Text>
        </View>

        <Text style={{color:'#5F3C8D',marginTop:10,fontFamily:'Khmer-Regular',fontSize:13}}>ភ្លេចលេខសម្ងាត់?</Text>
      </View>

      </View>
    </GluestackUIProvider>
     

    )
  }
}

export default login