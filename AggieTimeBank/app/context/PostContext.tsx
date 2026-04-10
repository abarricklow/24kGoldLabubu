import { createContext, useContext, useState } from 'react';

type Post = {
  id: string;
  title: string;
  description: string;
  credits: number;
};

type PostContextType = {
  posts: Post[];
  addPost: (post: Post) => void;
};

const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePosts must be used inside PostProvider');
  return context;
};