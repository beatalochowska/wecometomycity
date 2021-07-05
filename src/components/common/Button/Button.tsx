import React from "react";
import styles from "./Button.module.scss";
import { BACK } from "./constants";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  disabled: boolean;
  children: React.ReactNode;
  className: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={props.children === BACK ? styles.buttonBack : styles.button}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
