import axios from 'axios';

const API_URL = 'https://freeaway.by/wp-json/tribe/events/v1';

interface IGetEvents {
  startDate?: string;
  endDate?: string;
  categories?: string[];
}

export const getEvents = async ({
  startDate,
  endDate,
  categories,
}: IGetEvents) => {
  const requestUrl = `${API_URL}/events?per_page=10000&${
    startDate ? `start_date=${startDate}&` : ''
  }${endDate ? `end_date=${endDate}&` : ''}${
    categories ? `categories=${categories}` : ''
  }`;
  const response = await axios.get(requestUrl);

  return response.data;
};
