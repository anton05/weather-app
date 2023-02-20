import './DetailsCard.css';

const DetailsCard: React.FC<any> = ({ weatherDetails }) => {
    const { name, dt, main, sys, } = weatherDetails;

    const toCelsius = (value: number): string => {
        return (value - 273.15).toString().slice(0,3)
    };

    return (
        <div className='details-container'>
            <div className=''>
                {name}
            </div>
            <div>
                {new Date(dt * 1000).toString().substring(15, 25)}
            </div>
            <div style={{ 
                    marginTop: "20px", 
                    display: "flex", 
                    justifyContent: "center", 
                    gap: "5px", 
                    alignItems: "center",
                    flexDirection: "column" 
                }}>
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
                justifyContent: "center", 
                gap: "5px", 
                alignItems: "center",
                flexDirection: "column" 
                }}>
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