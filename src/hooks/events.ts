import {useQuery} from '@tanstack/react-query';
import {Moment} from 'moment';
import {getEvents} from '../api';

interface IDateRange {
  startDate: string;
  endDate: string;
}

export function useGetEventsByDateQuery({startDate, endDate}: IDateRange) {
  return useQuery(
    ['events', startDate, endDate],
    () =>
      getEvents({
        startDate,
        endDate,
        categories: [
          'mastera-free-away',
          'friday',
          'saturday',
          'sunday',
          'test',
        ],
      }),
    {
      // enabled: false,
      // retry: false,
      // staleTime: Infinity,
    },
  );
}

export function useGetAllRecentEventsQuery() {
  return useQuery(['events', 'all'], () =>
    getEvents({
      categories: ['mastera-free-away', 'friday', 'saturday', 'sunday', 'test'],
    }),
  );
}

export function useGetRecentNgoMaEventsQuery() {
  return useQuery(['events', 'ngo-ma'], () =>
    getEvents({categories: ['friday', 'saturday', 'sunday']}),
  );
}
