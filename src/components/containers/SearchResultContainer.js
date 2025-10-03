import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getMoviesBySearchResult } from "../../services/api";
import SearchResultForm from "../forms/SearchResultForm";
import MoviesList from "../lists/MoviesList";

const SearchResultContainer = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('multi');
    const [movies, setMovies] = useState([]);
    const [iniText, setIniText] = useState("Please initiate search");

    const { navigation } = props;
    
    const handleInputChange = (value) => {
        setSearchValue(value);
    };

    const handleSelectChange = (option) => {
        setSearchType(option);
    };

    const handleOnSubmit = () => {
        // console.log("I am here 1", searchValue, searchType);
        
        const loadMovies =  async () => { // RECUERDA COLOCAR EL async
            // setIsLoading(true);
            
            // console.log("I am here 2", searchValue, searchType);
            
            try {
                const results = await getMoviesBySearchResult(searchValue, searchType);
                setMovies(results);
                if (results.length < 1) {
                    setIniText("No results.");
                }
            } catch (err) {
            console.error("Error loading movies:", err);
            } finally {
                setIsLoading(false);
            }
        };

        loadMovies();
    };

    return (
        <View>
            <SearchResultForm 
                onSelectChange={handleSelectChange}
                onInputChange={handleInputChange}
                onSubmit={handleOnSubmit}
            ></SearchResultForm>

            { movies.length > 0 ? <MoviesList navigation={navigation} movies={movies}></MoviesList> 
            : <Text style={{fontSize:24, textAlign: "center", fontWeight: "bold", marginTop: 100}}>{iniText}</Text>}

            
        </View>
    );
};

export default SearchResultContainer;