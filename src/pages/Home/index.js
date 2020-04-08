import React, { Component } from "react";
import axios from "axios";
import PokeGrid from '../../components/PokeCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
      pokemons: []
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = async () => {
    let offsetNum = 0;
    let regexPat = /\/pokemon\/(\d+)\//;
    this.setState({ sorted: false, pokemons: [] });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=28&offset=${offsetNum}`
    );
    let pokemon = res.data.results;
    pokemon.map(pokemon => {
      let id = pokemon.url.match(regexPat)[1];
      return (pokemon["id"] = id);
    });
    this.setState({ pokemons: pokemon, sorted: true });
  };

  render() {
    const { pokemons } = this.state;

    return (
      <div>
        <PokeGrid pokemonData={pokemons} />
      </div>
    )
  }
}

export default HomePage