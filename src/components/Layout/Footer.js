import { footer } from 'framer-motion/client';
import React from 'react'

const Footer = () => {
  return (
	<footer>
    	<p>Data provided by Rijksmuseum API</p>
    	<a href="https://www.rijksmuseum.nl/en/api" target="_blank" rel="noopener noreferrer">
      	Rijksmuseum API
    	</a>
	</footer>
  )
}

export default Footer;