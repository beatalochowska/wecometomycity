import React from "react";
import { cleanup, render } from "@testing-library/react";
import SingleCard from "./SingleCard";

afterEach(cleanup);

function renderCard(args: { name: string; number: number }) {
  const defaultProps = { name: "nothing", number: 2 };
  const props = { ...defaultProps, ...args };

  return render(<SingleCard {...props} />);
}

it("Should render action card", () => {
  const { getByText } = renderCard({ name: "ActionCard", number: 2 });
  getByText("ActionCard");
});
