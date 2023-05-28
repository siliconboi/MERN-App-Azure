import "./Details.css";
import { useParams } from "react-router";
import { useGetWeatherQuery } from "../lib/cityApiService";
import { useWeather } from "../hooks/useWeather";

const Details = () => {
  const { id } = useParams();
  const { isLoadingCoordinates, lon, lat } = useWeather(id);
  console.log(lon, lat);
  const { isLoading, data, isError } = useGetWeatherQuery({ lat, lon });

  if (isLoadingCoordinates || isError || isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  console.log(data);
  return <div className="details">
    Weather: {data.weather[0].main}<br/>
    Temperature: {Math.floor(data.main.temp-273)}<br/>
    Humidity: {data.main.humidity}
  </div>;
};

export default Details;
