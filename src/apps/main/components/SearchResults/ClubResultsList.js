/* @flow */

import React, { Component } from "react";

export default class ClubResultsList extends Component {
  render() {
    const clubRows = this.props.searchResults.map((club, idx) => (
      <tr key={idx} /*onClick={() => this.props.onFoodClick(food)}*/>
        <td>{club.clubName}</td>
        <td className="right aligned">{club.description}</td>
      </tr>
    ));
    return (
      <div>
        <h3>
          Displaying results for: {this.props.term}
        </h3>
        <p>
          {clubRows}
        </p>
      </div >
    );
  }
}
