import * as z from 'zod';

export const CourseSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    aboutTitle: z.string(),
    aboutDescription: z.array(z.string()),
    duration: z.string(),
    mentors: z.array(z.string()),
    startDate: z.date(),
    endDate: z.date(),
    imageUrl: z.string(),
    videoUrl: z.string(),
    syllabusLink: z.string(),
    categories: z.array(z.string()),
    courseOfferingTitle: z.string(),
    courseOfferingDescription: z.array(z.string()),
    tag: z.string(),
    syllabus: z.array(z.string()),
});
  
