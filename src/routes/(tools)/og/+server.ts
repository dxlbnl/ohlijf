import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { render } from 'svelte/server';
// import NotoSans from '$lib/NotoSans-Regular.ttf';
import Raleway from './Raleway-ExtraBold.ttf';

import { read } from '$app/server';
import Card, { size } from './Card.svelte';

const fontData = read(Raleway).arrayBuffer();

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	// Card uses css="injected", so its <style> ends up in `head`.
	const { head, body } = render(Card);
	const element = toReactNode(`${body}${head}`) as unknown as Parameters<typeof satori>[0];

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Raleway',
				data: await fontData,
				weight: 800,
				style: 'normal'
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

	return new Response(new Uint8Array(image.asPng()), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
