import React, {useMemo} from 'react';
import {ScrollView, Text} from 'react-native';
import RenderHtml from 'react-native-render-html';
import dayjs from 'dayjs';
import moment from 'moment';
import {Result, View} from '@ant-design/react-native';
import {
  useGetAllRecentEventsQuery,
  useGetRecentNgoMaEventsQuery,
} from '../../hooks/events';

export default function RecentEvent() {
  const {data: recentNgoMaEventsData, isLoading: isRecentNgoMaEventsLoading} =
    useGetRecentNgoMaEventsQuery();
  const {data: recentAllEventsData, isLoading: isRecentAllEventsLoading} =
    useGetAllRecentEventsQuery();

  const recentNgoMaEvents = useMemo(
    () => recentNgoMaEventsData?.events[0],
    [recentNgoMaEventsData],
  );

  const recentAllEvents = useMemo(
    () => recentAllEventsData?.events,
    [recentAllEventsData],
  );

  if (isRecentNgoMaEventsLoading || isRecentAllEventsLoading) {
    return <Text>Fetching...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Result
          imgUrl={{
            uri: `${recentNgoMaEvents.image.url}`,
          }}
          title={`${recentNgoMaEvents.title}`}
          message={`Дата: ${moment(recentNgoMaEvents.start_date).format(
            'MM.DD.YYYY HH:mm',
          )}`}
        />
      </View>
      {/* {recentAllEvents && recentAllEvents.length && (
        <View>
          {recentAllEvents.slice(0, 3).map((event: any) => (
            <Result
              imgUrl={{
                uri: `${event.image.url}`,
              }}
              title={`${event.title}`}
              message={`Дата: ${moment(event.start_date).format(
                'MM.DD.YYYY HH:mm',
              )}`}
            />
          ))}
        </View>
      )} */}
      {/* <Text>{recentSatsang.title}</Text>
      <RenderHtml
        contentWidth={width}
        source={{html: recentSatsang.description}}
      /> */}
    </ScrollView>
  );
}
