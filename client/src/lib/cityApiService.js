import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
});

// Custom base query with logging
const customBaseQuery = async (args, api, extraOptions) => {
  console.log("Request URL:", args.url);

  return baseQuery(args, api, extraOptions);
};

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: (city) => ({
        url: `http://localhost:8080/api/?url=https://api.openweathermap.org/geo/1.0/direct?q=${city}`,
      }),
      transformResponse: (response) => {
        console.log(response);
        return response[0];
      },
    }),
    getWeather: builder.query({
      query: ({ lat, lon }) => ({
        url: `http://localhost:8080/api/?url=https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
      }),
      transformResponse: (response) => {
        console.log(response);
        return response;
      },
    }),
  }),
});

export const { useGetCoordinatesQuery, useGetWeatherQuery } = cityApi;
