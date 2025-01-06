import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, VStack, Text, View, Input, InputField, InputSlot, Button, FormControl, ButtonText, InputIcon, EyeIcon, EyeOffIcon } from "@gluestack-ui/themed"
import { router } from "expo-router"
import { useState } from "react"
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const handleState = () => {
    setShowPassword((showState) => !showState)
  }

  const handleLogin = () => {
    if (!email && !password) {
      Alert.alert("សូមបំពេញលេខទូរស័ព្ទ និងលេខកូដសម្ងាត់");
    } else if (!email) {
      Alert.alert("សូមបញ្ចូលលេខទូរស័ព្ទ");
    } else if (!password) {
      Alert.alert("សូមបញ្ចូលលេខកូដសម្ងាត់");
    } else {
      Alert.alert(`ចូលគណនីជោគជ័យ ${email}`);
      router.push("../(tabs)/Home");
    }
  }
  

  return (
    <GluestackUIProvider config={config}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FormControl p="$7" style={{ alignContent: 'center' }}>
          <VStack space="sm">
            <Text color="$text500" lineHeight="$lg">
              លេខទូរស័ព្ទ <Text style={{ color: 'red', fontSize: 18 }}>*</Text>
            </Text>
            <Input>
              <InputField
                type="text"
                onChange={(e) => setEmail(e.nativeEvent.text)}
                value={email}
                placeholder="បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក"
                style={{ fontSize: 14, fontFamily: 'Khmer-Regular' }}
              />
            </Input>
          </VStack>
          <VStack space="sm" style={{ marginTop: 20 }}>
            <Text lineHeight="$xl">
              លេខកូដសុវត្តិភាព <Text style={{ color: 'red', fontSize: 18 }}>*</Text>
            </Text>
            <Input>
              <InputField
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                value={password}
                keyboardType="email-address"
                placeholder="បញ្ចូលលេខកូដសម្ងាត់របស់អ្នក"
                style={{ fontSize: 14, fontFamily: 'Khmer-Regular' }}
              />
              <InputSlot pr="$4" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>

          <Button
            onPress={handleLogin}
            style={{ backgroundColor: '#5F3C8D', marginTop: 30, width: 100, alignSelf: 'center' }}
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={true}
          >
            <ButtonText style={{ fontSize: 14 }}>បញ្ចាក់</ButtonText>
          </Button>
        </FormControl>
      </TouchableWithoutFeedback>
    </GluestackUIProvider>
  )
}

export default LoginForm;
