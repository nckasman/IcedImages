import React from 'react';
import {View, Text, Image, Alert, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const ImageCard = ({item}) => {
  const tags = item.tags.split(',');

  return (
    <View style={styles.card}>
      <Image style={styles.image} alt="" source={{uri: item.image}} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.tagsSection}>
        <View style={styles.tags}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>#{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      <Icon
        name="remove-circle"
        type="material"
        size={40}
        color="#29AA99"
        underlayColor="#363F3E"
        containerStyle={{margin: 5}}
        //onPress={() => deletePost(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    marginBottom: 50,
    width: 360,
    backgroundColor: '#393A3C',
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  image: {
    width: 360,
    height: 400,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#29AA99',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  tagsSection: {
    marginTop: 15,
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  tag: {
    margin: 10,
    backgroundColor: '#5D5F5C',
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    elevation: 8,
  },
});

export default ImageCard;
