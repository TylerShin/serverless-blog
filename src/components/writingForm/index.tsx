import * as React from "react";
import PostAPI from "../../api/post";
import { Link } from "react-router";

class WritingForm extends React.Component<{}, {}> {
  public render() {
    return (
      <form className="container">
        <h1 style={{ color: "red" }}>Before Upload</h1>
        <h2>Content should be written in <b>Markdown syntax!</b></h2>
        <div className="form-group row">
          <input className="form-control" type="text" ref="title" placeholder="Title" />
        </div>
        <div className="form-group row">
          <textarea className="form-control" ref="content" placeholder="Content"></textarea>
        </div>
        <div className="form-group row">
          <input className="form-control" type="password" ref="password" placeholder="PASSWORD" />
        </div>
        <div className="form-group clearfix row">
          <button className="btn btn-primary pull-right" onClick={(e) => { this.post(e); } }>SAVE</button>
        </div>
      </form>
    );
  }

  private post(e: any) {
    e.preventDefault();
    const title = (this.refs["title"] as any).value;
    const content = (this.refs["content"] as any).value;
    const password = (this.refs["password"] as any).value;
    PostAPI.post(title, content, password)
      .then(() => {
        alert("uploading Done");
      })
      .catch((err: Error) => {
        alert("there was an error");
        console.error(err);
      });
  }
}

export default WritingForm;
