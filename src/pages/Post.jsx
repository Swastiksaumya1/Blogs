import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 px-4 animate-fade-in">
            <Container>
                {/* Hero Image */}
                <div className="w-full max-w-4xl mx-auto mb-8 relative rounded-2xl overflow-hidden border border-zinc-800/50 shadow-xl shadow-black/20">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-auto object-cover"
                    />
                    {isAuthor && (
                        <div className="absolute right-4 top-4 flex gap-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor="bg-gradient-to-r from-emerald-500 to-green-500"
                                    className="shadow-lg"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-gradient-to-r from-rose-500 to-red-500"
                                onClick={deletePost}
                                className="shadow-lg"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8">{post.title}</h1>
                    <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed [&>p]:mb-4 [&>h2]:text-zinc-100 [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-zinc-200 [&>h3]:font-semibold [&>ul]:list-disc [&>ul]:ml-6 [&>ol]:list-decimal [&>ol]:ml-6">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}