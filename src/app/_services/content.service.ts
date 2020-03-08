import { Injectable } from '@angular/core';
import { Post } from '../_posts/post.model';
import { environment } from '../../environments/environment';
import { PostsList } from '../_posts/posts.list';
import { DraftPostsList } from '../_posts/draft-posts.list';

@Injectable()
export class ContentService {
    getContentInfo(id: string): Post {
        const postsList = environment.production ? PostsList : DraftPostsList;

        const posts = postsList.filter(list => list.id === id);

        if (posts.length !== 1) {
            return null;
        }

        const post = posts[0];

        if (environment.production) {
            post.location = `/assets/posts/${id}.md`;
        } else {
            post.location = `/assets/drafts/${id}.md`;
        }

        return post;
    }

    getPosts(): Array<Post> {
        if (environment.production) {
            return PostsList;
        } else {
            return DraftPostsList;
        }
    }

    getAboutContent(): Post {
        return {
            image: null,
            location: '/assets/posts/about.md'
        };
    }

    getResumeContent(): Post {
        return {
            location: '/assets/posts/resume.md'
        };
    }
}