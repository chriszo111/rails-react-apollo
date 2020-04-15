import * as React from "react";
import Root from "../Root";
import { SubNavbar } from "../../../library/nav";

export interface IPost {
  id?: string;
  title?: string;
  body?: string;
  rating?: number;
}

interface IPostsRootProps {}
const PostsRoot: React.FunctionComponent<IPostsRootProps> = ({
  children
}): JSX.Element => <Root>{children}</Root>;

export default PostsRoot;
