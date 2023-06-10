import React from 'react';
import {Button, ScrollView, useWindowDimensions} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Calendar from '../../components/Calendar';

export default function EventScreen({route}: any) {
  const {title, description} = route.params;
  const {width} = useWindowDimensions();

  return (
    <ScrollView>
      <Text>{title}</Text>
      <RenderHTML contentWidth={width} source={{html: description}} />
    </ScrollView>
  );
  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <Text>Details Screen</Text>
  //       <Text>itemId: {JSON.stringify(itemId)}</Text>
  //       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
  //       <Button
  //         title="Go to Details... again"
  //         onPress={() =>
  //           navigation.push('Details', {
  //             itemId: Math.floor(Math.random() * 100),
  //           })
  //         }
  //       />
  //       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  //       <Button title="Go back" onPress={() => navigation.goBack()} />
  //     </View>
  //   );
}
