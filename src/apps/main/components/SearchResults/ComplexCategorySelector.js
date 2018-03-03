/* @flow */

import React, { Component } from "react";
import { CATEGORIES_COLORS, CATEGORIES_LABELS } from "../../lib/consts";
import PropTypes from "prop-types";

import {
  generateSearchURL
} from "../../lib/utils";

import _ from "lodash";

export default class ComplexCategorySelector extends Component {
  static PropTypes = {
    termFilter: PropTypes.Array,
    categoriesFilter: PropTypes.Array,
    fetchClubSearchResults: PropTypes.func,
    selectorAction: PropTypes.func,
    selectorReducer: PropTypes.Array,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }
  }
  
  // couple more things.
  // if "by concentration/major" isn't selected, nothing in its array should be shown or selected either.
  
  toggleSelected = (e) => {
    const selectedCat = e.target.value;
    let newSelected = this.state.selected;
    let newCategories;
    
    console.log("selectedCat", selectedCat);
    // figure out what to do with other non-categories.
        
    // if we find selectedCat within our selected array, remove it
    // else add it
    if (newSelected.find((element) => {return element == selectedCat})) {
      newSelected = _.pull(newSelected, selectedCat);
      newCategories = _.uniq(_.without(this.props.selectorReducer, selectedCat))

      this.props.setCategoryFilter(newCategories);
    }
    else {
      newCategories = _.uniq(_.concat(this.props.selectorReducer, selectedCat))

      this.props.setCategoryFilter(newCategories);

      newSelected.push(e.target.value);
    }
    
    this.setState({
      selected: newSelected
    });    
        
    this.props.setLoading(true);
    // this.props.fetchClubSearchResults(query);
  }
  
  render() { 
    const generatedButtons = [];
    let colorCount = 0;
        
    const LIGHT_GRAY = "#ebebeb";
    const DARK_GRAY = "#d6d6d6";
    
    for (let key in CATEGORIES_LABELS) {
      let grayCount = 0;
      generatedButtons.push((
        <button 
          onClick={this.toggleSelected}
          className={
            _.includes(
              this.state.selected, 
              key) ?
              "searchresults-cat-header-selected searchresults-cat-header" :
              "searchresults-cat-header"}
          style={{
            backgroundColor: CATEGORIES_COLORS[colorCount]
          }}
          value={key}
          key={key}
        >{key}</button>
      ));
      // first, we should only generate subcategories if the color labels have been clicked.
      if (_.includes(this.state.selected, key)) {

        for (let key2 in CATEGORIES_LABELS[key]) {
          // if there are subcategories,
          // they may be either keys in a dict or entries in an array
          if (CATEGORIES_LABELS[key][key2].length) {
              generatedButtons.push((
                <button 
                  onClick={this.toggleSelected}
                  className={(
                    _.includes(
                      this.state.selected, 
                      Array.isArray(CATEGORIES_LABELS[key]) ? CATEGORIES_LABELS[key][key2] : key2)) ?
                      "searchresults-cat-details-selected searchresults-cat-details" :
                      "searchresults-cat-details"
                    }
                  style={{
                    backgroundColor: (grayCount % 2) ? DARK_GRAY : LIGHT_GRAY,
                  }}
                  value={Array.isArray(CATEGORIES_LABELS[key]) ? CATEGORIES_LABELS[key][key2] : key2}
                >
                {(Array.isArray(CATEGORIES_LABELS[key][key2]) && CATEGORIES_LABELS[key][key2].length) ?
                  "+    " : ""
                }{Array.isArray(CATEGORIES_LABELS[key]) ? CATEGORIES_LABELS[key][key2] : key2}

                </button>
              ));
              grayCount++;
              
              // THIRD layer of labels
              // if the subcategories have more subcategories...
              // we are essentially checking to see if there are more subcategories
              
              // first, we need to check if this subcategory has been selected at all
              if (_.includes(this.state.selected, key2)) {
                if (Array.isArray(CATEGORIES_LABELS[key][key2]) && CATEGORIES_LABELS[key][key2].length) {
                  for (let key3 in CATEGORIES_LABELS[key][key2]) {
                    generatedButtons.push((
                      <button 
                        onClick={this.toggleSelected}
                        value={CATEGORIES_LABELS[key][key2][key3]}
                        className={(
                          _.includes(
                            this.state.selected, 
                            CATEGORIES_LABELS[key][key2][key3]) ?
                            "searchresults-cat-details-selected searchresults-cat-details searchresults-cat-details-subsub" :
                            "searchresults-cat-details searchresults-cat-details-subsub")
                          }
                        style={{
                          backgroundColor: (grayCount % 2) ? DARK_GRAY : LIGHT_GRAY
                        }}
                      >&nbsp;&nbsp;>&nbsp;&nbsp;{CATEGORIES_LABELS[key][key2][key3]}</button>
                    ));
                    grayCount++;
                  }
              }
              
            
            }
          }
          else { // no subcategories
            generatedButtons.push((
              <button 
                onClick={this.toggleSelected}
                className={
                  _.includes(
                    this.state.selected, 
                    key2) ?
                    "searchresults-cat-details-selected searchresults-cat-details" :
                    "searchresults-cat-details"
                  }
                  
                style={{
                  backgroundColor: (grayCount % 2) ? DARK_GRAY : LIGHT_GRAY
                }}
                value={key2}
              >{key2}</button>
            ));
            grayCount++;
          }
        }
      }
      colorCount++;
    }
    return (
      <div>
        { generatedButtons }
      </div>
    );
  }
}
