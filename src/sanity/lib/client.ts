

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

// Create Sanity client
export const client = createClient({
  projectId: projectId || 'ys8rw8ln', // Use your environment variables or replace with your project ID
  dataset: dataset || 'production',  // Use your environment variables or replace with the dataset
  apiVersion: apiVersion || '2023-01-01',  // Use your API version or the default one
  useCdn: true,  // Set to false if you want to disable caching
});

// Image URL builder for image fields in Sanity
const builder = imageUrlBuilder(client);

// Function to get image URLs from Sanity
export const urlFor = (source: any) => builder.image(source).url();

// Export client for use in other parts of the application
export default client;
