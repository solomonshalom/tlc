import type { Scene, Station } from '$lib/types';
import { PostHog } from 'posthog-node';
import type { RequestHandler } from './$types';

interface HeartbeatBody {
    distinctID: string;
    currentScene: Scene;
    currentStation: Station;
}

// Use process.env.VITE_PUBLIC_PH_TOKEN directly
const PUBLIC_PH_TOKEN = process.env.VITE_PUBLIC_PH_TOKEN as string;

export const POST: RequestHandler = async ({ getClientAddress, request }) => {
    const ph = new PostHog(PUBLIC_PH_TOKEN, {
        host: 'https://app.posthog.com',
        flushAt: 1,
        flushInterval: 0
    });

    const body: HeartbeatBody = await request.json();

    ph.capture({
        distinctId: body.distinctID,
        event: 'heartbeat',
        disableGeoip: false,
        properties: {
            $ip: getClientAddress(),
            currentScene: body.currentScene,
            currentStation: body.currentStation
        }
    });

    await ph.shutdownAsync();

    return new Response(JSON.stringify({ success: true }));
};
