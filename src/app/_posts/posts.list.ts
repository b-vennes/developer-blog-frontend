import { Post } from './post.model';

export const PostsList: Array<Post> = [
    {
        id: 'python-html',
        title: 'Building an HTML Library with Python',
        date: new Date(2020, 3, 9),
        summary: 'Developing a Python library for building HTML templates.',
        image: '/assets/images/divs.jpg',
        imageAttributeUrl: 'https://unsplash.com/@flac666',
        imageAttributeName: 'Dominik Malinowski',
        tags: ['python', 'html', 'frontend', 'software development']
    },
];
