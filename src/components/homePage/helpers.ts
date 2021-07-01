import { SingleFeature } from "../../tools/featureInterface";
import { SingleNumber } from "../../tools/numberInterface";
import Chance from "chance";
import { Card } from "./HomePage";
import { CURRENT_CARDS_AMOUNT } from "../../constants/cardsAmount";
import features from "../../tools/features.json";
import numbers from "../../tools/numbers.json";

export const getListOFNumbersFeaturesWithSortedIds = (
  randomisedFeatures: SingleFeature[],
  randomisedNumbers: SingleNumber[]
): (SingleNumber & SingleFeature)[] => {
  const featuresAndNumbersList = randomisedNumbers.map(
    (el: SingleNumber, i: number) =>
      Object.assign({}, el, randomisedFeatures[i], { id: i })
  );

  return featuresAndNumbersList;
};

export const getRandomisedList = <T = unknown>(
  arr: T[],
  userSeed: string
): T[] => {
  const randomRate = new Chance(userSeed);

  return randomRate.shuffle(arr);
};

export const getCurrentCards = (
  cardsList: Card[],
  index: number,
  cardsAmount: number = CURRENT_CARDS_AMOUNT
): Card[] => {
  const currentCards = [];
  for (let i = index; i < index + cardsAmount; i++) {
    currentCards.push(cardsList[i]);
  }

  return currentCards;
};

export const randomiseCardsList = (seed: string): Card[] => {
  return getListOFNumbersFeaturesWithSortedIds(
    getRandomisedList([...features], seed),
    getRandomisedList([...numbers], seed.split("").reverse().join(""))
  );
};
