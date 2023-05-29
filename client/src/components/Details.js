import "./Details.css";
import { useParams } from "react-router";
import { useGetWeatherQuery } from "../lib/cityApiService";
import { useWeather } from "../hooks/useWeather";
const images = require.context("../../public/images", true);

const Details = () => {
  const { id } = useParams();
  const { isLoadingCoordinates, lon, lat } = useWeather(id);

  const { isLoading, data, isError } = useGetWeatherQuery({ lat, lon });

  if (isLoadingCoordinates || isError || isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  let imageUrl = images(`./${data?.weather?.[0]?.main}.jpg`);
  return (
    <div
      className="details"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "black",
      }}
    >
      Weather: {data?.weather?.[0]?.description}
      <br />
      Temperature: {Math.floor(data?.main?.temp - 273)}
      <br />
      Humidity: {data?.main?.humidity}
    </div>
  );
};

export default Details;
