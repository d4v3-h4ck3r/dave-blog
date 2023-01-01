import { graphql } from 'graphql';
import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_DAVEBLOG_ENDPOINT;

export const getPosts = async () => {
    const query = gql `
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        catagories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
    const query = gql `
    query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
            author {
                bio
                name
                id
                photo {
                    url
                }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
                url
            }
            catagories {
                name
                slug
            }
            content {
                raw
            }
        }
    }
`

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(orderBy: createdAt_ASC last: 3) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.posts;
}

export const getSimilarPosts = async (catagories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $catagories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { catagories_some : { slug_in: $catagories }} }
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query, { catagories, slug });

    return result.posts;
}

export const getCatagories = async () => {
    const query =gql`
        query GetCatagories {
            catagories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.catagories;
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
}