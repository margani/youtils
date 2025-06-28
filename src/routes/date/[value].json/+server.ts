import { json, type RequestHandler } from '@sveltejs/kit';

export const prerender = 'auto';

export const GET: RequestHandler = async ({ params: { value } }) => {
    const data = {
        value,
        this: 'is generated data',
    };

    return json(data);
}
