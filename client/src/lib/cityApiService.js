import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.openweathermap.org/",
  }),
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: (city) => ({
        url: `geo/1.0/direct?q=${city}&appid=ebaa7c546d35fc00f448466579bbd215`,
        params: { city },
      }),
      transformResponse: (response) => response[0],
    }),
    getWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: `data/2.5/weather?lat=${lat}&lon=${lon}&appid=ebaa7c546d35fc00f448466579bbd215`,
      }),
    }),
  }),
});
export const { useGetCoordinatesQuery, useGetWeatherQuery } = cityApi;
