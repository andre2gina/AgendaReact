import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
class Activitate extends Component {
  render() {
    return (
      <>
        <h4>
          {this.props.ora} - {this.props.titlu}
        </h4>
        <h6>
          Loc: {this.props.loc}
          <MDBBtn
            color="indigo"
            className="float-right"
            id={this.props.id}
            onClick={this.props.stergeActivitate}
          >
            Șterge
          </MDBBtn>
        </h6>
        <p>Descriere: {this.props.descriere}</p>
        <hr />
      </>
    );
  }
}

export default Activitate;
