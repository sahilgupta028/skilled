import mongoose, {Schema, Document} from "mongoose"

export interface Video {
    id: string;
    title: string;
    description: string;
    videoLink: string;
    startTime: Date;
    endTime: Date;
    thumbnail: string;
}


export const VideoSchema: Schema<Video> = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
})

const VideoModel = mongoose.models && mongoose.models.Video ? mongoose.models.Video as mongoose.Model<Video> : mongoose.model<Video>("Video", VideoSchema);
export default VideoModel;