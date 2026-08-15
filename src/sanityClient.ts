import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ipnzqgln', // Your project ID
  dataset: 'production', // Your dataset name
  useCdn: false, // Set to false to bypass cache and always get fresh data
  apiVersion: '2023-05-03', // Use current date
})

const builder = imageUrlBuilder(client)

// Helper function to easily generate image URLs from Sanity
export function urlFor(source: any) {
  return builder.image(source)
}
