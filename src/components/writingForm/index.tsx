import * as React from "react";
import PostAPI from "../../api/post";
import { Link } from "react-router";

class WritingForm extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <button onClick={() => { this.post(); }}>CLICK ME!!!!!!</button>
      </div>
    );
  }

  private post() {
    PostAPI.post("first time", "this is content");
  }
}

export default WritingForm;
