import React, { Component } from "react";
import data from "./data";
class Notes extends Component {
  constructor() {
    super();
    this.state = { id: null };
  }

  handleClick(id) {
    if (this.state.id === id) {

      this.setState({ id: null })
    } else {
      this.setState({ id: id })

    }
  }

  render() {
    return (
      <div className="notes">
        <h1>Notes</h1>

        {data.map((elem, i) => {
          return (
            <div key={i}>
              <div style={{ margin: "20px 0" }}>
                <h2 onClick={() => this.handleClick(elem.id)}>
                  {i + 1}. {elem.question}
                </h2>

                {this.state.id === elem.id && <p>{elem.answer}</p>}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Notes;
