import { getPayload } from "../../../lib/payload";

const PostsSection = async () => {
    const payload = await getPayload();
    const posts = await payload.find({
        collection: 'posts',
        limit: 2,
        sort: '-createdAt',
    });

    console.log(posts);

    return (
        <section>
            <h2>Latest Posts <br/>
                from the Blog
            </h2>
        </section>
    );
}

export default PostsSection;