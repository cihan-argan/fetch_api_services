import { useEffect } from "react";
import { PostServices, UserServices } from "./services";

function App() {
  useEffect(() => {
    PostServices.getPosts();
    PostServices.getPostDetail(2);
    PostServices.newPost({
      userId: 3,
      title: "test",
      body: "test",
    });

    UserServices.getUsers();
  });

  return (
    <div>
      <h1>Merhaba</h1>
    </div>
  );
}

export default App;
