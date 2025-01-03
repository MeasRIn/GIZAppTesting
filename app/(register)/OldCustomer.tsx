import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { AntDesign, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { AddIcon, Fab, FabIcon, FabLabel, Input, InputField } from '@gluestack-ui/themed'

export class OldCustomer extends Component {
  render() {
    var {height} = Dimensions.get('window')
    return (
      <View style={{flex:1}}>
        <View 
        style={{
          backgroundColor:'#5F3C8D',
          height:'100%',
          position:'absolute',
          right:0,
          left:0,
          top:0,

        }}>
         <View style={{position:'absolute',top:70,left:20}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
              <TouchableOpacity onPress={()=>router.back()}>
                <Ionicons name="chevron-back-outline" size={30} color="white" />
              </TouchableOpacity>
              <Text style={{fontSize:20,color:'white'}}>ចុះឈ្មោះអតិថិជនចាស់</Text>
            </View>
          </View>
          <View
          style={{
            backgroundColor:'white',
            height:'100%',
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            marginTop:height*.15,
           
          }}>
            <View style={{paddingHorizontal:20,marginTop:30}}>
              {/* find uesr via phone or name */}
              <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                <InputField
                    placeholder='ស្វែងរកតាមឈ្មោះ ឬលេខទូរស័ព្ទ'style={{fontSize:14,color:'#60767A'}}
                />
                <View style={{borderLeftWidth:.5,borderColor:'#D3D3D3',padding:5}}>

                  <AntDesign name="search1" size={24} color="black" style={{padding:5,color:'#D3D3D3',justifyContent:'center',alignContent:'center'}} />
                </View>
              </Input>
              {/*  */}
              <Text style={{fontSize:12,color:'#60767A',marginTop:10}}>ជ្រើសរើសអតិជន</Text>
              

              {/*  */}

             
            <View style={{backgroundColor:'#CD85B0',borderRadius:50,marginTop:10,height:50,width:50,position:'absolute',top:height*.65,right:30}}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:5}}>

                <FontAwesome6 name="user-plus" size={24} color="white"  />
              </View>
            </View>

            </View>

      
           


          </View>
        </View>
      </View>
    )
  }
}

export default OldCustomer