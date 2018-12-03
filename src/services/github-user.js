import axios from 'axios';

class GitHubUser {
  constructor(username) {
    this.username = username;
  }

  getUserData(callback) {
    const userData = {};

    axios
      .get(`https://api.github.com/users/${this.username}`)
      .then(({ data }) => {
        userData.name = data.name;
        userData.username = data.login;
        userData.avatar = data.avatar_url;
        userData.bio = data.bio;
        userData.followers = data.followers;
        userData.following = data.following;
        userData.githubHref = data.html_url;

        return this.getOrgs();
      })
      .then(({ data: orgs }) => {
        userData.orgs = orgs;
        return this.getRepos();
      })
      .then(({ data: repos }) => {
        userData.repos = repos;
        callback(userData, null);
      })
      .catch((err) => {
        callback(userData, err);
      });
  }

  getOrgs() {
    return axios.get(`https://api.github.com/users/${this.username}/orgs`);
  }

  getRepos() {
    return axios.get(`https://api.github.com/users/${this.username}/repos`);
  }
}

export default GitHubUser;
