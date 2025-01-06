import { Ionicons, Octicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Heading, View,Text } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Dimensions, TouchableOpacity } from "react-native";

const HistoryView=()=>{
    const {height}=Dimensions.get('window')
    return(
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
                    <Text style={{fontSize:20,color:'white',fontFamily:'BattambangBold'}}>មើលប្រវត្តិពិនិត្យមុនៗ</Text>
                    </View>
                </View>
                <View style={{
                    height:'100%',
                    backgroundColor:'white',
                    marginTop:height*.15,
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                }}>
                    <Text style={{fontFamily:'Khmer-Regular',fontSize:12,color:'#3F484B',padding:20}}>ស្រ្តីមានផ្ទៃពោះ .គភ៌អាយុ 0ថ្ងៃ</Text>

                    <View style={{justifyContent:'center',alignSelf:'center',marginTop:height*.3}}>
                        <Text style={{color:'#A7B7B9',fontSize:12}}>មិនមានព័ត៍មានទេ</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}
export default HistoryView;