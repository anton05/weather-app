export type HourlyTemperatureType = {
    time: number,
    temperature: number
}
    
const HourlyTemperature: React.FC<any> = ({ hourlyDeatails }) => {

    return (
        <div style={{ display: "flex", height: "50px", alignItems: "flex-end", gap: "1px" }}>
            {
                hourlyDeatails?.map((i: HourlyTemperatureType) => (
                        <div style={{ textAlign: "center" }}>
                            {i.time}:00
                            <div style={{ 
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid #c3c3c3", 
                                background: "#dedede",
                                width: "60px",
                                height: "30px",
                                marginBottom: `${i.temperature}px`
                            }}>
                                {i.temperature}°C
                            </div>
                        </div>
                ))
            }
        </div>

    );
};

export default HourlyTemperature;