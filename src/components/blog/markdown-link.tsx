import type { Components } from "tinacms/dist/rich-text";

function MarkdownLink({
  url,
  children,
}: {
  url: string;
  children: JSX.Element;
}) {
  const isExternal = /^https?:\/\//.test(url);
  return isExternal ? (
    <a href={url} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  ) : (
    <a href={url}>{children}</a>
  );
}

const markdownComponents = {
  a: MarkdownLink,
} as Components<{}>;

export default markdownComponents;
