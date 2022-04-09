import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SelectProfileContainer } from '../../containers/profile';

jest.mock("react-router-dom");

describe("<Profile />", () => {
  it("renders the <Profile />", () => {
    const user = { displayName: "Omar", photoURL: "profile.png" };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId("user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
