import { createCardStyle, renderIcon } from "./helpers";
import styles from "./SingleCard.module.scss";

interface SingleCardProps {
  name: string;
  number: number;
}

export default function SingleCard(props: SingleCardProps): JSX.Element {
  return (
    <div className={createCardStyle(props.name, styles.card)}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardText}>{props.number}</h2>
        <div className={styles.cardText}>{renderIcon(props.name)}</div>
      </div>
    </div>
  );
}
