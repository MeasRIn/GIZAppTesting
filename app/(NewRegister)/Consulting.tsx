import { Ionicons } from "@expo/vector-icons";
import { View ,Text} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Dimensions, TouchableOpacity } from "react-native";

const Consulting=()=>{
    const {height}=Dimensions.get('window');
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
                    <Text style={{fontSize:20,color:'white',fontFamily:'BattambangBold'}}>ពិនិត្យ និងប្រឹក្សា</Text>
                    </View>
                </View>
                <View style={{
                    height:'100%',
                    backgroundColor:'white',
                    marginTop:height*.15,
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                }}>
                   
                </View>
            </View>
        </View>
    )
}
export default Consulting;