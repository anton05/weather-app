import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { WeatherItemType } from '../Components/WeatherCard/WeatherCardContainer';
import { WEATHER_API_KEY } from '../API/API';

export type WeatherStateType = {
    cityList: WeatherItemType[],
    isLoading: boolean,
    error: boolean
};

const initialState: WeatherStateType = {
    cityList: [],
    isLoading: false,
    error: false
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
         })
      },
    })

export const { removeCity, setLoading } = weatherSlice.actions;

export default weatherSlice.reducer;