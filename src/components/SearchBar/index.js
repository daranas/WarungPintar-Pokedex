import React, { Component } from 'react';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import API from '../../helpers/API'
// css
import './index.css'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      pokemons: [],
      results: [],
      value: '',
      redirect: false
    };
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    this.setState({ redirect: 'detail/' + result.title })
  }

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

    const res = await API.get(`/pokemon/?limit=2000`);
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    
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