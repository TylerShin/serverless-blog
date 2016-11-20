import * as axios from "axios";

export default class PostAPI {
  public static post(title: string, content: string, password: string) {
    return axios.post("https://01fx3f21i6.execute-api.us-east-1.amazonaws.com/production/tylor-blog/posts/new", {
      title,
      content,
      password,
    }
    );
  }
}
