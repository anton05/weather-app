import SearchBar from "../../Components/SearchBar/SearchBar";
import WeatherCardContainer from "../../Components/WeatherCard/WeatherCardContainer";

const Main: React.FC = () => {
    return(
        <div style={{ 
         height: "100%", 
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         gap: "50px"
        }}>
            <SearchBar />
            <WeatherCardContainer />   
        </div>
    );
};

export default Main;