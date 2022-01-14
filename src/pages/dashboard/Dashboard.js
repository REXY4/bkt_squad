import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import { Box} from 'native-base';
import { Avatar } from 'native-base';
import SearchInput from '../../components/SearchInput';
import axios from 'axios';
import { connect } from 'react-redux';



const styles = StyleSheet.create({
    name : {
        color : "#151515",
        fontWeight: "bold",
        fontSize: 18,
        marginTop : 10,
        marginLeft : 15,
    },
    titleThumbnail : {
        color : "#F7931A",
        fontSize : 18,
        fontWeight : "bold",
        paddingLeft : 10,
    }
})

const Item = ({ title }) =>{
    console.log(title)
    return(
        <ScrollView
       
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
            <View style={{
                margin : 20
            }}>
      <Image source={{uri : title}} style={{
          width : 100,
          height : 100,

      }}/>
      </View>
    </ScrollView>
    )
};

const Dashboard = ({navigation , dataState, dispatch}) => {
    const [dataWisata, setDataWisata] = useState([]);
    const [title, setTitle] = useState([]);
    const [dataHotel, setDataHotel] = useState([]);
    const [titleHotel, setTitleHotel] = useState([]);
    const [dataKuliner, setDataKuliner] = useState([]);
    const [titleKuliner, setTitleKuliner] = useState([]);
 
    console.log("ini adalah data state",dataState)
    const renderItem = ({ item }) => (
        <Item title={item.image}/>
      );
     
    const loadDataWisata = async () => {
        try{
            const response = await axios.get("https://fb98-202-151-14-11.ngrok.io/api/v1/wisatas/gambars");
            const responseTwo = await axios.get("https://fb98-202-151-14-11.ngrok.io/api/v1/wisatas");
            const gambarHotel = await axios.get("https://fb98-202-151-14-11.ngrok.io/api/v1/hotel/gambar");
            const titlesHotel = await axios.get("https://fb98-202-151-14-11.ngrok.io/api/v1/hotels");
            const responseKuliner = await axios.get("https://fb98-202-151-14-11.ngrok.io/api/v1/kuliner/gambar");
            const responseTitleKuliner = await axios.get("https://fb98-202-151-14-11.ngrok.io/api/v1/kuliners");
            
            setDataWisata(response.data.data.wisata);
            setTitle(responseTwo.data.data.wisata);
            setDataHotel(gambarHotel.data.data.hotel);
            setTitleHotel(titlesHotel.data.data.hotel);
            setDataKuliner(responseKuliner.data.data.kuliner);
            setTitleKuliner(responseTitleKuliner.data.data.kuliner);
        }catch(err){
            console.log(err)
        }
    }
    

    useEffect(()=>{
        loadDataWisata();
    },[]);

    const handleClick = (data) => {
        dispatch({
            type : 'ADD_DATA',
            payload : data
        })
        console.log("success" ,data)
        navigation.navigate("DetailPagesAktifity");
    }
    console.log(dataState.data);

    return(
        <SafeAreaView >
          <ScrollView>  
         <View style={{
             marginLeft : 30,
             marginBottom : 50
         }}>   
            <View style={{
                   flexDirection: "row",
                   marginTop : 30,
                  
                   marginBottom : 20,
            }}>
            <Avatar
                    bg="green.500"
                   
                >
                    MF
           </Avatar>
             <Text style={styles.name}>Muhammad Fauzi</Text>
            </View>
            <View style={{
                marginBottom : 30
            }}>
                <Text style={styles.titleThumbnail}>Explore the Beautiful of <Text style={{
                    color: "#004463"
                }}>Bukittinggi</Text></Text>
            </View>
            <View>
                <SearchInput/>
            </View>
        </View>
        <View style={{
            marginBottom : 50,
        }}>
           <View style={{
               marginBottom : 20,
           }}> 
            <Box style={{
                backgroundColor : "#F7931A",
                borderTopRightRadius : 20,
                borderBottomRightRadius : 20,
                width: 207,
                height: 30,
            }}>
                <Text style={{
                    color : "white",
                    fontSize : 13,
                    fontWeight : "bold",
                    textAlign : "center",
                    paddingTop : 5,
                }}>Rekomendasi Wisata</Text>
            </Box>
            </View>
            <View   style={{
                flexDirection: "row",
            }} >
                   <ScrollView
       
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       pagingEnabled={true}>
      {title.map((item, index)=>{
          return(
             <TouchableOpacity key={index} 
             onPress={()=>handleClick(item)} style={{
                 marginRight : 15,
                 borderWidth : 3,
                 borderColor : "#004463",
                 borderRadius : 9,
             }}> 
            <ImageBackground source={{uri : item.image}} style={{
                width : 190,
                height : 117,
                borderRadius : 9,
                border : '5px solid black',
            }}>
                <View style={{
                    position : "absolute",
                    bottom : 0,
                    backgroundColor : "rgba(0, 68, 99, 0.7)",
                    width : 190,
                    height : 32,
                }}>
                    <Text style={{
                        color : "white",
                        textAlign : "center"
                    }}>{item.title}</Text>
                </View>
             </ImageBackground>   
            </TouchableOpacity>
          )
      })}
    </ScrollView>
            </View>
            </View>

            <View style={{
            marginBottom : 50,
        }}>
           <View style={{
               marginBottom : 20,
           }}> 
            <Box style={{
                backgroundColor : "#F7931A",
                borderTopRightRadius : 20,
                borderBottomRightRadius : 20,
                width: 207,
                height: 30,
            }}>
                <Text style={{
                    color : "white",
                    fontSize : 13,
                    fontWeight : "bold",
                    textAlign : "center",
                    paddingTop : 5,
                }}>Rekomendasi Hotel</Text>
            </Box>
            </View>
            <View   style={{
                flexDirection: "row",
            }} >
                   <ScrollView
       
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       pagingEnabled={true}>
      {titleHotel.map((item, index)=>{
          return(
             <TouchableOpacity key={index} 
             onPress={()=>handleClick(item)}
             style={{
                 marginRight : 15,
                 borderWidth : 3,
                 borderColor : "#004463",
                 borderRadius : 9,
             }}> 
            <ImageBackground source={{uri : item.image}} style={{
                width : 190,
                height : 117,
                borderRadius : 9,
                border : '5px solid black',
            }}>
                <View style={{
                    position : "absolute",
                    bottom : 0,
                    backgroundColor : "rgba(0, 68, 99, 0.7)",
                    width : 190,
                    height : 32,
                }}>
                    <Text style={{
                        color : "white",
                        textAlign : "center"
                    }}>{item.title}</Text>
                </View>
             </ImageBackground>   
            </TouchableOpacity>
          )
      })}
    </ScrollView>
            </View>
            </View>


            <View style={{
            marginBottom : 50,
        }}>
           <View style={{
               marginBottom : 20,
           }}> 
            <Box style={{
                backgroundColor : "#F7931A",
                borderTopRightRadius : 20,
                borderBottomRightRadius : 20,
                width: 207,
                height: 30,
            }}>
                <Text style={{
                    color : "white",
                    fontSize : 13,
                    fontWeight : "bold",
                    textAlign : "center",
                    paddingTop : 5,
                }}>Rekomendasi Kuliner</Text>
            </Box>
            </View>
            <View   style={{
                flexDirection: "row",
            }} >
                   <ScrollView
       
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       pagingEnabled={true}>
      {titleKuliner.map((item, index)=>{
          return(
             <TouchableOpacity key={index} 
             onPress={()=>handleClick(item)}
             style={{
                 marginRight : 15,
                 borderWidth : 3,
                 borderColor : "#004463",
                 borderRadius : 9,
             }}> 
            <ImageBackground source={{uri : item.image}} style={{
                width : 190,
                height : 117,
                borderRadius : 9,
                border : '5px solid black',
            }}>
                <View style={{
                    position : "absolute",
                    bottom : 0,
                    backgroundColor : "rgba(0, 68, 99, 0.7)",
                    width : 190,
                    height : 32,
                }}>
                    <Text style={{
                        color : "white",
                        textAlign : "center"
                    }}>{item.title}</Text>
                </View>
             </ImageBackground>   
            </TouchableOpacity>
          )
      })}
    </ScrollView>
            </View>
            </View>
       
         
            </ScrollView>
        </SafeAreaView>
    )
}

const mapToProps = (state) => {
    return {
        dataState : state.SideShow
    }
}

export default connect(mapToProps)(Dashboard);