import mongoose, {Schema, Document } from "mongoose";
import { Video, VideoSchema } from "./Video";
import VideoModel from "./Video";

export interface Course {
    id?: number;
    name: string;
    description: string;
    price: number;
    startDate: Date;
    endDate: Date;
    instructor?: string;
    duration: string;
    imageUrl: string;
    link: string;
    videos?: Video[];
    categories: string[];
}


const CourseSchema: Schema<Course> = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
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
    instructor: {
        type: String,
        default: "Vijay Singh"
    },
    duration: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    videos: [
        VideoSchema
    ],
    categories: {
        type: [String],
        required: true
    }
})

const CourseModel = mongoose.models && mongoose.models.Course ? mongoose.models.Course as mongoose.Model<Course> : mongoose.model<Course>("Course", CourseSchema);
export default CourseModel;