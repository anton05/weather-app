import CloseIcon from '@mui/icons-material/Close';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import './WeatherCard.css';
import loader from '../../assets/loading.gif';

export type WeatherItemType = {
    name: string,
    temperature: {temp: number},
    id: number,
    handleDelete: () => void,
    handleUpdate: () => void,
    arrayOfProgress: string[]
};

const WeatherCardContainer: React.FC<WeatherItemType> = ({ name, temperature, handleDelete, handleUpdate, arrayOfProgress }) => { 

    const celsius = (temperature.temp - 273.15).toString().slice(0,3);

    return (
        <div className="card-container">
            {
                !arrayOfProgress.some(i => i === name.toLowerCase()) ?  
                <>
                <div className="delete">
                <CloseIcon onClick={handleDelete} fontSize='small' style={{ cursor: "pointer" }} />
            </div>
            <div className="link">
                <Link style={{textDecoration: 'none'}} to={`details/${name.toLowerCase()}`}>
                    <div className="name">
                        {
                            name.length > 10 
                            ? name.toUpperCase().slice(0, 8)+"..."
                            : name.toUpperCase()
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
            </> : 
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={loader} style={{ width: "30px", height: "30px" }} alt="loading" />
            </div>
            }
        </div>
    );
};

export default WeatherCardContainer;