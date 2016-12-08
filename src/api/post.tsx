import * as axios from "axios";

export default class PostAPI {
  public static getPosts() {
    return axios.post("https://tylorsh.in/posts");
  }

  public static post(title: string, content: string, password: string) {
    return axios.post("https://tylorsh.in/posts/new", {
      title,
      content,
      password,
    }
    );
  }
}
