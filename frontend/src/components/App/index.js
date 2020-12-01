import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "../Filter";
import Currencies from "../Currencies";
import svg from "../../assets/logo.svg";
import fr from "../../assets/fr.png";
import en from "../../assets/uk.png";
import { Grommet, Button, Avatar } from "grommet";
import "./index.scss";
import { LOCALE_CHANGE } from "../../redux/locale/locale.types";

// Grommet Theme override
const theme = {
  global: {
    focus: {
      border: {
        color: undefined,
      },
    },
  },
  checkBox: {
    color: {
      light: "black",
    },
  },
};

class App extends Component {
  render() {
    return (
      <Grommet plain theme={theme} className="m-app">
        <div className="m-app__layout">
          <div className="m-app__layout__header">
            <img src={svg} alt="logo" />
            <Filter />
          </div>
          <Currencies />
        </div>
        <div className="m-app__locale">
          <Button
            round="full"
            plain={true}
            onClick={() => {
              this.props.localeChange(this.props.locale === "en" ? "fr" : "en");
            }}
          >
            {() => <Avatar src={this.props.locale === "en" ? fr : en} />}
          </Button>
        </div>
      </Grommet>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.locale.locale,
});

const mapDispatchToProps = (dispatch) => {
  return {
    localeChange: (locale) =>
      dispatch({
        type: LOCALE_CHANGE,
        payload: locale,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
