import React from "react";
import { SafeAreaView, View, Image, StyleSheet} from "react-native";

const gambar = '../../assets/splashScreen.png'
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : '50%',
    },
    tinyLogo: {
      width: 245,
      height: 240,
    },
   
  });

const SplashScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                 style={styles.tinyLogo}  source={require(gambar)}/>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen;