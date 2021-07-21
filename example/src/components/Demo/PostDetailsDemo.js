import React from "react";
import { Separator, PostDetails } from "shimmer-react";
import CodePreview from "../CodePreview";
import { code } from "../../configs";

const PostDetailsDemo = () => (
  <div>
    <h1 className="d-flex justify-content-between">
      Post Details <CodePreview title="Post Details" code={code.POST_DETAILS} />
    </h1>
    <PostDetails card cta variant="SIMPLE" />
    <PostDetails card cta variant="EDITOR" />
    <Separator />
  </div>
);

export default PostDetailsDemo;
