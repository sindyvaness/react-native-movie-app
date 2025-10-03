import { Button, Card, Text } from '@rneui/themed'
import { View } from 'react-native';


const MovieCard = (props) => {
    const { id, title, popularity, release_date, poster_path, overview, navigation } = props;

    return (
    <Card containerStyle={styles.card} key={id}>
        <View style={styles.row}>
            <Card.Image
            style={styles.image}
            source={{ uri: poster_path }}
            />

            <View style={styles.content}>
                <Card.Title style={styles.title}>{title}</Card.Title>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date: {release_date}</Text>
                <Button
                    buttonStyle={styles.button}
                    title="More Details"
                    onPress={() =>
                    navigation.navigate("Show", { title, overview,  popularity, release_date, poster_path })
                    }
                />
            </View>
        </View>
    </Card>
    );

};

export default MovieCard

const styles = {
  card: {
    borderWidth: 0,
  },
  title: {
    textAlign: "left", // 👈 fuerza el título a la izquierda
    alignSelf: "flex-start", // opcional, asegura la posición
  },
  row: {
    padding: 0,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  image: {
    width: 100,
    height: 120,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 4,
    marginTop: 10,
    backgroundColor: '#007e93'
  },
};
