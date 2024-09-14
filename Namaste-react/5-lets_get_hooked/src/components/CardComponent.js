import { CLOUDINARY_URL } from "../utils/constants";

export const CardComponent = (props) => {

    // console.log(props);
    const { cloudinaryImageId, name, rating, cusine, delivery_time } = props;
    
    return (
      <div className="card-container">
        <div className="card-image">
          <img src={CLOUDINARY_URL +  cloudinaryImageId} />
        </div>
        <h3>{name}</h3>
        <h5>{rating}</h5>
        <div>{cusine.join(", ")}</div>
        <div style={{ fontSize:"18px", color:"red"}}>{delivery_time + " minutes"}</div>
      </div>
    )
  }