import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Search } from '../assets/search.svg'
import { ReactComponent as Doc } from '../assets/doc.svg'
import { ReactComponent as Component } from '../assets/component.svg'
import { ReactComponent as Extend } from '../assets/extend.svg'

interface SidebarProps {
  components: string[]
}

const Sidebar = ({ components }: SidebarProps) => {
  const [isDocsOpen, setIsDocsOpen] = useState(true)
  const [isComponentsOpen, setIsComponentsOpen] = useState(true)

  const componentsMap = components.map((tab) => (
    <NavLink to={`/${tab}`} key={tab}>
      {tab}
    </NavLink>
  ))

  return (
    <nav className='rcp-sidebar'>
      <a className='rcp-sidebar__brand' href='/' title='React Components Project'>
        <Logo />
        <div>
          <span>react.</span>
          <span>components.</span>
          <span>project.</span>
        </div>
      </a>

      <div className='rcp-sidebar__search'>
        <Search />
        <input aria-label='Search for components' type='search' placeholder='Search Components' />
      </div>

      <div className='rcp-sidebar__tab'>
        <button
          type='button'
          aria-expanded={isDocsOpen}
          onClick={() => {
            setIsDocsOpen((state) => !state)
          }}
        >
          <Doc />
          Getting Started
          <Extend />
        </button>
      </div>

      <div className='rcp-sidebar__tab'>
        <button
          type='button'
          aria-expanded={isComponentsOpen}
          onClick={() => {
            setIsComponentsOpen((state) => !state)
          }}
        >
          <Component />
          Components
          <Extend />
        </button>
        {isComponentsOpen && componentsMap}
      </div>
    </nav>
  )
}

export default Sidebar
