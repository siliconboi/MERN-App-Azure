import {configureStore} from "@reduxjs/toolkit"
import city from "./CitySlice"
import { cityApi } from "./cityApiService"
const store = configureStore({
    reducer:{
        city,
        [cityApi.reducerPath]: cityApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cityApi.middleware),
  })

export default store