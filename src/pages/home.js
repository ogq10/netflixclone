import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { OptForm } from "../components";
import JumbotronContainer from "../containers/jumbotron";
import Feature from "../components/feature";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at anytime.
          </Feature.SubTitle>

          <OptForm>
            <OptForm>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Try it now</OptForm.Button>

              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Text>
            </OptForm>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
