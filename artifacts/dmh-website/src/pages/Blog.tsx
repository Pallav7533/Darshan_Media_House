import { motion } from "framer-motion";
import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <div className="w-full">
      <section className="py-32 bg-background border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6">
            Insights & <span className="text-primary">News</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Thoughts, strategies, and updates from the DMH team.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider cursor-default">
  Read Article →
</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
