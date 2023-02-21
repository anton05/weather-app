import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { WeatherItemType } from '../Components/WeatherCard/WeatherCardContainer';
import { WEATHER_API_KEY } from '../API/API';

export type WeatherStateType = {
    cityList: WeatherItemType[],
    isLoading: boolean,
    error: boolean,
    updateInProgress: string[],
    weatherDetails: {name: string}[],
    hourlyTemperature: {time: number, temperature: number}[] | null
};

const initialState: WeatherStateType = {
    cityList: [],
    isLoading: false,
    error: false,
    updateInProgress: [],
    weatherDetails: [],
    hourlyTemperature: []
};

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string) => {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
            );
            
            if (res.ok) {
                const data = await res.json();
                return data;
            };
            return false;
    }
);

export const getWeatherDetails = createAsyncThunk(
    'weather/getWeatherDetails',
    async (city: string | undefined) => {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
            );
            
            if (res.ok) {
                const data = await res.json();
                return data;
            };
            return false;
    }
);

export const updateWeather = createAsyncThunk(
    'weather/updateWeather',
    async (city: string) => {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
            );
            
            if (res.ok) {
                const data = await res.json();
                return data;
            };
            return false;
    }
);

export const fetchHourlyDetails = createAsyncThunk(
    'weather/fetchHourlyDetails',
     () => {
        const hourlyDetails = [
            {
                time: 0,
                temperature: Math.floor(Math.random() * 30)
            },
            {
                time: 6,
                temperature: Math.floor(Math.random() * 30)
            },
            {
                time: 12,
                temperature: Math.floor(Math.random() * 30)
            },
            {
                time: 18,
                temperature: Math.floor(Math.random() * 30)
            },
        ];

        return hourlyDetails;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        removeCity(state, action) {
            state.cityList = state.cityList?.filter(city => city.id !== action.payload);
        },
        updateInProgress(state, action) {
            state.updateInProgress.push(action.payload.toLowerCase());
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
           if (!action.payload) {
            state.cityList = state.cityList;
            state.error = true;
            state.isLoading = false;
            return;
           }

            state.cityList.push(action.payload);
            state.error = false;
            state.isLoading = false;
        })
        builder.addCase(updateWeather.fulfilled, (state, action) => {
            if (!action.payload) {
             state.cityList = state.cityList;
             return;
            }
 
            const arrayOfCityName = state.cityList.map(i => i.name);
            const index = arrayOfCityName.indexOf(action.payload.name);
            state.cityList[index] = action.payload;
            state.updateInProgress = state.updateInProgress.filter(i => i.toLowerCase() !== action.payload.name.toLowerCase());
         })
         builder.addCase(getWeatherDetails.fulfilled, (state, action) => {
            if (!action.payload) {
             state.weatherDetails = state.weatherDetails;
             return;
            }

            state.weatherDetails.push(action.payload);
         })
         builder.addCase(fetchHourlyDetails.fulfilled, (state, action) => {
            if (!action.payload) {
             state.hourlyTemperature = state.hourlyTemperature;
             return;
            }
            console.log(action.payload);
            state.hourlyTemperature = action.payload;
         })
      },
    })
    
export const { removeCity, setLoading, updateInProgress } = weatherSlice.actions;

export default weatherSlice.reducer;