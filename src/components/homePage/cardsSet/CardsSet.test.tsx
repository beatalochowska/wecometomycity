import { cleanup, render } from "@testing-library/react";
import CardsSet from "./CardsSet";

afterEach(cleanup);

function renderCardSet(args: string[] | number[]) {
  const defaultProps = {
    data: [],
  };

  const props = { ...defaultProps, ...args };

  return render(<CardsSet {...props} />);
}

it("Should render card set with las, las, las", () => {
  const { findByText } = renderCardSet(["las", "las", "las"]);
  findByText("las");
});
