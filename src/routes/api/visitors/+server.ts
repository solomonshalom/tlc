import dayjs from 'dayjs';
import type { RequestHandler } from './$types';
import { group, shake, sort } from 'radash';

interface Event {
    id: string;
    distinct_id: string;
    properties: Record<string, unknown>;
    event: string;
    timestamp: string;
    person: {
        is_identified: false;
        distinct_ids: string[];
        properties: Record<string, unknown>;
    };
    elements: [];
    elements_chain: string;
}

interface EventResponse {
    next: null;
    results: Event[];
}

// Use process.env.VITE_PH_API_KEY and process.env.VITE_PH_PROJECT_ID directly
const PH_API_KEY = process.env.VITE_PH_API_KEY as string;
const PH_PROJECT_ID = process.env.VITE_PH_PROJECT_ID as string;

export const GET: RequestHandler = async () => {
    const threshold = dayjs().subtract(5, 'minute').toISOString();

    const url = new URL(`https://app.posthog.com/api/projects/${PH_PROJECT_ID}/events/`);

    url.searchParams.set('after', threshold);

    const init: RequestInit = { headers: { Authorization: `Bearer ${PH_API_KEY}` } };

    const result = (await fetch(url.toString(), init).then((res) => res.json())) as EventResponse;

    const groupedUsers = shake(
        group(result.results, (r) => r.distinct_id),
        (v: Event[]) => {
            const sorted = sort(v, (r) => dayjs(r.timestamp).unix());
            const entered = sorted.findLastIndex((r) => r.event === '$pageview');
            const left = sorted.findLastIndex((r) => r.event === '$pageleave');
            return entered < left;
        }
    );

    const count = Object.keys(groupedUsers).length - 1; // Subtract 1 to account for current user

    return new Response(String(count));
};
