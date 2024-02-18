import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import raw_vragen from '../vragen.yaml';
import { z } from 'zod';

import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const markdown = unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypeSanitize)
	.use(rehypeStringify);

const questionSchema = z
	.object({
		question: z.string(),
		explanation: z.string().optional(),
		answers: z.string().array()
	})
	.array();
const questions = questionSchema.parse(raw_vragen);

export const load: PageLoad = async ({ params }) => {
	const questionId = parseInt(params.question);
	const question = questions[questionId - 1];

	if (!question) {
		error(404, { message: 'Onbekende vraag' });
	}

	const next = questionId === questions.length ? '/test/resultaat' : `/test/${questionId + 1}`;
	`/test/${questionId + 1}`;

	return {
		...question,
		heading: `Vraag ${questionId}/${questions.length}`,
		index: questionId,
		question: await markdown.process(question.question),
		explanation: question.explanation && (await markdown.process(question.explanation)),
		next
	};
};
