import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'
// css
import './index.css'

const PokeCard = props => (
  <Grid>
    <Grid.Row>
      {props.pokemonData.map(({name, id}) => (
        <Grid.Column key={id} mobile={8} tablet={4} computer={4}>
          <Card className="card-pokemon">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default PokeCard;