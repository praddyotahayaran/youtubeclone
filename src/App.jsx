import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components'

function App() {

  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
