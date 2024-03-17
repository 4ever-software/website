import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    draft: z.boolean().default(false),
    price: z.number().optional(),
  }),
});

export const collections = {
  'pages': pageCollection,
};