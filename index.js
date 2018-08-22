const app = "I don't do much.";
const token = '8dc9b6e9f0e472f1e61cba392eeea9d4c2d6149b';
fetch('https://api.github.com/ivillicana/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
