// posts.js
import React from 'react';
import Head from 'next/head';
import {SimpleLayout} from '@/components/SimpleLayout';
import { PostFeed } from '@/components/PostFeed';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Vineet Jassal | Posts</title>
        <meta
          name="description"
          content="All of my long-form thoughts on technology trends, innovations, and advancements in daily life."
        />
      </Head>
      <SimpleLayout
        title="Exploring the Latest in Technology and Daily Life Innovations."
        intro="All of my insights on technology trends, innovations, and advancements in daily life, presented in chronological order."
        />
        <SimpleLayout>
        <PostFeed />
        </SimpleLayout>
        
    </>
  );
}
