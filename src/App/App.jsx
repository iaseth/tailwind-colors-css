import { useState } from 'react';

import './App.scss';
import Palette from './Palette/Palette';

import colorsJson from '../../crawler/colors.json';
const colors = colorsJson.colors;



function App () {

	return (
		<div className="">
			<header className="bg-zinc-800 text-white p-4 text-center">
				<h4>Tailwind Colors</h4>
			</header>

			<main className="min-h-screen bg-zinc-200">
				<section className="">
					{colors.map((color, k) => <Palette key={k} {...{color}} />)}
				</section>
			</main>

			<footer className="bg-zinc-800 text-white px-4 py-12 text-center">
				<h4>&copy; Ankur Seth</h4>
			</footer>
		</div>
	)
}

export default App
