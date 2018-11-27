import axios from 'axios';

class GitHubUser {
  constructor(username) {
    this.username = username;
  }

  getUserData() {
    return axios.get(`https://api.github.com/users/${this.username}`);
  }

  getRepositories() {
    return axios.get(`https://api.github.com/users/${this.username}/repos`);
  }
}

export default GitHubUser;
