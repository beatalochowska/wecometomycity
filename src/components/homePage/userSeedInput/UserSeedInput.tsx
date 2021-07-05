import styles from "./UserSeedInput.module.scss";
import buttonStyle from "../../common/Button/Button.module.scss";

interface UserSeedInputProps {
  onSubmit: (event: React.SyntheticEvent) => void;
  userInput: string;
  onUserInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserSeedInput(props: UserSeedInputProps): JSX.Element {
  return (
    <form className={styles.userSeedForm} onSubmit={props.onSubmit}>
      <input
        className={styles.userSeedInput}
        type="text"
        placeholder="Your secret keyword"
        value={props.userInput}
        onChange={props.onUserInputChange}
      />
      <input
        className={buttonStyle.button}
        type="submit"
        value="Generuj karty"
      />
    </form>
  );
}
