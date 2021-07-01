import { cleanup, render } from "@testing-library/react";
import HomePage from "./HomePage";

afterEach(cleanup);

it("Should render Welcome to my street", () => {
  const { getByText } = render(<HomePage />);
  getByText("Welcome to my street");
});

it("Should render Next button", () => {
  const { getByText } = render(<HomePage />);
  getByText("NEXT");
});
