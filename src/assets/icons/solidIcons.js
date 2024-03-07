import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEdit,
  faSpinner,
  faLock,
  faEye,
  faBars,
  faBuilding,
  faMagnifyingGlass,
  faStar,
  faPlay,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const solidIcons = () => {
  return library.add(
    faEdit,
    faSpinner,
    faLock,
    faEye,
    faBars,
    faBuilding,
    faMagnifyingGlass,
    faStar,
    faPlay,
    faCircleQuestion
  );
};

export default solidIcons;
