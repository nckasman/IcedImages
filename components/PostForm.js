import React, {useState} from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import {Formik} from 'formik';

const PostForm = ({addPost}) => {
  return (
    <View style={{zIndex: 1}}>
      <Formik
        initialValues={{
          image: '',
          title: '',
          tags: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          addPost(values);
        }}>
        {(props) => (
          <View style={styles.container}>
            <View>
              <View style={styles.postBtnContainer}>
                <TouchableNativeFeedback onPress={props.handleSubmit}>
                  <Text style={styles.postBtn}>POST</Text>
                </TouchableNativeFeedback>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Image URL"
                onChangeText={props.handleChange('image')}
                value={props.values.image}
              />
              <TextInput
                style={styles.input}
                placeholder="Image Title"
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />
              <TextInput
                style={styles.input}
                placeholder="Tags (Separate with `,`)"
                onChangeText={props.handleChange('tags')}
                value={props.values.tags}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
  },
  input: {
    color: 'white',
    borderWidth: 3,
    borderColor: '#393A3C',
    padding: 10,
    margin: 20,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: '#393A3C',
    elevation: 4,
  },
  postBtnContainer: {
    marginRight: 150,
    marginLeft: 150,
  },
  postBtn: {
    fontSize: 25,
    backgroundColor: '#29AA99',
    borderRadius: 8,
    padding: 8,
    color: '#393A3C',
    fontWeight: 'bold',
    textAlign: 'center',
    elevation: 4,
    letterSpacing: 4,
  },
});

export default PostForm;
