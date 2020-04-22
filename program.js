import React, { Component } from "react";
import Activitate from "./activitate";

class Program extends Component {
  render() {
    const lista = this.props.activitati.map(item => (
      <Activitate
        key={item.id}
        id={item.id}
        ora={item.ora}
        loc={item.loc}
        titlu={item.titlu}
        descriere={item.descriere}
        stergeActivitate={this.props.stergeActivitate}
      />
    ));
    return (
      <div>
        <h2 className="text-center">Agenda zilei</h2>
        <hr />
        {lista}
      </div>
    );
  }
}

export default Program;
