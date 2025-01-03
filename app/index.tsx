import {  Text, View } from 'react-native'
import React, { Component } from 'react'
import { ButtonText, GluestackUIProvider, Heading ,Button, Link} from '@gluestack-ui/themed'
import { Image } from 'react-native'
import { config } from '@gluestack-ui/config'
import BtnRegister from '../components/button/registerBtn'
import BtnLogin from '@/components/button/loginBtn'
export class WelcomePage extends Component {
  render() {

    return (
      <GluestackUIProvider config={config}>
        {/* image center */}
        <View style={{marginTop:60,padding:30}}>
          <Image
          source={require('@/assets/images/welcomepage.png')}
          style={{ width: '100%', height: 300 }}
          resizeMode='contain'
          />
        </View>
        <View style={{alignItems:'center'}}>

          <Heading style={{color:'rgb(123, 70, 187)',fontFamily:'Khmer-Moul',fontSize:16}}>កម្មវិធីផ្ដល់សេវាសុខភាពនឹងអាហារូបត្ថម្ភ</Heading>
          <View style={{alignItems:'center',marginTop:20}}>

            <Text style={{  }}>គាំទ្រសល់អ្នកផ្ដល់សេវាដើម្បីប្រឹក្សាសុខភាព នឹង​អាហារូបត្ថម្ភ</Text>
            <Text>សម្រាប់ស្រ្តីមានផ្ទៃពោះ ស្រ្តីបំបៅដោះកូន​ នឹង​កុមារ</Text>
          </View>
        </View>
       
         <View style={{padding:20}}>
        {/* btn for going to screen login */}
        <BtnLogin/>
        {/* btn forgoing to screen register */}
        <BtnRegister />
        </View>
      
      </GluestackUIProvider>
    )
  }
}

export default WelcomePage