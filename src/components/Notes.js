import React, { Component } from "react";
import data from "./data";
console.log(data);
class Notes extends Component {
  constructor() {
    super();
    this.state = { isToggle: "ok" };
  }

  handleClick(id) {
    const t = data.findIndex((e) => e.id === id);
    this.setState({ isToggle: "test" });
    if (data[t].toggler === true) {
      data[t].toggler = false;
    } else {
      data[t].toggler = true;
    }
  }

  render() {
    return (
      <div className="notes">
        <h1>Notes {this.state.isToggle}</h1>

        {data.map((elem, i) => {
          return (
            <div key={i}>
              <div style={{ margin: "20px 0" }}>
                <h2 onClick={() => this.handleClick(elem.id)}>
                  {i + 1}. {elem.question}
                </h2>

                {elem.toggler ? (
                  <p style={{ marginLeft: "27px", marginTop: "10px" }}>
                    {elem.answer}
                  </p>
                ) : (
                  ""
                )}
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
