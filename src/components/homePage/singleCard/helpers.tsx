import * as feature from "../../../constants/features";
import styles from "./SingleCard.module.scss";
import {
  bisIcon,
  fenceIcon,
  parkIcon,
  poolIcon,
  stockIcon,
  workIcon,
} from "./icons";

export const createCardStyle = (name: string, elementStyle: string): string => {
  const style = elementStyle;
  switch (name) {
    case feature.STOCK:
      return `${style} ${styles.stock}`;
    case feature.WORK:
      return `${style} ${styles.work}`;
    case feature.FENCE:
      return `${style} ${styles.fence}`;
    case feature.PARK:
      return `${style} ${styles.park}`;
    case feature.POOL:
      return `${style} ${styles.pool}`;
    case feature.BIS:
      return `${style} ${styles.bis}`;
    default:
      return style;
  }
};

export const renderIcon = (name: string): JSX.Element => {
  switch (name) {
    case feature.STOCK:
      return stockIcon({ height: "120px" });
    case feature.WORK:
      return workIcon({ height: "120px" });
    case feature.FENCE:
      return fenceIcon({ height: "120px" });
    case feature.PARK:
      return parkIcon({ height: "120px" });
    case feature.POOL:
      return poolIcon({ height: "120px" });
    case feature.BIS:
      return bisIcon({ height: "120px" });
    default:
      return <div></div>;
  }
};
