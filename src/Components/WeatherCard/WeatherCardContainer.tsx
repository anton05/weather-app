import { useAppDispatch, useAppSelector } from "../../hook";
import { removeCity } from '../../store/weatherSlice';
import WeatherCard from "./WeatherCard";

export type WeatherItemType = {
    name: string,
    main: {temp: number},
    id: number
};

const WeatherCardContainer: React.FC = () => {
    const dispatch = useAppDispatch();

    const weatherArray = useAppSelector((state) => state.weather.cityList);

    const handleDelete = (id: number): {} => {
        return dispatch(removeCity(id))
    };

    // const handleUpdate = (id: number): {} => {
    //     return dispatch(updateWeather(id))
    // };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "90%",
            height: "40%"
        }}>
            {weatherArray ? (
                weatherArray?.map(({ name, main, id }: WeatherItemType) => (
                    <WeatherCard 
                        key={id} 
                        name={name} 
                        temperature={main} 
                        id={id} 
                        handleDelete={() => handleDelete(id)}
                    />
                ))
            ) : <div>no city</div>
            }
        </div>
    );
};

export default WeatherCardContainer;