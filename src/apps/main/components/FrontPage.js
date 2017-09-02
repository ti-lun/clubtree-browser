/* @flow */

import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import {
  Code,
  CustomerQuote,
  CustomerQuotes,
  DropdownMenu,
  DropdownToggle,
  Footer,
  FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList,
  ImageListItem,
  Navbar,
  NavItem,
  Page,
  PricingPlan,
  PricingTable,
  Section,
  SignupInline,
  SignupModal,
  Stripe,
  Team,
  TeamMember
} from "neal-react";
import { Row, Col } from "reactstrap";
import logo from "../assets/images/site-logo/entirelogo.png";
import desc1 from "../assets/images/homepage/milktea.jpg";
import desc2 from "../assets/images/homepage/crowd.jpg";
import desc3 from "../assets/images/homepage/updates.jpg";

const brandName = "SamplePage";
const brand = (
  <span>
    {brandName}
  </span>
);

const onSignup = ({ name: name, email: email, password: password }) =>
  Stripe.StripeHandler.open({
    name: "Stripe Integration Included",
    description: "Like this? Donate $5 <3",
    panelLabel: "Donate {{amount}}",
    email: email,
    amount: 500
  });

const businessAddress = (
  <address>
    <strong>{brandName}</strong>
    <br />
    1337 Market Street, Suite 1337<br />
    San Francisco, CA 94103<br />
    +1 (123) 456-7890
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description:
    "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false
  },
  onClick: onSignup
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true
  })
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true
  })
});

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          img: "../images/homepage/front.jpg",
          description: "asdfsdf"
        }
      ]
    };
  }
  render() {
    return (
      <Page>
        <Hero
          id="bootstrap-override-jumbotron"
          className="text-xs-center home-initial-picture background-cover-center front-splash nopad-bottom"
          style={{
            margin: "0 !important",
            border: 0,
            height: "100%"
          }}
        >
          <div id="text-center">
            <h1 className="front-splash-font" style={{ color: "#f7f6f6" }}>
              Find your Clubtree.
            </h1>
            <SearchBar searchBarStyleId="search" />
          </div>
        </Hero>

        <Section className="subhero home-intro">
          <Row>
            <Col style={{ verticalAlign: "middle" }}>
              <span id="intro-text" style={{ color: "white" }}>
                Clubtree is...
              </span>
            </Col>
            <Col>
              <p id="intro-text-per">your promo flyers.</p>
              <p id="intro-text-per">your club announcements.</p>
              <p id="intro-text-per">your members and officers.</p>
              <p id="intro-text-per">all in one place.</p>
            </Col>
          </Row>
        </Section>

        <Row style={{ height: "100%", margin: 0 }}>
          <Col id="bootstrap-override-pic" md={"4"} style={{ margin: 0 }}>
            <img src={desc1} className="img-responsive pic-sizes" />
          </Col>
          <Col id="bootstrap-override-pic" md={"4"} style={{ margin: 0 }}>
            <img src={desc2} className="img-responsive pic-sizes" />
          </Col>
          <Col id="bootstrap-override-pic" md={"4"} style={{ margin: 0 }}>
            <img src={desc3} className="img-responsive pic-sizes" />
          </Col>
        </Row>

        <Row style={{ height: "100%", display: "flex" }}>
          <Col
            className="home-perks-description-one"
            id="bootstrap-override-desc"
            style={{ color: "#f7f6f6" }}
          >
            Easily find free food and club fundraisers
          </Col>
          <Col
            className="home-perks-description-two"
            id="bootstrap-override-desc"
            style={{ color: "#f7f6f6" }}
          >
            Look for your type of crowd just a couple clicks away
          </Col>
          <Col
            className="home-perks-description-three"
            id="bootstrap-override-desc"
            style={{ color: "#f7f6f6" }}
          >
            Get instantly updated on your favorite clubs
          </Col>
        </Row>

        <Hero className="home-organizer-picture background-cover-center text-center">
          <h1 className="front-splash-font" style={{ color: "#f7f6f6" }}>
            Are you a club organizer?
          </h1>
        </Hero>

        <Section heading="Inline and Modal Signup components" className="gray">
          We appreciate your hard work in supporting the backbone of your
          university's culture. Now let's make your jobs easier.
        </Section>

        <Section>
          <PricingTable>
            <PricingPlan {...pricingPlan1} />
            <PricingPlan {...pricingPlan2} />
            <PricingPlan {...pricingPlan3} />
          </PricingTable>
        </Section>

        <Section />

        <Footer
          brandName={brandName}
          facebookUrl="http://www.facebook.com"
          twitterUrl="http://www.twitter.com/dennybritz"
          githubUrl="https://github.com/dennybritz/neal-react"
          address={businessAddress}
        />
      </Page>
    );
  }
}

export default FrontPage;
