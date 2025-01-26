import { createClient, SanityClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'ys8rw8ln', 
  dataset: 'production',       
  apiVersion: '2023-01-01',     
  useCdn: false,               
});
const builder = ImageUrlBuilder(client);

// Function to get image URLs from Sanity
export const urlFor = (source: any) => builder.image(source);
export default client;