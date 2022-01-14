import React,{useState} from "react"
import {StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { View, Text,  Center, } from "native-base";
import { TextInput, Divider, } from 'react-native-paper';



const google = "../../../assets/google.png";
const facebook = "../../../assets/facebook.png";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : '30%',
    },
    inputStyle : {
        width : 327,
        height :64
    },
    garisOne : {
        height : 1,
        width : 87,
        backgroundColor : "black",
        marginRight : 10,
    },
    garisTwo : {
        height : 1,
        width : 87,
        backgroundColor : "black",
        marginLeft : 10,
    },
    textAtau : {
        color : "#004463",
        fontSize : 14,
        fontWeight : "500"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#F7931A",
        width : 327,
        height : 48,
        borderRadius : 80,
      },
      textButton : {
        fontSize : 16,
        paddingTop : 10,
        color : 'white',
        fontWeight : "bold",
        textAlign : "center"
    },
    buttonLink : {
        color :  "#004463",
       
    }
  });

const CreateAkun = () => {  
    const [text, setText] = useState('');
  return (
    <>
    <SafeAreaView>
    <View style={styles.container}>
        <Center>
            <View style={{
                marginBottom : 30,
            }}>
        <TextInput
             label="Username & Email"
             style={ {
                width : 327,
                backgroundColor : "#004463",
            }}
            value={text}
            underlineColorAndroid="transparent"
            type={'flat'}
             onChangeText={text => setText(text)}
              theme={{ colors: { text: "white", primary: "#6A84A0", accent: "#ffffff", } }}
            />
            </View>
            <View style={{
                marginBottom : 50,
            }}>
        <TextInput
             label="Password"
             style={ {
                width : 327,
           
                backgroundColor : "#004463",
            }}
            value={text}
            type={'flat'}
             onChangeText={text => setText(text)}
              theme={{ colors: { text: "white", primary: "#6A84A0", background: "transparent", } }}
            />
            </View>
            <View style={{
                 flexDirection: "row",
                 marginBottom : 20,
                 flexWrap: "wrap",
                 alignItems: "center",
            }}>
                <View style={styles.garisOne}></View>
                <Text style={styles.textAtau}>atau lanjutkan dengan</Text>
                <View style={styles.garisTwo}></View>
            </View>
            <View style={{
                 flexDirection: "row",
                 flexWrap: "wrap",
                 alignItems: "center",
                 marginBottom : 100
            }}>
                <Image source={require(google)} style={{
                    marginRight : 15
                }}/>
                <Image source={require(facebook)}/>
            </View>
            <View style={{
                marginBottom : 20
            }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Lanjut</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text
                style={{
                    color : "#6A84A0"
                }}>Tidak Punya Akun ? <Text style={styles.buttonLink}>Daftar</Text></Text>
            </View>
        </Center>
    </View> 
    </SafeAreaView> 
    </>
  )
};

export default CreateAkun;