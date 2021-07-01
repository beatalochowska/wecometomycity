import { useState } from "react";
import CardsSet from "./cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import { getCurrentCards, randomiseCardsList } from "./helpers";

import { CURRENT_CARDS_AMOUNT } from "../../constants/cardsAmount";
import UserSeedInput from "./userSeedInput/UserSeedInput";

export interface Card {
  number: number;
  name: string;
  id: number;
}

export default function HomePage(): JSX.Element {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [currentCardsValues, setCurrentCardsValues] = useState<Card[]>([]);
  const [userSeed, setUserSeed] = useState<string>("");
  const [shouldShowCards, setShouldRandomiseCards] = useState<boolean>(false);
  const [randomisedList, setRandomisedList] = useState<Card[]>(
    randomiseCardsList(userSeed)
  );
  const [currentRound, setCurrentRound] = useState<number>(1);

  const setCurrentCardsSet = (
    cardsList: Card[],
    index: number,
    cardsAmount: number = CURRENT_CARDS_AMOUNT
  ): void => {
    const newIndex = index + cardsAmount;
    if (newIndex < randomisedList.length) {
      setCurrentCardIndex(newIndex);
      setCurrentCardsValues(
        getCurrentCards(cardsList, currentCardIndex, cardsAmount)
      );

      return;
    }
    setCurrentCardIndex(0);
    setUserSeed(userSeed + "la123");
    setRandomisedList(randomiseCardsList(userSeed));

    setCurrentCardsValues(getCurrentCards(cardsList, currentCardIndex));
  };

  const handleChangeUserSeed = (event: any): void => {
    setUserSeed(event.target.value);
  };

  const handleSeedSubmit = (event: any): void => {
    event.preventDefault();
    setShouldRandomiseCards(true);
    const newRandomisedList = randomiseCardsList(userSeed);
    setRandomisedList(newRandomisedList);

    setCurrentCardsSet(newRandomisedList, currentCardIndex);
  };

  const handleNextClick = (event: any): void => {
    event.preventDefault();

    setCurrentCardsSet(randomisedList, currentCardIndex);
    setCurrentRound(currentRound + 1);
  };

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>Welcome to my street</h1>

      {!shouldShowCards ? (
        <UserSeedInput
          onSubmit={handleSeedSubmit}
          userInput={userSeed}
          onUserInputChange={handleChangeUserSeed}
        />
      ) : (
        <>
          <h2>{`Runda: ${currentRound}`}</h2>
          <CardsSet currentCards={currentCardsValues} />
          <button className={styles.button} onClick={handleNextClick}>
            NEXT
          </button>
        </>
      )}
    </section>
  );
}
