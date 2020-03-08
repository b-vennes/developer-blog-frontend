![Deployment](https://github.com/b-vennes/developer-blog/workflows/CI/badge.svg)

# Branden Vennes's Developer Blog

This repository contains an Angular SPA which runs my [Developer Blog](https://brandenvennes.com).

To run the application, you will need the [Angular CLI](https://cli.angular.io/), [NPM](https://www.npmjs.com/get-npm), and [Node](https://nodejs.org/en/) installed.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Adding Blog Posts

In order to add a blog post, you'll first want to add a new markdown file to the `src/assets/drafts` folder.  Then, add a new reference to that post into the `src/app/_posts/draft-posts.list.ts` file. It will look something like this:

``` typescript
{
    id: 'test-post', // the id field will match the name of your markdown file without the .md extension
    title: 'Test Title',
    date: new Date(2001, 1, 1),
    summary: 'test summary',
    image: '/assets/images/test.jpg'
}
```

The drafts folder will be used when running Angular in non-production mode. To display blog posts in production mode, add posts to the `src/assets/posts` folder and references in the`src/app/_posts/posts.list.ts` file.

## Resume Page

To add a resume, create a markdown file at `src/assets/resume.md`. You do not need to then add a reference to it in the `src/app/_posts/posts.list.ts` file.

## About Page

To add a resume, create a markdown file at `src/assets/about.md`. You do not need to then add a reference to it in the `src/app/_posts/posts.list.ts` file.
