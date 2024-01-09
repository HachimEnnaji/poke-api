import { Component } from "react";
import { Card } from "react-bootstrap";

class PokemonCard extends Component {
  state = {
    pokemons: {},
    hasFetched: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedPokemonUrl !== this.props.selectedPokemonUrl) {
      this.fetchPokemons();
      console.log("Prop diversa ==> nuova fetch");
    } else {
      console.log("Prop non è cambiata ==> no fetch");
    }
  }

  fetchPokemons = async () => {
    try {
      const resp = await fetch(this.props.selectedPokemonUrl);
      console.log(this.props.selectedPokemonUrl);
      if (resp.ok) {
        const data = await resp.json();
        this.setState({ pokemons: data, hasFetched: true });
      }
    } catch (error) {
      console.error("Errore durante il recupero dei dati dei Pokémon", error);
    }
  };
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={
            this.state.hasFetched
              ? this.state.pokemons.sprites?.other?.dream_world?.front_default
              : "https://placehold.co/600x400"
          }
        />
        <Card.Body>
          <Card.Title className="text-uppercase">{this.state.pokemons?.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default PokemonCard;
