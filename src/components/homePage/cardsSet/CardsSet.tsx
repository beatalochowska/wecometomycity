import styles from "./CardsSet.module.scss";
import SingleCard from "../singleCard/SingleCard";
import { Card } from "../HomePage";

interface CardSetProps {
  currentCards: Card[];
}

export default function CardsSet(props: CardSetProps): JSX.Element {
  return (
    <section className={styles.cardsSet}>
      {props.currentCards.map((el: Card) => (
        <SingleCard name={el.name} number={el.number} key={el.id} />
      ))}
    </section>
  );
}
