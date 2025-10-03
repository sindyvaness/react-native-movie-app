import { FlatList, View, Text } from "react-native";
import MovieCard from "../listItmes/MovieCard";

const MoviesList = (props) => {
    const { movies, navigation } = props;
    
    return (
        <FlatList
            data={movies} 
            renderItem={({ item }) => (
                <MovieCard 
                    key={item.id}
                    id={item.id}
                    title={item.title ? item.title : item.name}
                    popularity={item.popularity}
                    release_date={item.release_date}
                    overview={item.overview}
                    poster_path={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                    navigation={navigation}
                ></MovieCard>
            )}
        ></FlatList>
        
    );

};

export default MoviesList;