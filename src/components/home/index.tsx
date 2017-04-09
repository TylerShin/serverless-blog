import * as React from "react";

export default class Home extends React.PureComponent<null, null> {
  public render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">EmoLogic</h1>
        <p className="lead">Emotion + Logic. Tylor Shin의 나르시즘적 블로그.</p>
        <hr className="my-4" />
          <p>사실 개발 이야기보다 그냥 사는 얘기가 더 많을 거 같아요...</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">보러 가기</a>
          </p>
      </div>
    );
  }
}
