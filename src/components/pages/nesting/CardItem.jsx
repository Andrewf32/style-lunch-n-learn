import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../../helpers/icons";

const CardItem = ({ data, image }) => {
  return (
    <div className="card-item-container">
      <img src={image} alt="random" />

      <div className="right-column">
        <h2 className="title">{data.name}</h2>

        <div className="description">{data.description}</div>

        <div className="icons-wrapper">
          {icons.map((icon) => (
            <FontAwesomeIcon icon={`fa-solid ${icon}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
