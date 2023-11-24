import { notFound } from "next/navigation";
import { allModules, allTutorials } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Article } from "@/components/article";

interface PostProps {
  params: {
    "tutorial-name": string;
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const post = allTutorials.find(
    (post) => post.slugAsParams === params["tutorial-name"]
  );

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

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allTutorials.map((post) => ({
    "tutorial-name": post.slugAsParams,
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
      </article>
      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
        {allModules.map((tut) => (
          <Article
            id={tut._id}
            key={tut._id}
            date={new Date()}
            description={tut.description}
            title={tut.title}
            slug={tut.slug}
          />
        ))}
      </div>
    </>
  );
}
