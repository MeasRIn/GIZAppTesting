import { Button, ButtonText } from '@gluestack-ui/themed';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { Route } from 'expo-router/build/Route';

const BtnRegister = ({}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Button
      onPress={() => router.push("../(auth)/register")}
      style={{ backgroundColor: '#E5E4F1', marginTop: 20 }}
      size="md"
      variant="solid"
      action="default"
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText style={{ color: 'rgb(123, 70, 187)' }}>ចុះឈ្មោះ</ButtonText>
    </Button>
  );
};

export default BtnRegister;