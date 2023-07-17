import { Injectable } from "@nestjs/common";
import {Model, ObjectId} from "mongoose";
import { Track, TrackDocument } from "./schemas/track.shema";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { InjectModel } from "@nestjs/mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    ) {}

    async create(dto: CreateTrackDto,picture,audio): Promise<Track> {
        let track = await this.trackModel.create({ ...dto, listens: 0 });
        return track as Track;
    }

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.find();
        return tracks as Track[];
    }

    async getOne(id:ObjectId): Promise<Track | null> {
        const track = await this.trackModel.findById(id);
        return track as Track;
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id).populate('comments');
        return track ? track._id : null;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({ ...dto });

        track.comments.push(comment._id);
        await track.save();
        return comment as Comment;
    }
}
