import React from "react";
import { render } from "@testing-library/react";
import { Profile } from "../../components";

describe("<Profile />", () => {
  it("renders the <Profile /> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User onClick={() => {}}>
            <Profile.Picture
              src="/images/karl.png"
              data-testid="profile-picture"
            />
            <Profile.Name>Omar</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Omar"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Profile /> with populated data but misc profile image", () => {
    const { container, getByText, getByTestId } = render(
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User onClick={() => {}}>
            <Profile.Picture data-testid="profile-picture-misc" />
            <Profile.Name>Omar</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText("Omar"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
