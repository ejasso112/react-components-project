import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Components } from './pages'
import Sidebar from './layouts/sidebar'

import './sass/main.scss'

const App = () => {
  const [componentTabs, setComponentTabs] = useState([''])

  return (
    <Router>
      <Sidebar components={componentTabs} />
      <Routes>
        <Route path='/'>
          <Route index element={<Components setTabs={(tabs: string[]) => setComponentTabs(tabs)} />} />
          <Route path=':componentName' element={<Components setTabs={(tabs: string[]) => setComponentTabs(tabs)} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
