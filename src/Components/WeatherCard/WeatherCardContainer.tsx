import { useAppDispatch, useAppSelector } from "../../hook";
import { removeCity, updateInProgress, updateWeather } from '../../store/weatherSlice';
import WeatherCard from "./WeatherCard";

export type WeatherItemType = {
    name: string,
    main: {temp: number},
    id: number,
    arrayOfProgress: []
};

const WeatherCardContainer: React.FC = () => {
    const dispatch = useAppDispatch();

    const weatherArray = useAppSelector((state) => state.weather.cityList);
    const arrayOfProgress = useAppSelector((state) => state.weather.updateInProgress);

    const handleDelete = (id: number): {} => {
        return dispatch(removeCity(id));
    };

    const handleUpdate = (name: string) => {
         dispatch(updateInProgress(name));
         dispatch(updateWeather(name));
    };

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
                        handleUpdate={() => handleUpdate(name.toLowerCase())}
                        arrayOfProgress={arrayOfProgress}
                    />
                ))
            ) : <div>no city</div>
            }
        </div>
    );
};

export default WeatherCardContainer;