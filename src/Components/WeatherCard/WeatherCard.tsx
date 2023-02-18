import CloseIcon from '@mui/icons-material/Close';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import './WeatherCard.css';

export type WeatherItemType = {
    name: string,
    temperature: {temp: number},
    id: number,
    handleDelete: () => void
};

const WeatherCardContainer: React.FC<WeatherItemType> = ({ name, temperature, id, handleDelete }) => {

    return (
        <div className="card-container">
            <div className="delete">
                <CloseIcon onClick={handleDelete} fontSize='small' style={{ cursor: "pointer" }} />
            </div>
            <div className="link">
                <Link style={{textDecoration: 'none'}} to={`details/${name.toLowerCase()}`}>
                    <div className="name">
                        {name.toUpperCase()}
                    </div>
                    <div className="temperature">
                        {temperature.temp}
                    </div>
                </Link>
            </div>
            <div className="update">
                <UpdateIcon />
            </div>
        </div>
    );
};

export default WeatherCardContainer;