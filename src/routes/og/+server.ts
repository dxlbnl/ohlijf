import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
// import NotoSans from '$lib/NotoSans-Regular.ttf';
import Raleway from './Raleway-ExtraBold.ttf';

import { read } from '$app/server';
import Card, { size } from './Card.svelte';

const fontData = read(Raleway).arrayBuffer();

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	const result = Card.render();
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Raleway',
				data: await fontData,
				style: 'bold'
			}
		],
		...size
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: size.width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
