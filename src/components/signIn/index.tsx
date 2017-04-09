import * as React from "react";

declare var firebase: any;

export default class SignIn extends React.PureComponent<null, null> {
  public async componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/plus.login");
      const result = await firebase.auth().signInWithPopup(provider);
      const token = result.credential.accessToken;
      const user = result.user;
      console.log("user=====", user);
      console.log("token=====", token);
    } else {
      // TODO: redirect to home
    }

  }

  public render() {
    // if (user) {

    // } else {

    // }

    return (
      <div>User Login...</div>
    );
  }
}
