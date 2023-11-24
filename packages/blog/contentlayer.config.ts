import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw),
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    draft: {
      type: "boolean",
      required: false,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export const Tutorial = defineDocumentType(() => ({
  name: "Tutorial",
  filePathPattern: `tutorials/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    draft: {
      type: "boolean",
      required: false,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Tutorial],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      // @ts-expect-error
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis,
    ],
  },
});
