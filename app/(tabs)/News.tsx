import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider,Image,ScrollView } from '@gluestack-ui/themed'
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export class News extends Component {
  render() {
    const knowledge = [
      { 
        image:'https://www.tfp.mu/image/catalog/2020/Blog/July/What%20is%20good%20health/2.png',
        mainTitle: 'ចំណេះដឹងសុខភាព', 
        title: 'Sandeep Srivastava'
      },
      { 
        image:'https://rms.koenig-solutions.com/Sync_data/CCE_Logo//img-tOsyKOpsXcY39aAtXegIopXSL.jpg',
        mainTitle: 'ការរស់នៅឲ្យមានសុខភាពល្អ', 
        title: 'Healthy Living Tips'
      },
      {     
        image:'https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-66139.jpg?w=360',
        mainTitle: 'ការថែទាំរាងកាយ', 
        title: 'Physical Fitness '
      },
      { 
        image:'https://static.vecteezy.com/system/resources/thumbnails/048/776/455/small_2x/be-healthy-advice-on-pink-sticky-note-near-stethoscope-and-tablets-photo.jpg',
        mainTitle: 'អាហារសុខភាព', 
        title: 'Nutritional Health'
      },
      { 
        image:'https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png',
        mainTitle: 'ការប្រយុទ្ធនឹងជំងឺ', 
        title: 'Fighting Diseases'
      },
      {     
        image:'https://i.ytimg.com/vi/RhQs7VB3Tjg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDyY1twiWCd0OczZ_CfuxC0BmXpWg',
        mainTitle: 'ការត្រួតពិនិត្យសុខភាព', 
        title: 'Health Monitoring '
      }
    ];
    const {width,height} = Dimensions.get('window');
    return (
      <GluestackUIProvider config={config}>
        <StatusBar style="light" />
        <View style={{flex:1}}>
          <View style={{
            height:'100%',
            backgroundColor: '#5F3C8D',
            position:'absolute',
            top:0,
            left:0,
            right:0,
          }}></View>
          <View style={{
            height:'100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            marginTop: height*.07,
            paddingHorizontal:20
          }}>
            <View>
              <Text style={{color:'#56367D',marginTop:15,fontFamily:'Khmer-Moul',fontSize:16}}>ព័ត៌មាន និងព្រឹត្តិការណ៍</Text> 
              <Text style={{color:'#3F484B'}}>ធ្វើបច្ចុប្បន្នភាព នៅថ្ងៃទី 05 ខែកក្កដា ឆ្នាំ2024</Text>
            </View>
          
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15,marginBottom:140}}>
              {knowledge.map((item,index)=>(
                <TouchableOpacity key={index} style={{marginVertical:8}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:136,borderColor:'#e8e6e6',borderWidth:0.5,borderRadius:10}}> 
                    <View style={{width:'40%',height:126,borderRadius:10,alignSelf:'center',paddingHorizontal:10,paddingVertical:5}}>
                      <Image source={{uri:item.image}} resizeMode='cover' style={{width:'100%',height:'100%',borderRadius:10}}/>
                    </View>

                    <View style={{padding:5,flex:1}}>
                      <Text style={{color:'#56367D',fontFamily:'Khmer-Regular',fontSize:14,flexWrap:'wrap'}}>{item.mainTitle}</Text>
                      <Text style={{color:'#3F484B',flexWrap:'wrap'}}>{item.title}</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',padding:5}}>
                      <AntDesign name="right" size={20} color="#3F484B" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
              </ScrollView>

          </View>
        </View>
      </GluestackUIProvider>
    )
  }
}

export default News