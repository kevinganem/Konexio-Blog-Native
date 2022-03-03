// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// -------------------------      TIMELINE.JS     ---------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useEffect, useState } from "react";
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

export default function Timeline() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

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
        <FlatList
          data={posts}
          renderItem={(data) => <Post post={data.item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
}
