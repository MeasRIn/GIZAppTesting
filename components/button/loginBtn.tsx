import { Button, ButtonText } from '@gluestack-ui/themed';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const BtnLogin = ({}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Button 
        onPress={()=> router.push("/(auth)/login")}
        style={{backgroundColor:'#5F3C8D',marginTop:10}} 
        size="md"
        variant="solid"
        action='default' 
        isDisabled={false} 
        isFocusVisible={false}  >
        <ButtonText>ចូលគណនី </ButtonText>
              
    </Button>
  );
};

export default BtnLogin;