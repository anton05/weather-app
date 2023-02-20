import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getWeatherDetails } from "../../store/weatherSlice";
    
const DetailsContainer: React.FC<any> = () => {
    const [weatherDetails, setWeatherDetails] = useState<any>(null);

    const dispatch = useAppDispatch();
    const params = useParams();

    const arrayOfCity = useAppSelector((state) => state.weather.weatherDetails);

    useEffect(() => {
        dispatch(getWeatherDetails(params.city));
    }, [params.city]);

    useEffect(() => {
        if(!arrayOfCity) {
            return;
        }

        const cityDetails = arrayOfCity
        .find(city => city.name.toLowerCase() === params.city);

        setWeatherDetails(cityDetails)
    }, [arrayOfCity]);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            { weatherDetails ? <DetailsCard weatherDetails={weatherDetails} /> : <div>no data</div> }
        </div>
    ); 
};  

export default DetailsContainer;