import React from 'react'
import { Route, Link } from "react-router-dom";
import { Dropdown, Menu } from 'semantic-ui-react'
// element
import SearchBar from '../SearchBar'
// css
import './index.css'

const pokemonType = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water"
]

const NavBar = props => (
  <Menu attached='top'>
    <Dropdown item icon='filter' simple>
      <Dropdown.Menu>
        {pokemonType.map((value, key) => (
        <Dropdown.Item key={key}>
        <a href={`/?type=` + value}>{value}</a>
        </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>

    <Menu.Menu position='right'>
      <div className='ui right aligned category search item'>
        <SearchBar />
      </div>
    </Menu.Menu>
  </Menu>
)

export default NavBar