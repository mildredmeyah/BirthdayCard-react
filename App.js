import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";


const image = { uri: "https://i.pinimg.com/originals/5e/fc/a0/5efca0b81e8d513c4b5c7155b77f23f1.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>THAKGI's 7th Birthday</Text>
      <Image
       style={styles.stretch}
       source={require('./assets/cake.jpg')}/>
       <Text style={styles.Text}> Growing and becoming clever at all times 
       hope you enjoy your day to the fulllest
       FROM MOMMY

       </Text>
    </ImageBackground>
  </View>
);



const styles = StyleSheet.create({
  container: {
    maxHeight:800,
    maxWidth:600,
  padding:30,
  margin:"auto",

    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "skyblue",
    fontFamily:"birthstone",
    fontSize: 42,
    lineHeight: 54,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "hotpink"
    
    
    
  },
  Text: {
    color: "skyblue",
    fontFamily:"Birthstone",
    fontSize: 30,
    lineHeight: 54,
  
      textAlign: "center",
      backgroundColor: "#C71585"
      
      
    

  },
  
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    backgroundColor:"#C71585"
  }
});

export default App;