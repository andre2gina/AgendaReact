import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

class Formular extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      ora: "",
      titlu: "",
      loc: "",
      descriere: "",
      id: 0
    };

    //  Initializez obiectul "state"
    this.state = this.initialState;

    //  Functii de tratare a evenimentelor "change" si "submit"
    this.handleChange = this.handleChange.bind(this);
    this.adaugaActivitate = this.adaugaActivitate.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;

    this.setState({
      [name]: value
    });
  }

  adaugaActivitate() {
    this.props.adaugActivitate(this.state);
    this.setState(this.initialState); // Golesc formularul
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Introduceți activitatea</h2>
        <form className="mx-3 grey-text">
          <MDBInput
            name="ora"
            label="Ora"
            icon="clock"
            hint="12:30"
            group
            type="text"
            value={this.state.ora}
            onChange={this.handleChange}
          />
          <MDBInput
            name="titlu"
            label="Titlu"
            icon="edit"
            hint="Întâlnire"
            group
            type="text"
            value={this.state.titlu}
            onChange={this.handleChange}
          />
          <MDBInput
            name="loc"
            label="Loc (opțional)"
            icon="map"
            group
            type="text"
            value={this.state.loc}
            onChange={this.handleChange}
          />
          <MDBInput
            name="descriere"
            label="Descriere (opțional)"
            icon="sticky-note"
            group
            type="textarea"
            value={this.state.descriere}
            onChange={this.handleChange}
          />
          <div className="text-center">
            <MDBBtn color="indigo" onClick={this.adaugaActivitate}>
              Adaugă activitate
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default Formular;
