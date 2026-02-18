import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmAlta = [
  {
    id:1,
    title: "Carros",
    image:"https://images.justwatch.com/poster/139822917/s718/carros.jpg"
  },
  {
    id: 2 ,
    title:"Olympo",
    image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZeOXkUuqzsZABBmwH4smkVBAhBJmrRdavADGbyRyztRPgt3xC1cZwHvqkv3K_tyudhSPScDrByGZevWB0sfh2eMMaE8ZR63UZJ-.jpg?r=4de"
  },
  {
    id: 3,
    title: "Os vingadores: Guerra infinita",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_e4f7582e.jpeg?region=0,0,540,810"
  },
  {
    id: 4,
    title: "Os vingadores: Era de ultron",
    image: "https://www.universohq.com/wp-content/uploads/2015/03/Vingadores2Ultron.jpg"
  }

]

const seriesNetflix =[
  {
    id: 5,
    title: "Anne with an E",
    image:"https://m.media-amazon.com/images/M/MV5BNjE5YTVlMzAtZDM3Zi00NjdhLWIyODctMTUzMmU1Mzc0OGQ2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 6,
    title: "The umbrella academy",
    image:"https://m.media-amazon.com/images/M/MV5BMzlmMmIxODItYzBjNC00YjMwLWIwOTAtNzVlMTBlNTNkMjZjXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 7,
    title: "Unfortunate events",
    image:"https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABa_rIZF4m0Gw1k3taYEptgieQn2G_RMzzFm5D4k7B1wQmpxCUklgsA1qnABYbKezF9eiU21iz33G8abIE2S33P-16G8d1J4EJl0p.jpg?r=b6f"
  },
  {
    id: 8,
    title: "Outer banks",
    image:"https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQy-HH9EQheOt3yhvkFNJ6UD581ekiegoq_jibPvlouqFRGBZIUY2bfVJ-KtifSrspzV9jBfK7O-BYEeEswFA3UWz2zJv5Il3cuC.jpg?r=7d3"
  }
]

const filmes = [
  {
    id: 9,
    title: "O código da vinci",
    image:"https://m.media-amazon.com/images/S/pv-target-images/2a57bcaa550fc1a8b76e8a5c5203f55067aa09ddc2fa2666757d2749d6bd3524.jpg"
  },
  {
    id: 10,
    title: "Anjos e demônios",
    image:"https://m.media-amazon.com/images/M/MV5BNDE0N2UzZTktOWRkMi00NjlmLWIyNmItY2RmNWJjZWE2ZDAzXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 11,
    title: "Thor ragnarok",
    image:"https://m.media-amazon.com/images/I/91+NY2WOP8L.jpg"
  },
  {
    id: 12,
    title: "Vingadores: o Ultimato",
    image:"https://play-lh.googleusercontent.com/nz5s7-HJ3iijnvitzCwsa_oD5l7saKAnF_Hv3qGtsP6dtsXTqESZmfuQKqyZZD4UywyB"
  },
  




]

export default function Index() {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.mainTitle}>KamisaFlix</Text>
        <Text style={style.welcomeText}>Bem vindo, ao seu catalogo de filmes e cinemas</Text>
      </View>

        {/* Primeiro carrossel de filmes em alta */}
      <View style={style.section}>
        <Text style ={style.sectionTitle}>Em alta</Text>

        <FlatList 
        contentContainerStyle={style.movieList}
        horizontal
        showsHorizontalScrollIndicator = {false}
        data={EmAlta} 
        renderItem ={(({item}) => (
          <View style={style.movieItem}>
            <Image style= {style.movieImage} source= {{uri: item.image}}/>
            <Text style={style.movieTitle}>{item.title}</Text>

          </View>
          
        ))}> 
        
        </FlatList>

      {/* Segundo carrossel de filmes */}
      </View>

      <View style={style.section}>
        <Text style ={style.sectionTitle}>Séries Netiflix</Text>

        <FlatList 
        contentContainerStyle={style.movieList}
        horizontal
        showsHorizontalScrollIndicator = {false}
        data={seriesNetflix} 
        renderItem ={(({item}) => (
          <View style={style.movieItem}>
            <Image style= {style.movieImage} source= {{uri: item.image}}/>
            <Text style={style.movieTitle}>{item.title}</Text>

          </View>
          
        ))}> 
        
        </FlatList>

      </View>

      {/* Terceiro carrossel de filmes  */}

        <View style={style.section}>
        <Text style ={style.sectionTitle}>filmes</Text>

        <FlatList 
        contentContainerStyle={style.movieList}
        horizontal
        showsHorizontalScrollIndicator = {false}
        data={filmes} 
        renderItem ={(({item}) => (
          <View style={style.movieItem}>
            <Image style= {style.movieImage} source= {{uri: item.image}}/>
            <Text style={style.movieTitle}>{item.title}</Text>

          </View>
          
        ))}> 
        
        </FlatList>

      </View>



    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#000",
    flex: 1, //Ocupa a tela inteira
    paddingTop:15
  },
  mainTitle: {
    color: "#68AD6A",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5
  },
  welcomeText:{
    color:"#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 25
  },
  movieImage: {
    width: 120,
    height:180
  },
  movieTitle: {
    fontSize: 12,
    color:"#c6c6c6",
    fontWeight: "bold",
    marginTop: 5,
    flexWrap: "wrap"
  },
  movieItem: {
    
    width: 120

  },
  sectionTitle:{
    color: "#e5e5e5",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieList: {
    gap: 15
  },
  section:{
    marginBottom: 30
  }

})