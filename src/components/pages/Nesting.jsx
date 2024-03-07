import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardItem from "./nesting/CardItem";
import { images } from "../../helpers/images";
import { userData } from "../../helpers/mockData";

const Nesting = () => {
  const renderOffice = () => {
    return userData.map((user) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];

      return <CardItem key={user.id} data={user} image={randomImage} />;
    });
  };

  return (
    <div className="nesting-container">
      <h1>Office Members</h1>

      <div className="cards-wrapper">{renderOffice()}</div>

      <div className="position-wrapper">
        <FontAwesomeIcon icon="fa-solid fa-circle-question" />

        <div className="text">Can you hide me until needed?</div>
      </div>
    </div>
  );
};

export default Nesting;
