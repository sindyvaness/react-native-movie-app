import { View, Text, StyleSheet } from "react-native";
import { Image } from '@rneui/themed';

const MovieContainer = ( {navigation, route } ) => {
  const { title, overview,  popularity, release_date, poster_path } = route.params;

    return (
        <View style={styles.movieContainer}>
          <View >
            <Text style={styles.title}>{title}</Text>
          </View>

          <View>
              <Image
              source={{ uri: "https://image.tmdb.org/t/p/w500/" + poster_path }}
              style={{ width: 300, height: 300 }}
              />
          </View>

          <View style={styles.overview}>
            <Text style={styles.overviewText}>{overview}</Text>
          </View>

          <View style={styles.finalText}><Text>Popularity: {popularity} | Release Date: {release_date}</Text></View>


      </View>
    );
};

export default MovieContainer;

const styles = StyleSheet.create({
  movieContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 30
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold"
  },
  overview: {
    marginTop: 30,
    
  },
 finalText: {
      marginTop: 30
    }
  // overviewText: {
  //   lineHeight: 1.5,
    
  // }
});