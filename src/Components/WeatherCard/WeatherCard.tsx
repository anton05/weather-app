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
                <CloseIcon onClick={handleDelete} fontSize='small' />
            </div>
            <div className="link">
                <Link style={{textDecoration: 'none'}} to={`details/${name.toLowerCase()}`}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {name.toUpperCase()}
                    </div>
                    <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
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