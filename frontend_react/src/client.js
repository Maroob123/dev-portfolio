import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export const fileFor = (source) => {
  const [, id, extension] = source.split('-');
  return `https://cdn.sanity.io/files/${process.env.REACT_APP_SANITY_PROJECT_ID}/production/${id}.${extension}`
}