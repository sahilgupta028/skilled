import mongoose, {Schema, Document} from "mongoose";

export interface CourseOffer {
    title: string;
    details: string[];
}

export const CourseOfferSchema: Schema<CourseOffer> = new Schema({
    title: {
        type: String,
    },
    details: [
        {
            type: String,          
        }
    ]
})

const CourseOfferModel = mongoose.models && mongoose.models.CourseOffer ? mongoose.models.CourseOffer as mongoose.Model<CourseOffer> : mongoose.model<CourseOffer>("CourseOffer", CourseOfferSchema);
export default CourseOfferModel;
