import { Text, useColorScheme, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import { Link, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();
const  _layout = () =>{
  
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Khmer-Regular': require('../assets/fonts/Khmer-Regular.ttf'),
    'Khmer-Moul':require('../assets/fonts/Moul-Regular.ttf'),
    'NatoSansKhmer':require('../assets/fonts/NotoSansKhmer-Black.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

    return (
      <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='(auth)/login' 
           options={{
            headerTitle:()=>(
              <Text style={{flex:1,justifyContent:'flex-start',color:'black',fontWeight:'bold',fontSize:18}}>ចូលគណនី</Text>
            ),
            headerStyle: {
              backgroundColor: '#f8f9fa', 
            },
          }} 
        />
        <Stack.Screen name='(auth)/register'  options={{
            headerTitle: () => (
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>

              <Text style={{
                fontSize:14,
              
                color:'black',
                fontFamily:'Khmer-Regular'
              }}>
                ចុះឈ្មោះ
              </Text>
              {/* link ti login screen */}
              <Text style={{
               
               color: 'rgb(123, 70, 187)',
             }}>
           
            <Link href="/login">
                ចូលគណនី
            </Link>
            </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f8f9fa', 
            },

           
          }} />
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
      </Stack>
    )
  
}

export default _layout