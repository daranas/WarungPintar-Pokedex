import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
// element
import SearchBar from '../SearchBar'
// css
import './index.css'

const NavBar = props => (
  <Menu attached='top'>
    <Dropdown item icon='filter' simple>
      <Dropdown.Menu>
        <Dropdown.Item>Test Menu</Dropdown.Item>
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