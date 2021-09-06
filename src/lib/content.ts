import fs from 'fs';
import path from 'path';

import html from 'remark-html';
import grayMatter from 'gray-matter';
import remark from 'remark';

export interface BlogPostMetaData {
    date: string;
    title: string;
}

export interface BlogPostData extends BlogPostMetaData {
    id: string;
    content: string;
}

export type BlogPostListData = Omit<BlogPostData, 'content'>;

const lang = 'en';
const postsDirectory = path.join(process.cwd(), 'src', 'content', lang, 'blog');

export function getBlogPostIds(): { params: { id: string } }[] {
    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => ({
        params: {
            id: fileName.replace(/\.md$/, ''),
        },
    }));
}

export function getBlogPosts(): BlogPostListData[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const blogPosts = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = grayMatter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as BlogPostMetaData),
        };
    });
    // Sort posts by date
    return blogPosts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    });
}

export async function getBlogPost(id: string): Promise<BlogPostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = grayMatter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const content = processedContent.toString();

    // Combine the data with the id and content
    return {
        id,
        content,
        ...(matterResult.data as BlogPostMetaData),
    };
}
