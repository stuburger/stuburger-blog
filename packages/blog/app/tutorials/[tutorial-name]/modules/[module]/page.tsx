import { notFound } from "next/navigation";
import { allModules } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    "tutorial-name": string;
    module: string;
  };
}

function getPostFromParams(params: PostProps["params"]) {
  const slug = `${params["tutorial-name"]}/modules/${params.module}`;

  const post = allModules.find((post) => {
    return post.slugAsParams === slug && !post.draft;
  });

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<any[]> {
  return allModules.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
