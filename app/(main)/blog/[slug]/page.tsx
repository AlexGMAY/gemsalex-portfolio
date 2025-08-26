// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { BlogPost } from '@/lib/BlogPost';
import { blogPosts } from '@/data';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostFooter from '@/components/blog/BlogPostFooter';
import RelatedPosts from '@/components/blog/RelatedPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug.replace('/blog/', ''),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === `/blog/${params.slug}`);
  
  if (!post) return {};
  
  return {
    title: `${post.title} | Merveille Alexander`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image || '/default-blog-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === `/blog/${params.slug}`);
  
  if (!post) {
    return notFound();
  }

  // Find related posts (same category/tag)
  const relatedPosts = blogPosts
    .filter((p) => 
      p.id !== post.id && 
      (p.category === post.category || p.tags?.some(tag => post.tags?.includes(tag)))
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <BlogPostHeader 
        title={post.title}
        date={post.date}
        readTime={post.readTime}
        category={post.category}
        tags={post.tags}
      />
      
      <BlogPostContent content={post.content} />
      
      <BlogPostFooter />
      
      <RelatedPosts posts={relatedPosts} />
    </article>
  );
}