import CloseIcon from '@mui/icons-material/Close';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import './WeatherCard.css';

export type WeatherItemType = {
    name: string,
    temperature: {temp: number},
    id: number,
    handleDelete: () => void,
    handleUpdate: () => void
};

const WeatherCardContainer: React.FC<WeatherItemType> = ({ name, temperature, handleDelete, handleUpdate }) => { 

    const celsius = (temperature.temp - 273.15).toString().slice(0,3);

    return (
        <div className="card-container">
            <div className="delete">
                <CloseIcon onClick={handleDelete} fontSize='small' style={{ cursor: "pointer" }} />
            </div>
            <div className="link">
                <Link style={{textDecoration: 'none'}} to={`details/${name.toLowerCase()}`}>
                    <div className="name">
                        {
                            name.length > 10 
                            ? name.toUpperCase().slice(0, 8)+"..."
                            : name
                        }
                    </div>
                    <div className="temperature">
                        {celsius}<span style={{ color: "black", marginLeft: "1px" }}>°C</span>
                    </div>
                </Link>
            </div>
            <div className="update">
                <UpdateIcon style={{ cursor: "pointer" }} onClick={handleUpdate} />
            </div>
        </div>
    );
};

export default WeatherCardContainer;