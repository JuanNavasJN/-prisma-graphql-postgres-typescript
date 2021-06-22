import { Resolvers } from "./generated/graphql";

const fakeUserID = 2;

export const resolvers: Resolvers = {
    Query: {
        AllUsers: async (_, args, context) =>
            await context.prisma.user.findMany(),
        AllPosts: async (_, args, context) =>
            await context.prisma.post.findMany({
                include: {
                    user: true,
                },
            }),
    },
    Mutation: {
        AddPost: async (_, args, context) =>
            await context.prisma.post.create({
                data: {
                    body: args.body,
                    user: {
                        connect: {
                            id: fakeUserID,
                        },
                    },
                },
            }),
        LikePost: async (_, args, context) => {
            const like = await context.prisma.like.create({
                data: {
                    post: {
                        connect: {
                            id: args.postId,
                        },
                    },
                    user: {
                        connect: {
                            id: fakeUserID,
                        },
                    },
                },
                include: {
                    post: true,
                },
            });

            return like.post;
        },
    },
};
