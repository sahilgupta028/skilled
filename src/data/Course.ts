import { Course } from "@/model/Course";

export const Courses: Course[]= [
    {
        name: "Data Science GURU 2.0",
        description: "This course will help you to learn Data Science from scratch. You will learn Python, Machine Learning, Deep Learning, and many more.",
        price: 100,
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 12, 31),
        duration: "6 months",
        mentors:["Vijay Singh", "Rahul Singh"],
        imageUrl: "https://images.unsplash.com/photo-1612838320302-4",
        videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        syllabusLink: "https://www.google.com",
        categories: ["Data Science", "Machine Learning", "Deep Learning"],
        tag: "Popular",
        syllabus: [
            "Introduction to Data Science",
            "Python Basics",
            "Machine Learning",
            "Deep Learning",
            "MySQL",
            "Tableau",
            "Power BI"
        ],
        courseOfferings: [
            {
                title: "Course Offering 1",
                details: [
                    "This is course offering 1",
                    "This is course offering 2",
                    "This is course offering 3"
                ]
            },
            {
                title: "Course Offering 2",
                details:[
                    "This is course offering 1",
                    "This is course offering 2",
                    "This is course offering 3"
                ]
            }
        ],
        about: {
            title: "About the Course",
            aboutDetails: [
                "This is the best course to learn Data Science",
                "This course will help you to learn Data Science from scratch",
                "You will learn Python, Machine Learning, Deep Learning, and many more"
            ]
        },

    }
]