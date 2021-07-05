import { useEffect, useState } from "react";
import CardsSet from "./cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import { getCurrentCards, randomiseCardsList } from "./helpers";

import { CURRENT_CARDS_AMOUNT } from "../../constants/cardsAmount";
import UserSeedInput from "./userSeedInput/UserSeedInput";
import Button from "../common/Button/Button";
import { BACK, NEXT } from "../common/Button/constants";

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
  const [isBackButtonDisabled, setBackButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setCurrentCardsSet(randomisedList, currentCardIndex);
  }, [currentCardIndex]);

  useEffect(() => {
    currentRound < 2
      ? setBackButtonDisabled(true)
      : setBackButtonDisabled(false);
  }, [currentRound]);

  const setCurrentCardsSet = (
    cardsList: Card[],
    index: number,
    cardsAmount: number = CURRENT_CARDS_AMOUNT
  ): void => {
    if (index < randomisedList.length) {
      setCurrentCardsValues(
        getCurrentCards(cardsList, currentCardIndex, cardsAmount)
      );

      return;
    }
    setUserSeed(userSeed + "la123");
    const newUserSeed = userSeed + "la123";
    const newRandomisedList = [
      ...randomisedList,
      ...randomiseCardsList(newUserSeed),
    ];
    setRandomisedList(newRandomisedList);

    setCurrentCardsValues(getCurrentCards(newRandomisedList, currentCardIndex));
    console.log(currentCardsValues);
  };

  const handleChangeUserSeed = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserSeed(event.target.value);
  };

  const handleSeedSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    setShouldRandomiseCards(true);
    const newRandomisedList = randomiseCardsList(userSeed);
    setRandomisedList(newRandomisedList);

    setCurrentCardsSet(newRandomisedList, currentCardIndex);
  };

  const handleNextClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setCurrentCardIndex(currentCardIndex + 3);
    setCurrentCardsSet(randomisedList, currentCardIndex);
    setCurrentRound(currentRound + 1);
  };

  const handleBackClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    if (currentRound > 1) {
      setBackButtonDisabled(false);
      setCurrentCardIndex(currentCardIndex - 3);
      setCurrentCardsSet(randomisedList, currentCardIndex);
      setCurrentRound(currentRound - 1);
    } else {
      setBackButtonDisabled(true);
    }
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
          <h2>{`Round: ${currentRound}`}</h2>
          <CardsSet currentCards={currentCardsValues} />
          <div>
            <Button
              className={styles.buttonBack}
              disabled={isBackButtonDisabled}
              onClick={handleBackClick}
            >
              {BACK}
            </Button>
            <Button
              className={styles.button}
              disabled={false}
              onClick={handleNextClick}
            >
              {NEXT}
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
