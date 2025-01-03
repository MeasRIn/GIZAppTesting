import { Text, View, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Avatar, AvatarFallbackText, Box, GluestackUIProvider, Heading, HStack, Switch, VStack } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export class Menu extends Component {

  
  render() {
  
    var {width,height} = Dimensions.get('window');
    return (
      <GluestackUIProvider config={config}>

      {/* header */}
      <View style={{ flex: 1 }}>
        <View style={{ 
          height: "100%",
          backgroundColor: "#5F3C8D",
        
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        }}></View>
        {/* section page */}
      <View style={{ 
          height: "100%", 
          backgroundColor: "white",
          borderTopLeftRadius: 25, 
          borderTopRightRadius: 25, 
          marginTop: height*.07,

        
        }}>
        <Text style={{marginLeft:20, marginTop:20,color:"#56367D",fontFamily:'NatoSansKhmer',fontSize:20}}>ផ្សេងៗ</Text>
        {/* list account */}
        <View style={{borderColor:"rgba(89, 87, 92, 0.18)",borderWidth:1,borderRadius:10,marginHorizontal:20,marginTop:30}}>
          {/* setting list */}
            <VStack space="xs">
              {/* user info section*/}
              <TouchableOpacity>

                <HStack space="xs" alignItems="center" justifyContent="space-between" paddingVertical={15} paddingHorizontal={10} borderBottomColor='#E4E9E9' borderBottomWidth={1} >
                  <HStack space="md" alignItems="center">       
                    <Avatar bgColor='$amber600' size="md" borderRadius="$full" >
                      <Image  source={require('@/assets/images/profileImage.png')}
                                              resizeMode="contain" 
                                              style={{
                                              width: '100%', 
                                              height: '100%',
                        }}/>
                    </Avatar> 
                    <Text style={{ color: "rgb(56, 36, 81)",fontFamily:'Khmer-Regular', fontSize: 16 }}>សៀវ​​ ពាន</Text>
                  </HStack>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#3F484B" />
                </HStack>
              </TouchableOpacity>
              {/* support group section */}
              <TouchableOpacity>
                <HStack space="xs" alignItems="center" justifyContent="space-between" paddingVertical={15} paddingHorizontal={10} borderBottomColor='#E4E9E9' borderBottomWidth={1} >
                  <HStack space="md" alignItems="center">       
                    <Avatar bgColor='$amber600' size="md" borderRadius="$full" >
                      <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                    </Avatar> 
                    <Text style={{ color: "rgb(56, 36, 81)", fontSize: 14 }}>ក្រុមទ្រទ្រង់ សុខភាពភូមិ ក្នុងឃុំទាំអស់</Text>
                  </HStack>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#3F484B" />
                </HStack>
              </TouchableOpacity>
              {/* notification section */}
                <HStack space="xs" alignItems="center" justifyContent="space-between" paddingVertical={15} paddingHorizontal={10} borderBottomColor='#E4E9E9' borderBottomWidth={1} >
                  <HStack space="md" alignItems="center" paddingHorizontal={5}>       
                    <Ionicons name="notifications-outline" size={30} color="#3F484B" />
                    <Text style={{ color: "rgb(56, 36, 81)",fontFamily:'Khmer-Regular', fontSize: 16 }}>ការទទួលដំណឹង</Text>
                  </HStack>
                  <Switch size="md" isDisabled={false} trackColor={{ false: '#grey', true: '#5F3C8D' }}  />
                </HStack>
              {/* how to use section */}
              <TouchableOpacity>
                <HStack space="xs" alignItems="center" justifyContent="space-between" paddingVertical={15} paddingHorizontal={10} borderBottomColor='#E4E9E9' borderBottomWidth={1} >
                  <HStack space="md" alignItems="center" paddingHorizontal={5}>       
                    <Feather name="book-open" size={30} color="#3F484B" />
                    <Text style={{ color: "rgb(56, 36, 81)", fontSize: 16 }}>របៀបប្រើប្រាស់កម្មវិធី</Text>
                  </HStack>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#3F484B" />
                </HStack>
              </TouchableOpacity>
              {/* FAQ section */}
              <TouchableOpacity>
                <HStack space="xs" alignItems="center" justifyContent="space-between" paddingVertical={15} paddingHorizontal={10} borderBottomColor='#E4E9E9' borderBottomWidth={1} >
                  <HStack space="md" alignItems="center" paddingHorizontal={5}>       
                    <MaterialCommunityIcons name="message-alert" size={30} color="#3F484B" />
                    <Text style={{ color: "rgb(56, 36, 81)",fontFamily:'Khmer-Regular', fontSize: 16 }}>FAQ</Text>
                  </HStack>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#3F484B" />
                </HStack>
                </TouchableOpacity>
                {/* log out section */}
                <TouchableOpacity>
                <HStack space="sm" alignItems="center" justifyContent="space-between" paddingVertical={15} paddingHorizontal={10} >
                  <HStack space="md" alignItems="center" paddingHorizontal={5}>       
                    <Feather name="log-out" size={30} color="#3F484B" />
                    <Text style={{ color: "rgb(56, 36, 81)",fontFamily:'Khmer-Regular', fontSize: 16 }}>ចាកចេញ - Logout</Text>
                  </HStack>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#3F484B" />
                </HStack>
              </TouchableOpacity>

            </VStack>
        
        </View>




      </View>
      </View>
    </GluestackUIProvider>
    )
  }
}

export default Menu