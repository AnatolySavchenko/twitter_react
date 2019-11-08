import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
import classHeader from './Header.module.css'

class Header extends Component {
	render() {
		return (
			<div className={classHeader.header}>
				<img className={classHeader.header__imageLogo} src='https://img.icons8.com/metro/452/twitter.png'/>
				<NavLink className={classHeader.header__link}
					to="/"
				>
					twitts
				</NavLink>

				<NavLink className={classHeader.header__link}
					to="/info"
				>
					info about twitts
				</NavLink>
			</div>
		)
	}
}

export default Header

