// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      APP.JS     -------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import * as React from "react";
import { useState } from "react";
// REACT-NATIVE
import { NavigationContainer } from "@react-navigation/native";
// NAVIGATION
import StackNavigator from "./navigation/StackNavigator";
// CONTEXT
import { PostContext } from "./context/PostContext";

export default function App() {
  const [addPost, setAddPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const value = {
    addPost: addPost,
    setAddPost: setAddPost,
    comments: comments,
    setComments: setComments,
    posts: posts,
    setPosts: setPosts,
  };

  return (
    <PostContext.Provider value={value}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PostContext.Provider>
  );
}
