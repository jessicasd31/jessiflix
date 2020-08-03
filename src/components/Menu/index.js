import React from 'react'
import './Menu.css'
import Logo from '../../assets/img/Logo.png'
// import ButtonLink from '../components/ButtonLink'
import Button from '../Button'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo da Jessiflix" />
      </a>
      {/*<ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>*/}
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;