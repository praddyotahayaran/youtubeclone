import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../Utils/constants'

import React from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    // Here sx stands for customm CSS
    <Stack direction='row' alignItems='center' p={2}
      sx={{
        position: 'sticky', background: '#000', top: '0',
        justifyContent: 'space-between'
      }}>

      <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} height={45} />
      </Link>
      
      <SearchBar />
    </Stack>
  )
}

export default NavBar