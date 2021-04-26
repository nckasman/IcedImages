import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import PostForm from './PostForm';
import {Icon} from 'react-native-elements';

const ModalForm = ({modalVisibility, setModalVisibility, addPost}) => {
  return (
    <Modal visible={modalVisibility}>
      <View
        style={{
          backgroundColor: '#5D5F5C',
          flex: 1,
        }}>
        <Text style={styles.title}>ADD IMAGE</Text>
        <View>
          <PostForm addPost={addPost} />
        </View>
        <View style={styles.cancelBtn}>
          <Icon
            name="cancel"
            type="material"
            size={40}
            color="#29AA99"
            underlayColor="#363F3E"
            onPress={() => setModalVisibility(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    top: 25,
    letterSpacing: 5,
    fontStyle: 'italic',
    color: '#29AA99',
    textShadowColor: '#393A3C',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 4,
      height: 4,
    },
  },
  cancelBtn: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    right: 0,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default ModalForm;
