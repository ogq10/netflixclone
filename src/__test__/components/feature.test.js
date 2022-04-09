import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature/>", () => {
  it("renders the <Feature/> with populated data", () => {
    const { container } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>
          Watch anywhere. Cancel at any time.
        </Feature.SubTitle>
      </Feature>
    );

    expect(screen.getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(screen.getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});
});
