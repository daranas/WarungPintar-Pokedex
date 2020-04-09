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
    console.log(this.props.location.search);
    
    this.fetchPokemonData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.fetchPokemonData();
    }
  }

  fetchMoreData = () => {
    const sumLength = this.state.pokemons.length + this.state.length;
    this.setState({ loading: <h4>Loading...</h4> });
    this.fetchPokemonData(sumLength);
  }

  fetchPokemonData = async (offset) => {
    let regexPat = /\/pokemon\/(\d+)\//;
    let res = await API.get(`/type/${this.props.match.params.name}`);
    let pokemon = [];
    
    res.data.pokemon.map(setData => {
      let id = setData.pokemon.url.match(regexPat)[1];
      let filterData = {
        id: id,
        name: setData.pokemon.name,
        url: setData.pokemon.url
      }
      return pokemon.push(filterData)
    });

    this.setState({ pokemons: pokemon });
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