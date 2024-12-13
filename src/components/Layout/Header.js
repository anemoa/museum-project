import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const sns = [
	{name: 'twitter', link: 'https://x.com/rijksmuseum', icon: <FaTwitter />},
	{name: 'facebook', link: 'https://www.facebook.com/rijksmuseum', icon: <FaFacebookF />},
	{name: 'pinterest', link: 'https://pinterest.com/rijksmuseum/', icon: <FaPinterest />},
	{name: 'instagram', link: 'https://www.instagram.com/rijksmuseum/', icon: <FaInstagram />},
];

const menus = [
	{name: 'About Us', link: 'about-us'},
	{name: 'Period', link: 'period'},
]

const Header = () => {

	return (
		<header>
			<div className="logo_menu">
				<h1 className="logo">
					<Link to={'/'}>
						<img src="/logo.svg" alt="" />
					</Link>
				</h1>

				<nav className='menu'>
					<ul>
						{
							menus.map( (menu, idx) => {
								return <li key={idx}>
									<Link to={`/${menu.link}`}>{menu.name}</Link>
								</li>
							})
						}
					</ul>
				</nav>
			</div>

			<div className="sns_store">
				<ul>
					{
						sns.map( (menu, idx) => {
							return <li key={idx}>
								<a href={menu.link} target="_blank" rel="noopener noreferrer">
									{menu.icon}
								</a>
							</li>
						})
					}
				</ul>
				<a href="https://www.rijksmuseumshop.nl/en/gift-ideas" target="_blank" rel="noopener noreferrer">Go to Store</a>
			</div>
		</header>
	)
}

export default Header;