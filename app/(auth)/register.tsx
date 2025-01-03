import { Text } from 'react-native'
import React, { Component, useState } from 'react'
import { ButtonText,View,Image, EyeIcon, Button,EyeOffIcon, FormControl, GluestackUIProvider, Heading, Input, InputField, InputIcon, InputSlot, VStack } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import RegisterForm from '@/components/input/loginForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import Password from '@/components/input/password'

export class Resgister extends Component {
  render() {
    return (

       <GluestackUIProvider config={config} >

        <View style={{backgroundColor:'white',height:'100%'}}>

        <View style={{marginTop:30}}>
                  <Image
                  source={require('@/assets/images/loginImage.png')}
                  style={{ width: '100%', height: 220 }}
                  resizeMode='contain'
                  />
        </View>
  
        <Password/>
        </View>
      </GluestackUIProvider>

   
    )
  }
}

export default Resgister