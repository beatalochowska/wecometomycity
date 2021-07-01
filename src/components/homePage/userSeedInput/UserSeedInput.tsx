interface UserSeedInputProps {
  onSubmit: (event: any) => void;
  userInput: string;
  onUserInputChange: (event: any) => void;
}

export default function UserSeedInput(props: UserSeedInputProps): JSX.Element {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.userInput}
        onChange={props.onUserInputChange}
      />
      <input type="submit" value="Generuj karty" />
    </form>
  );
}
