
import BlogContent from "@src/components/blog/BlogContent";
export default async function BlogPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    return (
        <BlogContent slug={slug} />
    );
}