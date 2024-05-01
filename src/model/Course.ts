import mongoose, {Schema, Document } from "mongoose";
import { Video, VideoSchema } from "./Video";
import VideoModel from "./Video";
import { CourseOffer, CourseOfferSchema } from "./CourseParts";
import { CourseAboutSchema, CourseAbout } from "./CourseAbout";

export interface Course {
    name: string;
    description: string;
    about?: CourseAbout;
    price: number;
    startDate: Date;
    endDate: Date;
    mentors?: string[];
    duration: string;
    imageUrl: string;
    videoUrl?: string;
    syllabusLink: string;
    videos?: Video[];
    categories: string[];
    courseOfferings?: CourseOffer[];
    tag?: string;
    syllabus?: string[];
}


const CourseSchema: Schema<Course> = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    about: CourseAboutSchema,
    price: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    mentors: [
        {
            type: String,
            default: ["Vijay Singh"]
        }
    ],
    duration: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    syllabusLink: {
        type: String,
        required: true
    },
    videos: [
        VideoSchema
    ],
    categories: {
        type: [String],
        required: true
    },
    tag: {
        type: String
    },
    syllabus: {
        type: [String]
    },
    courseOfferings: [
        CourseOfferSchema
    ]
})

const CourseModel = mongoose.models && mongoose.models.Course ? mongoose.models.Course as mongoose.Model<Course> : mongoose.model<Course>("Course", CourseSchema);
export default CourseModel;