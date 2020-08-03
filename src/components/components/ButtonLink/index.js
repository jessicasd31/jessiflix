import React from 'react'
// import './Menu.css'

const ButtonLink = (props) => {
  console.log(props)
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  )
}

export default ButtonLink;