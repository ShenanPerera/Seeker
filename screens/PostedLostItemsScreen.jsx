import { View, Text , SafeAreaView , FlatList , Image , StyleSheet} from 'react-native';
import React from 'react';
import { FireStore } from '../firebase';
import { collectionGroup, getDocs } from 'firebase/firestore';
import { TouchableOpacity } from 'react-native';
// import { auth } from 'firebase/auth';
// const deleteIcon = '../assets/images/delete.png';
const tempimage = require('../assets/delete.png');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    location: 'qwe',
    image : 'https://cdn-icons-png.flaticon.com/128/739/739249.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    location: 'qwe',
    image : 'https://cdn-icons-png.flaticon.com/128/739/739249.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    location: 'qwe',
    image : 'https://cdn-icons-png.flaticon.com/128/739/739249.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29op2',
    title: 'Fourth Item',
    location: 'qwe',
    image : 'https://cdn-icons-png.flaticon.com/128/739/739249.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2456',
    title: 'Fifth Item',
    location: 'qwe',
    image : 'https://cdn-icons-png.flaticon.com/128/739/739249.png',
  },
];

const PostedLostItemsScreen = () => {
  // const currentUser = auth.currentUser.uid;
  // console.log(currentUser);

  const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20,
        marginTop:20,
    },
    itemText: {
      fontSize: 16,
      margin: 4,
    },
    postDetails:{
      height:55,
    },
    card: {
        marginTop: 8 ,
        marginLeft:10,
        marginRight:10,
        width: '95%', // Adjust as needed to fit two cards per row
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 25,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderWidth: 4,
        borderColor: '#0369A1',
        flexDirection:'row',
        justifyContent: 'space-between',
      },
      itemImage: {
        width: 70, 
        height: 70, 
        resizeMode: 'cover',
        margin: 8, 
      },
      removeimage:{
        width:30,
        height:30,
      },
  });

  return (
    <View>
      <SafeAreaView>
      <FlatList 
        data={DATA} 
        renderItem={({item})=>(
          <TouchableOpacity >
          <View key={item.id} style={styles.card}>
            <Image source={{uri:item.image}} style={styles.itemImage}/>
            <View style={styles.postDetails}>
              <Text style={styles.itemText}>Item : {item.title}</Text>
              <Text style={styles.itemText}>Location : {item.location}</Text>
            </View>
            <TouchableOpacity>
            {/*  onPress={() => removeGoal(itemData.item.key)} */}
              {/* <Text  style={styles.itemText}>Delete</Text> */}
            {/* <View styles={{height:100, width:100 , justifyContent:'center',border:'1px solid #000' , margin: 10, padding: 10}}> */}
              <Image source={tempimage} 
                style={styles.removeimage}
              />
            {/* </View> */}
            </TouchableOpacity>
          </View>
          </TouchableOpacity >
        )}
      />
      </SafeAreaView>
    </View>
  );
};

export default PostedLostItemsScreen;