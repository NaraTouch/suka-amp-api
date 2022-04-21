import { Post } from './post.entity';
import { PostDto } from './dto/post.dto';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: typeof Post);
    create(post: PostDto, userId: any): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: any): Promise<Post>;
    delete(id: any, userId: any): Promise<number>;
    update(id: any, data: any, userId: any): Promise<{
        numberOfAffectedRows: number;
        updatedPost: Post;
    }>;
}
