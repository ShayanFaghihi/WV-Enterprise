import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/posts",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/posts",
        format: "md",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => values?.slug || "untitled-post",
          },
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
            description:
              "Used in the post's web address, e.g. my-first-post. Lowercase letters, numbers, and dashes only.",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail Image",
          },
          {
            type: "string",
            name: "seoTitle",
            label: "SEO Title",
            description:
              "Shown in browser tabs and search results. Defaults to the Title above if left blank. Aim for under 60 characters.",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description",
            ui: { component: "textarea" },
            description:
              "Shown in search results and as the preview text on the blog page. Aim for under 160 characters.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
