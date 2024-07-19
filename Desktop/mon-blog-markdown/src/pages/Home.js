import React from 'react';
import { Link } from 'react-router-dom';
const posts = [
{ id: 1, title: "Premier article", slug: "premier-article" },
{ id: 2, title: "Deuxième article", slug: "deuxieme-article" },
// Ajoutez d'autres articles ici
];
const Home = () => {
return (
<div className="container mx-auto px-4 py-8">
<h1 className="text-4xl font-bold mb-8">Mon Blog Markdown</h1>
<ul>
{posts.map(post => (
<li key={post.id} className="mb-4">
<Link to={`/post/${post.slug}`} className="text-blue-600
hover:underline">
{post.title}
</Link>
</li>
))}
</ul>
</div>
);
};
export default Home;
