import { useEffect, useState } from "react";
import { View } from "react-native";
import TvShowsForm from "../forms/TvShowsForm";
import { getMoviesByTvShow } from "../../services/api";
import MoviesList from "../lists/MoviesList";
import Loading from "../layouts/Loading";

const results1 = [{
            "adult": false,
            "backdrop_path": "/ckT96Sn8r1IDNyIBJ1mDZ1Jh2kR.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 1267319,
            "original_language": "ko",
            "original_title": "사마귀",
            "overview": "Mantis, an ace assassin, returns to the contract killer industry after a hiatus, encountering his trainee friend Jae-yi and a retired legendary killer Dok-go, who now runs the organization.",
            "popularity": 445.4668,
            "poster_path": "/xS9bbciDC5lHPgl79SrPyzxKAXL.jpg",
            "release_date": "2025-09-26",
            "title": "Mantis",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 30
        },
        {
            "adult": false,
            "backdrop_path": "/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
            "genre_ids": [
                16,
                28,
                14,
                53
            ],
            "id": 1311031,
            "original_language": "ja",
            "original_title": "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来",
            "overview": "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
            "popularity": 422.5458,
            "poster_path": "/sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
            "release_date": "2025-07-18",
            "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 407
        },
        {
            "adult": false,
            "backdrop_path": "/iUy1LdIX74krb0ZEhq8IImIneFk.jpg",
            "genre_ids": [
                28,
                10752,
                53,
                36
            ],
            "id": 1328803,
            "original_language": "en",
            "original_title": "Prisoner of War",
            "overview": "British RAF Wing Commander James Wright is captured by the Japanese during WWII and forced to fight in brutal hand-to-hand combat. The Japanese soldiers get more than they bargained for when Wright’s years of martial arts training in Hong Kong prove him to be a formidable opponent.",
            "popularity": 387.7022,
            "poster_path": "/1XET89sjRm9mUuHXhGIlKTNd5uD.jpg",
            "release_date": "2025-09-19",
            "title": "Prisoner of War",
            "video": false,
            "vote_average": 7.204,
            "vote_count": 49
        }];

const TvShowsContainer = (props) => {
    const [category, setCategory] = useState("popular");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { navigation } = props;

    const handleSelectChange = (option) => {
        setCategory(option);
    };

    useEffect( () => {
        const loadMovies = async () => { // recall place the async
            setIsLoading(true);

            try {
                const results = await getMoviesByTvShow(category);
                setMovies(results);
            } catch (err) {
            console.error("Error loading movies:", err);
            } finally {
                setIsLoading(false);
            }
        };

        loadMovies();
    }, [category]);

    return (
        <View>
            <TvShowsForm onSelectChange={handleSelectChange}></TvShowsForm>
            {/* { isLoading ? <Loading /> : <MoviesList movies={movies}></MoviesList> } */}
            <MoviesList navigation={navigation} movies={movies}></MoviesList>
            
        </View>
    );
};

export default TvShowsContainer;