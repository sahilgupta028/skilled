import mongoose, {Document, Schema } from "mongoose";

export interface CourseAbout {
    title: string;
    aboutDetails: string[];
}

export const CourseAboutSchema: Schema<CourseAbout> = new Schema({
    title: {
        type: String,
    },
    aboutDetails: [
        {
            type: String,
        }
    ]
})

const CourseAboutModel = mongoose.models && mongoose.models.CourseAbout ? mongoose.models.CourseAbout as mongoose.Model<CourseAbout> : mongoose.model<CourseAbout>("CourseAbout", CourseAboutSchema);
export default CourseAboutModel;