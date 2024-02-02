import { createClient } from 'next-sanity';
import { SanityClient } from 'sanity';

// Create a new Sanity.io client
const sanityClient = createClient({
    projectId: process.env.SANITY_PROJECT_ID as string,
    dataset: process.env.SANITY_DATASET as string,
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: process.env.SANITY_API_VERSION as string
});

export default sanityClient as SanityClient;
