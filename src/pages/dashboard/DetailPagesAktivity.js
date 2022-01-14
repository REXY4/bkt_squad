import React,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {Box, Center} from 'native-base';
import axios from 'axios';
import Slideshow from 'react-native-image-slider-show';
import { connect } from 'react-redux';

const map = "../../../assets/map.png"


const DetailPagesAktivity = ({navigation, dataState, dispatch}) => {
    const [dataImage, setDataImage] = useState([]);
    const [dataWisata, setDataWisata] = useState([]);
    // const loadData = async() => {
    //     try{
    //         const responseData = await axios.get("https://408c-202-151-14-11.ngrok.io/api/v1/wisata/3");
    //         const responseDataDetail = await axios.get("https://408c-202-151-14-11.ngrok.io/api/v1/wisata/detail/3");
    //         setDataImage(responseData.data.data.wisata);
    //         setDataWisata(responseDataDetail.data.data.wisata[0]);
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    useEffect(()=>{
        // loadData();
    },[]);

   console.log(dataState.data.images)
    
    return(
        <SafeAreaView>
            <ScrollView>
            <View>
               <Slideshow 
                 height={280}
                 dataSource={dataState.data.images.map((item)=>{
                     return {url : item.image}
                 })}/>
                 <View style={{
                     backgroundColor : "rgba(0, 68, 99, 0.6)",
                     width : "100%", 
                     height : 39,
                     position : "absolute",
                     zIndex : 3,
                     top : 240,
                 }}>
                     <Text style={{
                         color :"white",
                         fontSize : 18,
                         fontWeight : "bold",
                         textAlign : "center"
                     }}>{dataState.data.title}</Text>
                 </View>
            </View>
            <View style={{
                marginTop : 50,
                marginBottom : 50,
            }}>
                <Center>
                <Box style={{
                    borderWidth : 1,
                    borderColor : "#004463",
                    width : 317,
                    alignItems : "center",
                    padding : 30,
                    borderRadius : 20,
                }}>
                     <Text
                     style={{
                         textAlign : "justify",
                         color : "#004463"
                     }}>{dataState.data.deskripsi1}</Text>
                          <Text
                     style={{
                         textAlign : "justify",
                         color : "#004463"
                     }}>{dataState.data.deskripsi1}</Text>
                          <Text
                     style={{
                         textAlign : "justify",
                         color : "#004463"
                     }}>{dataState.data.deskripsi1}</Text>
                </Box>
                </Center>
            </View>
            <View style={{
                marginBottom : 50,
            }}>
                <Center>
                <Box style={{
                    borderWidth : 1,
                    borderColor : "#004463",
                    width : 317,
                    
                    padding : 30,
                    borderRadius : 20,
                }}>
                     <Text
                     style={{
                         textAlign : "justify",
                         color : "#004463",
                         fontWeight : "bold",

                     }}>Alamat</Text>
                     <Text style={{
                         color : "#004463"
                     }}>Benteng Ps. Atas, Kec. Guguk Panjang, Kota Bukittinggi</Text>
                     <Image source={require(map)} style={{
                         width : 280,
                         height :171,
                         marginTop : 10,
                        position : "relative",
                        right : 10,
                     }}/>
                </Box>
                </Center>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const mapToProps = (state) => {
    return {
        dataState : state.SideShow
    }
}


export default connect(mapToProps)(DetailPagesAktivity);