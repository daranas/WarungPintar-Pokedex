import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import PokeGrid from '../../components/PokeCard';
import API from '../../helpers/API'

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

    let currentUrlParams = new URLSearchParams(window.location.search);
    let setParam = currentUrlParams.get("type");

    let res = await API.get(`/pokemon/?limit=${this.state.length}&offset=${setOffset}`);
    let pokemon = res.data.results;

    if (setParam) {
      pokemon = [];
      res =  await API.get(`/type/${setParam}/`);
      res.data.pokemon.map(setData => {
        let filterData = {
          name: setData.pokemon.name,
          url: setData.pokemon.url
        }
        pokemon.push(filterData)
      });
    }

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
    const { pokemons, loading } = this.state;

    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.pokemons.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={loading}
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