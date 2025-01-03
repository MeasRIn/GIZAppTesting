import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { Component, useState } from 'react'
import { Avatar, AvatarFallbackText, Box, Button, ButtonText, FlatList, Center, GluestackUIProvider, Heading, HStack, VStack } from '@gluestack-ui/themed'
import { useFonts } from 'expo-font';
import { config } from '@gluestack-ui/config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
export class Home extends Component {
  
  render() {
    let NumOfPeople=0;
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

    return (
      <GluestackUIProvider config={config}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="default" />
            {/* header section */}
            <View
              style={{
                width: '100%',
                borderColor: '#0002',
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              {/* Profile avatar */}
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
                <Avatar size="md" borderRadius="$full">
                <Image  source={require('@/assets/images/profileImage.png')}
                        resizeMode="contain" 
                        style={{
                        width: '100%', 
                        height: '100%',
                      }}/>
                </Avatar>
                <Text style={{ marginLeft: 10, fontFamily: 'NatoSansKhmer', fontSize: 16 }}>
                  សួស្តី, <Text style={{ fontFamily: 'Khmer-regular' }}>សៀវ​​ ពាន</Text>
                </Text>
              </View>
              {/* Notification icon */}
              <View style={{ padding: 15 }}>
                <Ionicons name="notifications-outline" size={24} color="#56367D" />
              </View>
            </View>
            {/* Main content */}
            <Center style={{ padding: 20 }}>
              <Box style={{ height: 151, width: '100%', borderRadius: 10, overflow: 'hidden' }}>
                <LinearGradient
                  colors={['#E5E4F1', '#FED6EC']}
                  style={{ flex: 1, padding: 10, borderRadius: 10 }}
                >
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Text Section */}
                    <View style={{ paddingHorizontal: 20 }}>
                      <Text style={{ fontSize: 12, fontWeight: 'bold', fontFamily: 'Khmer-Regular', color: '#56367D', marginBottom: 3 }}>
                        ចាប់ផ្ដើម
                      </Text>
                      <Text style={{ fontSize: 20, fontFamily: 'NatoSansKhmer', marginBottom: 5, color: '#56367D' }}>
                        ពិនិត្យ និងប្រឹក្សា
                      </Text>
                      <Text style={{ fontSize: 12, color: '#56367D', marginBottom: 12 }}>
                        ជាមួយពួកយើងថ្ងៃនេះ
                      </Text>
                      {/* Click button */}
                      <TouchableOpacity style={{ borderRadius: 20, overflow: 'hidden', width: 80, marginBottom: 12 }}>
                        <LinearGradient colors={['#FED6EC', '#CD85B0']}>
                          <Text style={{ alignSelf: 'center', padding: 10, fontSize: 10, color: '#FFFFFF', fontFamily: 'NatoSansKhmer' }}>
                            ចុចទីនេះ
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    {/* Image Section */}
                    <View>
                      <Image
                        source={require('@/assets/images/homeImage.png')}
                        style={{ width: 140, height: 125 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </LinearGradient>
              </Box>
            </Center>
            {/* new and old customer section */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flex: 1,
                gap: 12, 
              }}
            >
            
              <TouchableOpacity onPress={()=> router.push('../(register)/NewCustomer')}>
                <View style={{borderRadius: 16,width: 170,height: 100,backgroundColor: '#FED6EC',}}>

                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>

                    <Avatar bgColor='#FFFFFF' size="md" borderRadius="$full" style={{marginBottom:10}} >
                      <Image  source={require('@/assets/images/newCustomer.png')}
                          resizeMode="contain" 
                          style={{
                          width: '60%', 
                          height: '60%',
                      }}/>
                    </Avatar>
                
                    <Text style={{fontFamily: 'NatoSansKhmer',color: '#CD85B0',fontSize:14}}>
                      អតិថិជនថ្មី
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/* old customer card */}
                <TouchableOpacity onPress={()=> router.push('../(register)/OldCustomer')}>

                <View style={{borderRadius: 16,width: 170,height: 100,backgroundColor: '#E5E4F1',}}>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>

                    <Avatar bg='#FFFFFF' size="md" borderRadius="$full" style={{marginBottom:10}} >
                      <Image  source={require('@/assets/images/oldCustomer.png')}
                        resizeMode="contain" 
                        style={{
                        width: '60%', 
                        height: '60%',
                      }}/>
                    </Avatar>
                
                    <Text style={{fontFamily: 'NatoSansKhmer',color: '#5F3C8D',fontSize:14}}>
                      អតិថិជនចាស់
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            {/* knowlegde and information section */}
            <Center bg="#E5E4F1" h={60} w={350} style={{alignSelf:'center',marginTop:20,borderRadius:16}}>
              <View style={{flexDirection:'row'}}>
                <Image  source={require('@/assets/images/bookImage.png')}
                   resizeMode="contain" 
                   style={{
                      width:35,
                      height:35
                    }}
                />
                <Text style={{alignSelf:'center',color:'#5F3C8D',fontFamily:'Khmer-Regular',marginLeft:20}}>
                  ផ្ទាំងសន្លឹកផ្ទាត់អប់រំនិងផ្ដល់ប្រឹក្សា 
                </Text>
              </View>
            </Center>

            {/* knowlegde content section */}

            <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
              <Heading style={{fontFamily:'NatoSansKhmer',fontSize:16,color:'#3F484B'}}>ចំណេះដឹង</Heading>
              <TouchableOpacity style={{alignSelf:'center'}}>
                
                <Text style={{color:'#5F3C8D'}}>មើលទាំងអស់</Text>
              </TouchableOpacity>
            </View>
            <View>

            <ScrollView
              style={{ flex: 1, paddingHorizontal: 15 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {knowledge.map((item, index) => (
                <TouchableOpacity>

                <View
                  key={index}
                  style={{
                    height: 200,
                    width: 240,
                    backgroundColor: "#FFFFFF",
                    marginRight: 10,
                    borderRadius: 10,
                    overflow: "hidden",
                    elevation: 3,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  }}
                >
                  {/* Image Section */}
                  <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                    <Image
                      source={{
                        uri:
                          typeof item === "object" && item !== null && "image" in item
                            ? (item as { image: string }).image
                            : "",
                      }}
                      style={{
                        width: "100%",
                        height: 140,
                        resizeMode: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  {/* Text Section */}
                  <View
                    style={{
                      paddingHorizontal: 10,
                      flex: 1,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "khmer-regular",
                        color: "#333",
                      }}
                    >
                      {typeof item === "object" &&
                      item !== null &&
                      "mainTitle" in item
                        ? (item as { mainTitle: string }).mainTitle
                        : ""}
                    </Text>
                    <AntDesign name="right" size={16} color="#3F484B" />
                  </View>
                </View>
                </TouchableOpacity>
              ))}
            </ScrollView>


            </View>
            {/* information */}

            <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
              <Heading style={{fontFamily:'NatoSansKhmer',fontSize:16,color:'#3F484B'}}>ព័ត៌មាន និងព្រឹត្តិការណ៍</Heading>
              <TouchableOpacity style={{alignSelf:'center'}}> 
                <Text style={{color:'#5F3C8D'}}>មើលទាំងអស់</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ flex: 1, paddingHorizontal: 15, height: 240 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {knowledge.map((item, index) => (
                <TouchableOpacity onPress={()=> router.push('/(auth)/register')}>

                  <View
                    key={index}
                    style={{
                      height: 210,
                      width: 240,
                      backgroundColor: "#FFFFFF",
                      marginRight: 10,
                      borderRadius: 10,
                      overflow: "hidden",
                      elevation: 3,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                    }}
                  >
                    {/* Image Section */}
                    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                      <Image
                        source={{
                          uri:
                            typeof item === "object" && item !== null && "image" in item
                              ? (item as { image: string }).image
                              : "",
                        }}
                        style={{
                          width: "100%",
                          height: 140,
                          resizeMode: "cover",
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    {/* Text Section */}
                    <View
                      style={{
                        paddingHorizontal: 10,
                        flex: 1,
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Khmer-Moul",
                          color: "#333",
                        }}
                      >
                        {typeof item === "object" &&
                        item !== null &&
                        "mainTitle" in item
                          ? (item as { mainTitle: string }).mainTitle
                          : ""}
                      </Text>
                      <AntDesign name="right" size={16} color="#3F484B" />
                    </View>
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        marginBottom: 10,
                        color: "#60767A",
                      }}
                    >
                      {typeof item === "object" &&
                      item !== null &&
                      "title" in item
                        ? (item as { title: string }).title
                        : ""}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* reports section */}
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:10}}>
              <Heading style={{fontFamily:'Khmer-Moul',fontSize:16,color:'#3F484B'}}>របាយការណ៍សម្រាប់ថ្ងៃនេះ</Heading>
              <Text style={{color:'#3F484B',fontSize:16 }}><Text style={{fontSize:20,color:'#5F3C8D',fontWeight:'bold'}}>{NumOfPeople}</Text>នាក់</Text>
            </View>

            <FlatList
              style={{ flex: 1, paddingHorizontal: 15, marginBottom:70}}
            
              data={knowledge}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignSelf:'center',
                    height: 78,
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    overflow: "hidden", 
                    marginTop:10,
                    borderColor:'#e8e3e3',
                    borderWidth:0.5,
                    borderRadius: 16, 
                    borderTopWidth:0


                  }}
                  >
                   <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    
                      <View style={{flexDirection:'row',justifyContent:'center'}}>
                                    
                        <Avatar bgColor='$amber600' size="md" borderRadius="$full" style={{alignSelf:'center'}}  >
                          <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                        </Avatar>
                        <Text style={{alignSelf:'center',marginLeft:15,fontFamily:'Khmer-Regular',fontSize:16}}>ចំនួនស្ត្រីមានផ្ទៃពោះ</Text>

                      </View>
                    
                      <Text style={{alignSelf:'center',fontSize:16}}><Text style={{fontSize:20,color:'#5F3C8D',fontWeight:'bold'}}>0</Text> នាក់</Text>

                    </View>  
                  
                </View>
              )}     
              scrollEnabled={false}
            
            /> 


          </ScrollView>
        </SafeAreaView>
      </GluestackUIProvider>
    );
  }
}

export default Home

