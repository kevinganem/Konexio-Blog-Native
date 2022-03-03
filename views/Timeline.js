// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// -------------------------      TIMELINE.JS     ---------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useEffect, useState } from "react";
import { useContext } from "react";
// REACT-NATIVE
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
// COMPONENTS
import Post from "../components/Post";
// CONTEXT
import { PostContext } from "../context/PostContext";

export default function Timeline() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { addPost } = useContext(PostContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        setPosts(res);
        setLoading(false);
        console.log(setPosts);
      });
  }, []);

  return (
    <>
      <SafeAreaView>
        {posts.length === 0 && loading && <ActivityIndicator size="large" />}
        {addPost.length !== 0 ? (
          <FlatList
            data={addPost}
            renderItem={(data) => <Post post={data.item} />}
            keyExtractor={(_, index) => index.toString()}
          />
        ) : null}
        <FlatList
          data={posts}
          renderItem={(data) => <Post post={data.item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
}
