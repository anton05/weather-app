import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchWeather } from '../../store/weatherSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const SearchBar: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.weather.isLoading);
    const cityList = useAppSelector(state => state.weather.cityList);
    const error = useAppSelector(state => state.weather.error);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);  
    };

    const onButtonClick = () => {
        if(!inputValue) {
            return;
        } else if (cityList?.map(c => c.name.toLowerCase())
            .includes(inputValue.toLowerCase())) {
            return;
        };
        
        dispatch(fetchWeather(inputValue));
        setInputValue("");
    };

    return(
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div>
                <TextField
                    value={inputValue}
                    onChange={onInputChange}
                    id="standard-textarea"
                    label="City Weather"
                    placeholder="Write city..."
                    multiline
                    variant="standard"
                />
                {
                    error  
                    ? <div style={{ 
                            marginTop: "5px", 
                            color: "red" 
                        }} >
                            UNCORRECT CITY NAME!
                        </div> 
                    : null
                }
            </div>
            <div>
                <Button 
                    onClick={onButtonClick}
                    variant="contained"
                    disabled={isLoading}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;