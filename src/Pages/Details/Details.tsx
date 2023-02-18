import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const Details: React.FC = () => {
    return(
        <div style={{ 
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
         }}>
            <DetailsCard />    
        </div>
    );
};

export default Details;