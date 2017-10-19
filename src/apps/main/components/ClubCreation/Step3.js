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
import {
  toggleVibeFilterCC,
  uploadClubLogo,
  uploadClubCover,
  updateQuestion
 } from "../../actions/clubCreationActions";

import { VIBES } from "../../lib/consts";
import { PERSONALITY, FACTS } from "../../lib/clubAddQuestions";

//NOTE: vibefilter reducer needs to be called something different or something lol

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vibesFilter: [],
      clubLogo: Object,
      clubCover: Object
    };
  }

  uploadWidgetLogo = () => {
   cloudinary.openUploadWidget({
     cloud_name: 'dpjydbpir',
     upload_preset: 'r504fsmj',
     tags:['clubLogo']},
     (error, result) => {
       console.log(result);
       this.props.uploadClubLogo(result[0]);
     }).bind(this);
   }

   uploadWidgetCover = () => {
    cloudinary.openUploadWidget({
      cloud_name: 'dpjydbpir',
      upload_preset: 'c6iq7s0e',
      tags:['clubCovers']},
      (error, result) => {
        console.log(result);
        this.props.uploadClubCover(result[0]);
      }).bind(this);
  }

  updateQuestion = (e) => {
    console.log("does this get fired at all");
    const thisQuestion = this.props.q;
    if (this.state.active) {
      let tempQ = _.cloneDeep(this.props.questions);
      console.log("tempQ is", tempQ);
      tempQ[thisQuestion] = {
        answer: e.target.value,
        active: true
      };
      this.props.updateQuestion(tempQ);
    }
    else {
      console.log("not active :()");
      let tempQ = _.cloneDeep(this.props.questions, this.props.question);
      delete tempQ[this.props.question];
      if (!tempQ) {
        tempQ = {};
      }
      this.props.updateQuestion(tempQ);
    }
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
          <span className="clubcreation-question">Deck out your club profile!  It'll make your club more appealing and easier to find.</span>

          <div className="clubcreation-upload">
            <img
              src={this.props.newClub.clubLogo} /><br />
            <span className="clubcreation-upload-text">Upload Club Logo</span><br/>
            <Button
              onClick={this.uploadWidgetLogo}
              className="btn clubcreation-upload-btn">Upload</Button><br />
          </div>

          <div className="clubcreation-upload">
            <img src={this.props.newClub.clubCover} /><br/>
            <span className="clubcreation-upload-text">Upload Club Cover</span><br/>
            <Button
              onClick={this.uploadWidgetCover}
              className="btn clubcreation-upload-btn">Upload</Button><br />
          </div>

        </div>
        <div className="mild-shadow clubcreation-process-section">
          <span className="clubcreation-question">Additional info</span>
          Here are some questions that are <strong>optional</strong> to fill out.  They would be great for potential club members to know about, though!  You can begin typing in your answers, and the questions that aren't grayed out will be put on your club profile.<br/>
          <span className="clubcreation-sub">Personality</span>
          { PERSONALITY.map((q, index) => {
            return (
              <QuestionUnit
                update={this.updateQuestion}
                question={q}
                questions={this.props.newClub.questions} />
            )
          }) }
          <span className="clubcreation-sub">Facts</span>
          { FACTS.map((q, index) => {
            return (
              <QuestionUnit
                question={q}
                questions={this.props.newClub.questions}
                update={this.updateQuestion} />
            )
          }) }
        </div>
      </div>

    );
  }
}

export default connect(
  state => ({
    vibesFilterCC: state.clubCreationReducer.vibesFilterCC,
    newClub: state.clubCreationReducer.newClub
  }),
  dispatch =>
    bindActionCreators(
      {
        toggleVibeFilterCC,
        uploadClubLogo,
        uploadClubCover,
        updateQuestion
      },
      dispatch
    )
)(Step3);
