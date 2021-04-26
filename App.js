import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  StyleSheet,
  Modal,
} from 'react-native';
import ImageCard from './components/ImageCard';
import ModalForm from './components/ModalForm';
import {Icon} from 'react-native-elements';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      image: 'https://i.stack.imgur.com/9dufl.jpg',
      title: 'Batman',
      tags: 'batman,gotham,dark knight, drawing',
    },
  ]);

  const addPost = (post) => {
    post.key = uuidv4();
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
    setModalVisibility(false);
  };

  return (
    <View style={styles.index}>
      <View>
        <ModalForm
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
          addPost={addPost}
        />
        <FlatList
          data={posts}
          renderItem={({item}) => <ImageCard item={item} key={item.id} />}
        />
      </View>
      <View style={styles.addBtn}>
        <Icon
          name="add-circle"
          type="material"
          size={40}
          color="#29AA99"
          underlayColor="#363F3E"
          onPress={() => setModalVisibility(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  index: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5D5F5C',
  },
  addBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default App;
