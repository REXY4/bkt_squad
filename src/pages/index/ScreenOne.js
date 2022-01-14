import React from "react";
import { ImageBackground, StyleSheet, Text,  TouchableOpacity ,  View } from "react-native";


const image = "../../../assets/onScreenOne.png" ;

const ScreenOne = ({navigation}) => {
    return(
        <View style={styles.container}>
        <ImageBackground source={require(image)} resizeMode="cover" style={styles.image}>
          <View style={styles.containerBody}>  
            <View>
          <Text style={styles.text}>Welcome</Text>
          </View>
          <View style={styles.viewParagraf}>
              <Text style={styles.textParagraf}>
              Nikmati Liburanmu 
              </Text>
              <Text style={styles.textParagraf}>
                di Kota Bukittinggi
              </Text>
          </View>
          <View>
              
          </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate("ScreenTwo")}
        >
        <Text style={styles.textButton}>Selanjutnya</Text>
            </TouchableOpacity>
            </View>
        </View>      
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000c0"
    },
    containerBody: {
        marginTop : 300,
      },
    image: {
      flex: 1,
      justifyContent: "center"
    },

    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 80,
      fontWeight: "bold",
      textAlign: "center",
     
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        width : 327,
        height : 48,
        borderRadius : 80,
      },
  
    textParagraf: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
      },
      viewParagraf:{
        marginBottom : 50,
      },
      buttonView : {
        alignItems : "center"
      },
      textButton : {
          fontSize : 16,
          paddingTop : 10,
          color : '#004463',
          fontWeight : "bold",
          textAlign : "center"
      }
  });

export default ScreenOne;