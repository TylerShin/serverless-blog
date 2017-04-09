import * as React from "react";
import * as axios from "axios";

const withStyles: (styles: any) => Function = require("isomorphic-style-loader/lib/withStyles").default;
const styles = require("./aboutCo.scss");

interface IAboutCoProps {}
interface IAboutCoStates {
  user: {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
  };
}

@withStyles(styles)
class AboutCo extends React.Component<IAboutCoProps, IAboutCoStates> {
  public constructor(props: IAboutCoProps) {
    super(props);

    this.state = {
      user: null,
    };
  }

  public async componentDidMount() {
    const result = await axios.get("https://api.github.com/users/tylorshin");
    this.setState({
      user: (result.data as any),
    });
  }

  public render() {
    const { user } = this.state;

    if (!user) {
      return (
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card">
          <img className="card-img-top" src={user.avatar_url} alt="Tylor Shin github avatar" />
          <div className="card-block">
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">{user.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCo;
