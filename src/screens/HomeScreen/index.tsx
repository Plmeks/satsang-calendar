import React from 'react';
import {Button} from '@ant-design/react-native';
import NextEvent from '../../components/NextEvent';
import {View} from 'react-native';
import {ScrollView} from 'react-native';
import {Text} from 'react-native';

export default function HomeScreen({navigation}: any) {
  return (
    <>
      <View style={{flex: 1}}>
        {/* <ScrollView> */}
        <NextEvent />
        {/* </ScrollView> */}
        {/* <Footer /> */}
        {/* <View>
          <Text>footer</Text>
        </View> */}
      </View>

      {/* <Button onPress={() => navigation.navigate('Calendar')}>
        Go to Calendar
      </Button> */}
    </>
  );
}
