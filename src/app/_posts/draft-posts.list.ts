import { Post } from './post.model';

export const DraftPostsList: Array<Post> = [
    {
        id: 'year-in-review',
        title: 'Looking Back At My First Year In Development',
        date: new Date(2020, 2, 8),
        summary: 'What I\'ve learned after a year working on software.',
        image: '/assets/draft-images/reflection.jpg',
        imageAttributeUrl: 'https://unsplash.com/@garrettpsystems?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge',
        imageAttributeName: 'garrett parker',
        tags: ['software', 'development', 'web', 'post']
    }
];
