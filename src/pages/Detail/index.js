import React, { Component } from "react";
import API from '../../helpers/API'
import { Card, Label, Image, Button } from 'semantic-ui-react'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        sprites: {
          front_default: ''
        },
        types: [
          {
            type: {
              name: ''
            }
          },
          {
            type: {
              name: ''
            }
          }
        ]
      }
    };

    this.fetchPokemonDetail = this.fetchPokemonDetail.bind(this)
  }

  componentDidMount() {
    this.fetchPokemonDetail();
  }

  fetchPokemonDetail = async (offset) => {
    const pokeName = this.props.match.params.name;
    const setLowerCase = pokeName.toLowerCase();

    let res = await API.get(`/pokemon/${setLowerCase}`);
    this.setState({ pokemon: res.data });
  }

  render() {
    const { pokemon } = this.state;
    return (
      <Card>
        <Image src={pokemon.sprites.front_default} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{pokemon.name}</Card.Header>
          <Card.Meta>
            <span className='date'>#{pokemon.id}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Label>Height: {pokemon.height}</Label>, <Label>Weight: {pokemon.weight}</Label>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
        {pokemon.types.map(({ type }, i) => (
          <Button key={i} basic color='green'>
            {type.name}
          </Button>
        ))}
        </div>
      </Card.Content>
      </Card>
    )
  }
}

export default Detail