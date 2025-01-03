import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, VStack,Text,Heading,Input,InputField,InputSlot,Button,FormControl,ButtonText,InputIcon, EyeIcon, EyeOffIcon, ButtonIcon } from "@gluestack-ui/themed"
import { router } from "expo-router"
import { useState } from "react"

const LoginForm=()=>{
    const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  return (
    <GluestackUIProvider config={config}>


    <FormControl
      p="$7"
      
      style={{alignContent:'center'}}
    >
        <VStack space="sm">
          <Text color="$text500" lineHeight="$lg">
            លេខទូរស័ព្ទ <Text style={{color:'red',fontSize:18}}>*</Text>
          </Text>
          <Input>
            <InputField type="text" placeholder="បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក" style={{fontSize:14,fontFamily:'Khmer-Regular'}} />
          </Input>
        </VStack>
        <VStack space="sm" style={{marginTop:20}} >
          <Text  lineHeight="$xl">
            លេខកូដសុវត្តិភាព <Text style={{color:'red',fontSize:18}}>*</Text>
          </Text>
          <Input>
            <InputField type={showPassword ? "text" : "password"} placeholder="បញ្ចូលលេខកូដសម្ងាត់របស់អ្នក" style={{fontSize:14,fontFamily:'Khmer-Regular'}} />
            <InputSlot pr="$4" onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
              />
            </InputSlot>
          </Input>
        </VStack>
      
        <Button onPress={()=> router.replace("/(tabs)/Home")} style={{backgroundColor:'#5F3C8D',marginTop:30,width:100,alignSelf: 'center'}} size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={true} >
          <ButtonText style={{fontSize:14}}>បញ្ចាក់ </ButtonText>
        </Button>
      
    </FormControl>
    </GluestackUIProvider>
    
  )
}
export default LoginForm;