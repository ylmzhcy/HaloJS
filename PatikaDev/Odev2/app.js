let posts = ["Post1", "Post2", "Post3"];

const ShowAllPost = () => {
  console.log(posts);
};

const createPost = (postinfo) => {
  posts.push(postinfo);
  console.log(posts);
};

createPost("Selam Canim Postu");
