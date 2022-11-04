import { PostProps } from "../components";

export const makePostValid = (obj: any): PostProps => {
  const validPost = { content: "", subheader: "", header: "", ...obj };
  return validPost as PostProps;
};
