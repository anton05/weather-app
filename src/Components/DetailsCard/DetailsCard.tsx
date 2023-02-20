import tempImg from '../../assets/temperature.png'
import sunImg from '../../assets/sun.png'

import './DetailsCard.css';

const DetailsCard: React.FC<any> = ({ weatherDetails }) => {
    const { name, dt, main, sys, } = weatherDetails;

    const toCelsius = (value: number): string => {
        return (value - 273.15).toString().slice(0,3)
    };

    return (
        <div className='details-container'>
            <div className='name'>
                {name}
            </div>
            <div>
                {new Date(dt * 1000).toString().substring(15, 25)}
            </div>
            <div>
                
            </div>
            <div style={{ 
                    marginTop: "20px", 
                    display: "flex", 
                    justifyContent: "center", 
                    gap: "5px", 
                    alignItems: "center",
                    flexDirection: "column",
                    width: "10vw",
                    height: "15vh",
                    boxShadow: "5px 5px 2px 1px rgba(0, 0, 255, .2)",
                    borderRadius: "10px"
                }}>
                <div>
                    <img src={tempImg} alt="tempImg" width="30px" height="30px" />
                </div>
                <div>
                    temperature: {toCelsius(main.temp)} °C
                </div>
                <div>
                    fells like {toCelsius(main.feels_like)} °C
                </div>
            </div>
            <div style={{ 
                marginTop: "20px", 
                display: "flex", 
                width: "10vw",
                height: "15vh",
                justifyContent: "center", 
                gap: "5px", 
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "5px 5px 2px 1px rgba(0, 0, 255, .2)",
                borderRadius: "10px"
                }}>
                <div>
                    <img src={sunImg} alt="tempImg" width="30px" height="30px" />
                </div>
                <div>
                    sunset: {new Date(sys.sunset * 1000).toString().substring(15, 25)}
                </div>
                <div>
                    sunrise {new Date(sys.sunrise * 1000).toString().substring(15, 25)}
                </div>
            </div>
        </div>

    );
};

export default DetailsCard;