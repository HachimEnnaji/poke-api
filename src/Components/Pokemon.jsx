import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";

class Pokemon extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    this.fetchPokemons();
  }
  //   handleClick = (url) => {
  //     this.setState({ url });
  //     console.log(url);
  //   };

  fetchPokemons = async () => {
    try {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
      if (resp.ok) {
        const data = await resp.json();
        // console.log("FETCH happened", data);
        this.setState({ pokemons: data.results });
        // console.log(data.results);
      }
    } catch (error) {
      console.error("Errore durante il recupero dei dati dei Pokémon", error);
    }
  };

  render() {
    return (
      <Row xs={1} md={3} lg={5} className="gy-3 justify-content-around">
        {this.state.pokemons.map((pokemon, index) => (
          <Card key={index} onClick={() => this.props.handlePokemonClick(pokemon.url)} className={this.props.clap}>
            <Card.Body>
              <Card.Title className="text-uppercase">{pokemon.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

export default Pokemon;
