import * as React from "react";
import { IPost } from "../PostsRoot";
import { LinkButton } from "../../../../library";

interface IPostsShowMainProps {
  post: IPost;
}

export const PostsShowMain = ({ post }: IPostsShowMainProps): JSX.Element => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <LinkButton aProps={{href: `/posts/${post.id}/edit`}} buttonProps={{title: "Edit"}} />
  </>
);
