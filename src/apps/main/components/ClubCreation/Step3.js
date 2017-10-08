/* @flow */

import _ from "lodash";
import axios from "axios";
import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Textarea from "react-textarea-autosize";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

import ColorfulSelector from "../ColorfulSelector";
import QuestionUnit from "../QuestionUnit";
import { toggleVibeFilter, toggleCategoryFilter } from "../../actions/searchResultsActions";
import { toggleVibeFilterCC } from "../../actions/clubCreationActions";

import { VIBES } from "../../lib/consts";
import { PERSONALITY, FACTS } from "../../lib/clubAddQuestions";

//NOTE: vibefilter reducer needs to be called something different or something lol

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vibesFilter: []
    };
  }

  uploadWidget() {
   cloudinary.openUploadWidget({
     cloud_name: 'dpjydbpir',
     upload_preset: 'splice',
     tags:['clubphotos']},
     (error, result) => {
       console.log(result);
     });
   }

  render () {
    return (
      <div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question">What kind of vibes does your club have?</span>
          <span className="clubcreation-sub">Select <strong>three</strong> vibes.  They don't have to be in the same category, and they also don't have to be from different categories..</span>
          <ColorfulSelector
            selectorAction={this.props.toggleVibeFilterCC}
            selectorReducer={this.props.vibesFilterCC}
            selectorKeys={VIBES}
            inline={true}
            categories={true}
            />
        </div>
        <div className="mild-shadow clubcreation-process-section">
          Uplaod photo shit<br/>
        <Button onClick={this.uploadWidget} className="btn">Upload</Button>
        </div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question">Additional info</span>
          Here are some questions that are <strong>optional</strong> to fill out.  They would be great for potential club members to know about, though!  You can begin typing in your answers, and the questions that aren't grayed out will be put on your club profile.<br/>
          <span className="clubcreation-sub">Personality</span>
          { PERSONALITY.map((q, index) => {
            return <QuestionUnit question={q}/>
          }) }
          <span className="clubcreation-sub">Facts</span>
          { FACTS.map((q, index) => {
            return <QuestionUnit question={q}/>
          }) }
        </div>
      </div>

    );
  }
}

export default connect(
  state => ({
    vibesFilterCC: state.clubCreationReducer.vibesFilterCC
  }),
  dispatch =>
    bindActionCreators(
      {
        toggleVibeFilterCC,
        toggleCategoryFilter
      },
      dispatch
    )
)(Step3);
