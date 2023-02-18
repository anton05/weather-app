import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { WeatherItemType } from '../Components/WeatherCard/WeatherCardContainer';
import { WEATHER_API_KEY } from '../API/API';

export type WeatherStateType = {
    cityList: WeatherItemType[] | undefined,
    isLoading: boolean,
};

const initialState: WeatherStateType = {
    cityList: [],
    isLoading: false,
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
)

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
        // updateWeather(state, action) {
        //     const arrayOfCityId = state.cityList.map(i => i.id);
        //     const index = arrayOfCityId.indexOf(action.payload);
        //     state.cityList[index].main.temp = `+${Math.floor(Math.random() * 30)}`;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.cityList?.push(action.payload);
            state.isLoading = false;
        })
        builder.addCase(fetchWeather.rejected, (state) => {
            state.cityList = undefined;
        })
      },
    })

export const { removeCity, setLoading } = weatherSlice.actions;

export default weatherSlice.reducer;