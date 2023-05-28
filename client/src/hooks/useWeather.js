import { useGetCoordinatesQuery } from "../lib/cityApiService"

export const useWeather = (id)=>{
const {isLoading, data} = useGetCoordinatesQuery(id)
if(data) return {isLoadingCoordinates:isLoading, lon:data.lon, lat:data.lat}
return {isLoadingCoordinates:isLoading, lon:0,lat:0}
}