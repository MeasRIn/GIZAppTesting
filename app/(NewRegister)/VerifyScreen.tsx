import { AntDesign, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { View,Text,Image, Heading } from "@gluestack-ui/themed"
import { router } from "expo-router";
import { Dimensions, TouchableOpacity, ViewBase } from "react-native";

const VerifyScreen = () =>{
    var {width, height} = Dimensions.get('window');
    return (
        <View style={{flex:1}}>
            <View style={{
                height:'100%',
                backgroundColor:'#5F3C8D',
                position:'absolute',
                top:0,
                right:0,
                left:0
            }}>
                <View style={{position:'absolute',top:70,left:20}}>
                    <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <TouchableOpacity onPress={()=>router.back()}>
                        <Ionicons name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:'white',fontFamily:'BattambangBold'}}>ចុះឈ្មោះអតិថិជនថ្មី</Text>
                    </View>
                </View>
                <View style={{
                    height:'100%',
                    backgroundColor:'white',
                    marginTop:height*.15,
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                }}>
                    {/* verify image section */}

                    <View style={{alignSelf:'center',marginTop:30}}>
                        <Octicons name="verified" size={84} color="green" style={{alignSelf:'center'}}/>
                        <Text  style={{color:'#3F484B',fontSize:12 ,alignSelf:'center',marginTop:5}}>ចុះឈ្មោះបានជោគជ័យ</Text>
                        
                    </View>
                    {/* card for verify infomation user */}
                    <View style={{paddingHorizontal:20}}>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row',alignSelf:'flex-end',gap:5}}>
                                <Text style={{color:'#5F3C8D',fontFamily:'BattambangRegular',fontSize:18}}>កែប្រែ</Text>
                                <MaterialIcons name="edit" size={22} color="#5F3C8D" style={{marginTop:5}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',gap:50,borderColor:'#D3D3D3',borderWidth:1.5,borderRadius:15,marginTop:10}}>
                            <View style={{gap:10,padding:10}}>
                                <Heading style={{fontFamily:'BattambangBold',fontSize:16}}>ឈ្មោះម្ដាយ</Heading>
                                <Heading style={{fontFamily:'BattambangBold',fontSize:16}}>អាយុម្ដាយ</Heading>
                                <Heading style={{fontFamily:'BattambangBold',fontSize:16}}>លេខទូរស័ព្ទ</Heading>

                            </View>
                            <View style={{gap:18,paddingHorizontal:10,paddingVertical:15}}>
                                <Text style={{fontFamily:'BattambangRegular',fontSize:14}}>Sok</Text>
                                <Text style={{fontFamily:'BattambangRegular',fontSize:14}}>25ឆ្នាំ</Text>
                                <Text style={{fontFamily:'BattambangRegular',fontSize:14}}>123456789</Text>

                            </View>
                        </View>
                        <TouchableOpacity>
                            <View>
                                <Text style={{color:'#5F3C8D',fontFamily:'BattambangRegular',textDecorationLine:'underline',alignSelf:'flex-end',marginTop:5,fontSize:14}}>មើលលម្អិត</Text>
                            </View>
                        </TouchableOpacity>

                        {/*  */}
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                            <Text style={{color:'#A7B7B9',fontFamily:'BattambangRegular',fontSize:16}}>កូនក្នុងបន្ទុក</Text>
                            <TouchableOpacity>
                                <View style={{flexDirection:'row',gap:10}}>
                                    <Text style={{color:'#5F3C8D',fontFamily:'BattambangRegular',fontSize:16}}>បន្ថែមកូន</Text>
                                    <Ionicons name="add-circle-outline" size={24} color="#5F3C8D" style={{alignSelf:'center'}}/>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Pregnant */}
                            <View style={{height:70,width:'100%',backgroundColor:'#F4F7F7',marginTop:15,borderRadius:12}}>
                                <View style={{height:70,width:10,backgroundColor:'#02A338',borderTopLeftRadius:12,borderBottomLeftRadius:12,position:'absolute',left:0,top:0}}>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:5}}> 
                                    <View >
                                        <Text style={{fontFamily:'BattambangBold',marginBottom:8,fontSize:16}}>គភ៌</Text>
                                        <Text style={{color:'#A7B7B9',fontSize:14}}>មានគភ៌ . អាយុ 0ថ្ងៃ</Text>
                                    </View>
                                    <TouchableOpacity style={{alignSelf:'center'}}>
                                        <MaterialIcons name="edit" size={30} color="#5F3C8D"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        {/* history view */}
                        <TouchableOpacity onPress={()=>router.push("/(NewRegister)/HistoryView")}>
                            <View style={{flexDirection:'row',gap:5,marginTop:10}}>
                                <MaterialIcons name="history" size={26} color="#5F3C8D" style={{alignSelf:'center'}}/>
                                <Text style={{color:'#5F3C8D',textDecorationLine:'underline',fontFamily:'BattambangRegular',fontSize:14}}>មើលប្រវត្តិពិនិត្យមុនៗ</Text>
                            </View>
                        </TouchableOpacity>
                        {/*  */}
                        <TouchableOpacity onPress={()=>router.push("/Consulting")}>
                            <View style={{height:70,width:'100%',backgroundColor:'#5F3C8D',marginTop:35,borderRadius:12,flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignSelf:'center'}}>
                                    <Image 
                                        source={require('@/assets/images/consulting.png')}
                                        style={{ height: 40 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{color:'white',alignSelf:'center',fontFamily:'BattambangRegular',fontSize:14}}>ចាប់ផ្ដើមពិនិត្យ និងប្រឹក្សា</Text>
                                </View>
                                <View style={{alignSelf:'center',marginRight:10}}>
                                    <AntDesign name="right" size={24} color="#FFFFFF" />
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    
                </View>
            </View>
        </View>
    )
}
export default VerifyScreen;