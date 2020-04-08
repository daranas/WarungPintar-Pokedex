import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import PokeGrid from '../../components/PokeCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      length: 12,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchPokemonData();
  }

  fetchMoreData = () => {
    const sumLength = this.state.pokemons.length + this.state.length;
    this.setState({ loading: <h4>Loading...</h4> });
    this.fetchPokemonData(sumLength);
  }

  fetchPokemonData = async (offset) => {
    const setOffset = offset ? offset : 0;
    let regexPat = /\/pokemon\/(\d+)\//;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${this.state.length}&offset=${setOffset}`
    );

    let pokemon = res.data.results;
    pokemon.map(pokemon => {
      let id = pokemon.url.match(regexPat)[1];
      return (pokemon["id"] = id);
    });

    if (offset) {
      this.setState({ pokemons: this.state.pokemons.concat(pokemon) });
    } else {
      this.setState({ pokemons: pokemon });
    }
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.pokemons.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={this.state.loading}
          endMessage={<p>Yay! You have seen it all</p>}
          style={{ overflow: 'inherit' }}
        >
        <PokeGrid pokemonData={pokemons} />
      </InfiniteScroll>
      </div>
    )
  }
}

export default HomePage