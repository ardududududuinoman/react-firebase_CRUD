import { render, screen } from "@testing-library/react";
import Create from "./Create";

test("renders learn react link", () => {
  render(<Create />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
