import { getPayload } from "../../../../lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";

const Page = async ({ params }) => {
  const { postId } = await params;
  const payload = await getPayload();
  let post = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });
  
  Page.propTypes = {
      params: PropTypes.any
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  let data = post.docs[0];
  console.log(data);

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <h1 className="text-5xl font-bold mb-5 leading-normal text-center">
        {data.title}
      </h1>
      <SerializedRichText
        className="payload-richtext"
        data={data.content}
      />
    </div>
  );
};

export default Page;
