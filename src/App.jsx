import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Pokemon from "./Components/Pokemon";
import { Col, Container, Row } from "react-bootstrap";
import PokemonCard from "./Components/PokemonCard";
import { useState } from "react";

function App() {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState("");

  const handlePokemonClick = (url) => {
    setSelectedPokemonUrl(url);
    console.log(url);
  };
  return (
    <div className="App">
      <h2 className="text-center text-white my-3">Pokedex</h2>
      <Container>
        <Row>
          <Col xs={6} md={8} lg={9}>
            <Pokemon handlePokemonClick={handlePokemonClick} clap={"pokedex"} />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <PokemonCard selectedPokemonUrl={selectedPokemonUrl} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
