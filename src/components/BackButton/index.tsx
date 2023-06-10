import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native';

export default function BackButton() {
  const navigation: any = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
