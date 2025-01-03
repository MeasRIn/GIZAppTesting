import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { config } from '@gluestack-ui/config'
import { Avatar, AvatarFallbackText, Box, GluestackUIProvider, Heading,Image, HStack, VStack } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather,Entypo, MaterialIcons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar'
const Knowledge: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
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
    var categorise = [
      { name: 'ទាំងអស់', icon: '' },
      { name: 'មេរៀន', icon: 'book' },
      { name: 'វីដេអូ', icon: 'video' },
      { name: 'សំឡេង', icon: 'mic' },
      { name: 'អត្ថបទ', icon: 'file-text' }
    ];
    var { width, height } = Dimensions.get('window');
    return (
      <GluestackUIProvider config={config}>
        <StatusBar style="auto" />
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
            <Heading style={{color:'#56367D',fontFamily:'Khmer-Regular',paddingHorizontal:20,marginTop:15}}>ចំណេះដឹង</Heading>
          
            {/* tab categories for infomation */}
            <View style={{ paddingHorizontal: 10,paddingVertical:10 }}>
              <HStack style={{ flexWrap: 'wrap' }}>
              {categorise.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => setSelectedCategory(item.name)}>
              <Box
                style={{
                paddingHorizontal: 15,
                paddingVertical: 4,
                backgroundColor: selectedCategory === item.name ? '#5F3C8D' : '#f5f5f5',
                margin: 5,
                borderRadius: 20,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                {item.icon && <Feather name={item.icon as any} size={16} color={selectedCategory === item.name ? '#ffffff' : '#5F3C8D'} />}
                <Text style={{ color: selectedCategory === item.name ? '#ffffff' : '#5F3C8D',fontSize:12 }}>{item.name}</Text>
                </View>
              </Box>
              </TouchableOpacity>
              ))}
              </HStack>
            </View>
        
            
            <ScrollView
                style={{ flex: 1, paddingHorizontal: 20, height: 240,marginBottom:160}}
                showsVerticalScrollIndicator={false}
              >
                {knowledge.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      height: 270,
                      width: '100%',
                      backgroundColor: "#fffdfc",
                      marginRight: 10,
                      borderRadius: 10,
                      overflow: "hidden",
                      elevation: 3,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 10,
                      shadowRadius: 3.84,
                      marginBottom:20,
                      borderWidth:0.5,
                      borderColor:'#dbd9d9',
                      borderTopWidth:0
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
                          height: 180,
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
                          marginTop:10
                        }}
                      >
                        {typeof item === "object" &&
                        item !== null &&
                        "mainTitle" in item
                          ? (item as { mainTitle: string }).mainTitle
                          : ""}
                      </Text>
                      <AntDesign style={{marginTop:15}} name="right" size={20} color="#3F484B" />
                    </View>
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
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
                ))}

        
          </ScrollView>
        </View>
        </View>
      </GluestackUIProvider>
    )
  }

export default Knowledge
