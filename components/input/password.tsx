import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, VStack,Text,Heading,Input,InputField,InputSlot,Button,FormControl,ButtonText,InputIcon, EyeIcon, EyeOffIcon, ButtonIcon } from "@gluestack-ui/themed"
import { useState } from "react"

const Password=()=>{
    const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  

  return (
    <GluestackUIProvider config={config}>

    {/* inputField for register screen */}
    <FormControl
      p="$7"
      style={{alignContent:'center'}}
    >  
        <VStack space="sm">
          <Text style={{fontFamily:'Khmer-Regular',fontSize:14}} >
            លេខកូដសុវត្តិភាព <Text style={{color:'red',fontSize:18}}>*</Text>
          </Text>
          <Input>
            <InputField type={showPassword ? "text" : "password"} placeholder="បញ្ចូលលេខកូដសុវត្តិភាព" style={{fontSize:14,fontFamily:'Khmer-Regular'}} />
            <InputSlot pr="$4" onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                // color="$darkBlue500"
              />
            </InputSlot>
          </Input>
        </VStack>
      
        <Button style={{backgroundColor:'#5F3C8D',marginTop:35,width:100,alignSelf: 'center'}} size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={true} >
          <ButtonText style={{fontSize:14}}>បញ្ចាក់ </ButtonText>
        </Button>
      
    </FormControl>
    </GluestackUIProvider>
    
  )
}
export default Password;