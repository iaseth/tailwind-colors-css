import ShadeTile from './ShadeTile';



export default function Palette ({color}) {
	return (
		<div className="px-8 py-12 ch:px-4 ch:max-w-5xl ch:mx-auto odd:bg-zinc-100">
			<header className="py-4">
				<h1>{color.title}</h1>
			</header>

			<main>
				<section className="grid grid-cols-4 gap-x-3 gap-y-4">
					{color.shades.map((shade, k) => <ShadeTile key={k} {...{shade}} />)}
				</section>
			</main>
		</div>
	);
}
