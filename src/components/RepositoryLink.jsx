import React from "react";

//primjer s klasom. Moramo naslijediti React.Component zbog naslijedivanja metode
export class RepositoryLink extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

    render() {
      return (
        <a className="App-link" href="https://github.com/dstrekelj/algebra-example-react-app">
          {this.props.children}
        </a>
      );
    }
}


