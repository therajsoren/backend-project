import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        // id:{
        //     type: String,
        //     required: true
        // },
        videoFile: {
            type: String, // cloudinary url
            required: true, 
        },
        thumbnail: {
            type: String, // cloudinary url
            required: true,
        },
        owner: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },{timestamps: true});

    videoSchema.plugin(mongooseAggregatePaginate);
    // https://stackoverflow.com/questions/77414445/mongoose-aggregate-pagination-v2-aggregatepagination-isnt-working-properly
export const Video = mongoose.model("Video",videoSchema);