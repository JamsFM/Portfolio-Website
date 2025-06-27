import { getPayload } from "../../../lib/payload";

const PostsSection = async () => {
    const payload = await getPayload();
    const posts = await payload.find({
        collection: 'posts',
        limit: 2,
        sort: '-createdAt',
        where: {
            includedInBlog: {
                equals: true,
            }
        }
    });

    console.log(posts);

    return (
        <h2>Latest Posts <br/>
            from the Blog
        </h2>
    );
}

export default PostsSection;