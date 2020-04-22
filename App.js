import React, { Component } from "react";
import Program from "./program";
import Formular from "./formular";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activitati: [
        {
          id: 1,
          ora: "10:00",
          titlu: "Întâlnire cu presa",
          loc: "Sala G114",
          descriere: "Nu este cazul"
        },
        {
          id: 2,
          ora: "10:30",
          titlu: "Pauză de cafea",
          loc: "Birou",
          descriere: "Se dezbat diverse."
        },
        {
          id: 3,
          ora: "12:00",
          titlu: "Pregătire curs",
          loc: "Birou",
          descriere: "Pregătirea exemplelor."
        }
      ]
    };

    this.adaugActivitate = this.adaugActivitate.bind(this);
    this.stergeActivitate = this.stergeActivitate.bind(this);
  }

  adaugActivitate(act) {
    const { activitati } = this.state;
    var sirAct = activitati;
    sirAct.push({
      id: sirAct.length ? sirAct[sirAct.length - 1].id + 1 : 1,
      ora: act.ora,
      titlu: act.titlu,
      loc: act.loc,
      descriere: act.descriere
    });
    this.setState({ activitati: sirAct });
  }

  stergeActivitate(ev) {
    const idSup = parseInt(ev.target.id); //  id e convertit in intreg
    const { activitati } = this.state;
    const sirAct = activitati.filter(item => {
      return item.id !== idSup;
    });
    this.setState({ activitati: sirAct });
  }

  render() {
    return (
      <div className="container">
        <Program
          activitati={this.state.activitati}
          stergeActivitate={this.stergeActivitate}
        />
        <Formular adaugActivitate={this.adaugActivitate} />
      </div>
    );
  }
}

export default App;
