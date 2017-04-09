import * as axios from "axios";
import * as uuid from "uuid";
declare var firebase: any;

export default class PostAPI {
  public static getPosts() {
    return axios.get("https://tylorsh.in/posts");
  }

  public static async post(title: string, content: string, password: string) {
    const postId = uuid.v4();
    return firebase.database().ref(`posts/${postId}`).set({
      title,
      content,
    });
  }
}
