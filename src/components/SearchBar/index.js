import React, { Component } from 'react';
import _ from 'lodash';
import axios from "axios";
import { Search } from 'semantic-ui-react';
// css
import './index.css'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      pokemons: [],
      results: [],
      value: ''
    };
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.pokemons, isMatch),
      })
    }, 300)
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = async () => {
    this.setState({ pokemons: [] });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=2000`
    );
    let pokemon = res.data.results;
    let setPokemon = []
    pokemon.map(pokemon => {
      let pokemonData = {
        title: pokemon.name
      }
      return setPokemon.push(pokemonData);
    });
    this.setState({ pokemons: setPokemon });
  };

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        aligned='right'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        {...this.props}
        placeholder="Search Pokemon..."
      />
    )
  }
}

export default SearchBar