import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://weather-app-redux.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: (city) => ({
        url: `?url=https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=ebaa7c546d35fc00f448466579bbd215`,
        params: { city },
      }),
      transformResponse: (response) => {
        return response[0];
      },
    }),
    getWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: `?url=https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ebaa7c546d35fc00f448466579bbd215`,
      }),
    }),
  }),
});
export const { useGetCoordinatesQuery, useGetWeatherQuery } = cityApi;
