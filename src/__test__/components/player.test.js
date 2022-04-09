import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Player from "../../components/player";

describe("<Player/>", () => {
  it("renders the Player component with a warner bros intro video", () => {
    const { container, getByText, queryByTestId, debug } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/warner.mp4" />
      </Player>
    );

    expect(queryByTestId("player")).toBeFalsy();
    fireEvent.click(getByText("Play"));

    expect(queryByTestId("player")).toBeTruthy();
    fireEvent.click(queryByTestId("player"));

    expect(queryByTestId("player")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
