export const links = [
    {
        name: "Courses",
        submenu: true,
        sublinks: [
            {
                Head: "Data Science",
                sublink: [
                    { 
                        name: "DATA SCIENCE GURU 2.0",
                        link: "/api/courses/ds-guru-2"
                    },
                    { 
                        name: "DATA SCIENCE GURU 3.0",
                        link: "/api/courses/ds-guru-3"
                    },
                    { 
                        name: "DATA SCIENCE GURU 4.0",
                        link: "/api/courses/ds-guru-4"
                    },
                    { 
                        name: "DATA SCIENCE GURU 5.0",
                        link: "/api/courses/ds-guru-5"
                    },
                    { 
                        name: "DATA SCIENCE GURU 6.0",
                        link: "/api/courses/ds-guru-6"
                    }
                ]
            },
            {
                Head: "Bottomwear",
                sublink: [
                    {
                        name: "Complete Web Dev 1.0",
                        link: "/api/courses/web-dev-1"
                    },
                    {
                        name: "Complete Web Dev 2.0",
                        link: "/api/courses/web-dev-2"
                    },
                    {
                        name: "Complete Web Dev 3.0",
                        link: "/api/courses/web-dev-3"
                    },
                    {
                        name: "Complete Web Dev 4.0",
                        link: "/api/courses/web-dev-4"
                    }
                ]
            },
            {
                Head : "Machine Learning",
                sublink: [
                    {
                        name: "ML super race 1.0",
                        link: "/api/courses/ml-1"
                    },
                    {
                        name: "ML super race 2.0",
                        link: "/api/courses/ml-2"
                    },
                    {
                        name: "ML super race 3.0",
                        link: "/api/courses/ml-3"
                    }
                ]
            }
        ]
    },
    {
        name: "Job Portal",
        submenu: true,
        sublinks: [
            {
                Head: "Find a Job",
                link: "/api/jobs/user/"
            },
            {
                Head: "Publish a Job",
                link: "/api/jobs/recruiter/"
            }
        ]
    },
    {
        Head: "Practice",
        sublinks: false
    }
]