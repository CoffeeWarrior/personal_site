import { PostProps } from "../components";

export const sortPostsByYear = (a: PostProps, b: PostProps) =>
  a.header > b.header ? -1 : 1;
