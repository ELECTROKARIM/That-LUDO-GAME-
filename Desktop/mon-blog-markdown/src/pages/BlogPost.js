import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPostComponent from '../components/BlogPost';
const posts = {
"premier-article": `
# Premier article
Contenu du premier article...
`,
"deuxieme-article": `
# Deuxième article
Contenu du deuxième article...
`,
// Ajoutez d'autres articles ici
};
const BlogPost = () => {
const { slug } = useParams();
const content = posts[slug];
if (!content) {
return <div>Article non trouvé</div>;
}
return (
<div className="container mx-auto px-4 py-8">
<Link to="/" className="text-blue-600 hover:underline mb-4 block">
← Retour à l'accueil
</Link>
<BlogPostComponent content={content} />
</div>
);
};
export default BlogPost;