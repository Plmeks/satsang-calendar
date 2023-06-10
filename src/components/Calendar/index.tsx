import moment, {Moment} from 'moment';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/routers';
import CalendarPicker from 'react-native-calendar-picker';
import {
  Button,
  Dimensions,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useGetEventsByDateQuery} from '../../hooks/events';
import RenderHTML from 'react-native-render-html';

export default function Calendar() {
  const navigation: any = useNavigation();
  const {width} = useWindowDimensions();
  const [dateRange, setDateRange] = useState({
    startDate: moment().startOf('month').format('YYYY-MM-DD'),
    endDate: moment().endOf('month').format('YYYY-MM-DD'),
  });
  const {data, isLoading} = useGetEventsByDateQuery(dateRange);

  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );

  const datesHighlight = useMemo(
    () =>
      data?.events?.map((event: any) => ({
        date: moment(event.start_date).format('YYYY-MM-DD'),
        style: {backgroundColor: '#0e7bab'},
      })),
    [data],
  );

  const selectedEvent = useMemo(
    () =>
      data?.events?.filter(
        (event: any) =>
          moment(event.start_date).format('YYYY-MM-DD') === selectedDate,
      ),
    [data, selectedDate],
  );

  //   const [startDate, setStartDate] = useState(
  //     moment().startOf('month').format('YYYY-MM-DD'),
  //   );
  //   const [customDatesStyles, setCustomDatesStyles] = useState([] as any[]);

  //   const dates = useMemo(
  //     () =>
  //       data?.events?.map((event: any) => ({
  //         startDate: moment(event.start_date).format('YYYY-MM-DD'),
  //         title: event.title,
  //       })),
  //     [data],
  //   );

  //   useEffect(() => {
  //     if (data && data.events) {
  //       const styles: any[] = data.events.map((event: any) => ({
  //         date: moment(event.start_date).format('YYYY-MM-DD'),
  //         style: {backgroundColor: '#0e7bab'},
  //       }));

  //       setCustomDatesStyles(styles);
  //     }
  //   }, [data]);

  //   if (isLoading) {
  //     return <Text>Fetching...</Text>;
  //   }

  const onMonthChange = (date: any) => {
    setDateRange({
      startDate: moment(date).format('YYYY-MM-DD'),
      endDate: moment(date).endOf('month').format('YYYY-MM-DD'),
    });
  };

  const onDateChange = useCallback((date: Moment) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
    // const selectedDate: any = queryClient.getQueryData([
    //   'events',
    //   dateRange.startDate,
    //   dateRange.endDate,
    // ]);
  }, []);

  return (
    <>
      <View style={{backgroundColor: 'white', position: 'relative'}}>
        <CalendarPicker
          startFromMonday={true}
          customDatesStyles={datesHighlight}
          onDateChange={onDateChange}
          onMonthChange={onMonthChange}
        />
        {isLoading && (
          <View
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.5,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'red',
            }}>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
      {selectedEvent && selectedEvent.length > 0 && (
        <>
          {selectedEvent.map((event: any) => (
            <View>
              <Text>{event.title}</Text>
              <RenderHTML contentWidth={width} source={{html: event.excerpt}} />
              <Button
                title="Go to Details"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  //   navigation.dispatch(
                  //     StackActions.push('Event', {
                  //       title: event.title,
                  //       description: event.description,
                  //     }),
                  //   );
                  //   navigation.setOptions({
                  //     headerLeft: () => <Text>Test</Text>,
                  //   });
                  navigation.navigate('Event', {
                    title: event.title,
                    description: event.description,
                  });
                }}
              />
            </View>
          ))}
        </>
      )}
    </>
  );
}
