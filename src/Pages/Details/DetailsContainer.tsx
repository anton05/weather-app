import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";
import HourlyTemperature from "../../Components/HourlyTemperature/HourlyTemperature";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchHourlyDetails, getWeatherDetails } from "../../store/weatherSlice";

const DetailsContainer: React.FC<any> = () => {
    const [weatherDetails, setWeatherDetails] = useState<any>(null);
    const [hourlyDeatails, setHourlyDetails] = useState<any>(null);

    const dispatch = useAppDispatch();
    const params = useParams();

    const arrayOfCity = useAppSelector((state) => state.weather.weatherDetails);
    const hourlyTemperature = useAppSelector((state) => state.weather.hourlyTemperature);

    useEffect(() => {
        dispatch(getWeatherDetails(params.city));
        dispatch(fetchHourlyDetails());
    }, [params.city]);

    useEffect(() => {
        if(!arrayOfCity) {
            return;
        }

        const cityDetails = arrayOfCity
        .find(city => city.name.toLowerCase() === params.city);

        setWeatherDetails(cityDetails)
    }, [arrayOfCity]);

    useEffect(() => {
        if (!hourlyTemperature) {
            return
        };

        setHourlyDetails(hourlyTemperature)
    }, [hourlyTemperature])

    return (
        <>
            <div style={{ 
                display: "flex", 
                justifyContent: "flex-start", 
                flexDirection: "column",
                alignItems: "center",
                height: "100vh", 
            }}>
                { weatherDetails ? <DetailsCard weatherDetails={weatherDetails} /> : <div>no data</div> }
                <div style={{ marginTop: "90px" }}>
                   { hourlyDeatails ? <HourlyTemperature hourlyDeatails={hourlyDeatails} /> : null }
                </div>
            </div>
        </>
    ); 
};  

export default DetailsContainer;