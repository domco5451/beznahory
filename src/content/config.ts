import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      type: z.enum(["tura", "akcia", "tip"]),
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      author: z.string(),
      thumbnail: image(),
      thumbnailAlt: z.string(),
      kraj: z.string().optional(),
      okres: z.string().optional(),
      pfp: image().optional(),
      pfpAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      gpx: z.string().optional(),
      ratings: z
        .object({
          difficulty: z.number().optional(),
          views: z.number().optional(),
          accessibility: z.number().optional(),
          length: z.string().optional(),
          time: z.string().optional(),
          terrain: z.string().optional(),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          })
        ).optional(),
    }),
});

export const collections = { blog: blogCollection, };
