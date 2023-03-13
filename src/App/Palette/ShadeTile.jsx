


export default function ShadeTile ({shade}) {
	return (
		<div className="bg-white shadow">
			<header className="px-4 py-6 flex" style={{backgroundColor: shade.hex}}>
				<h2 className="mx-auto px-3 py-2 bg-white text-zinc-800 rounded">{shade.shade}</h2>
			</header>
			<footer className="px-2 py-2 text-center">
				<h4 className="font-mono">{shade.hex}</h4>
			</footer>
		</div>
	);
}
