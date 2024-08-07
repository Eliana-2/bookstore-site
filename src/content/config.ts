// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const eventCollection = defineCollection({ 
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    summary: z.string(),
    image: image().refine((img) => img.width),
    date: z.any(),
    time: z.any(),
  }),
 });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'events': eventCollection,
};