import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StatusChecker } from "../../common/StatusChecker";
import MovieDetails from "./MovieDetails";
import {
    selectLoading,
    selectError,
    fetchItem,
    resetState,
} from "../itemSlice";

const MoviePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchItem({ id, type: "movie" }));

        return () => resetState();
    }, [id, dispatch]);

    return (
        <StatusChecker isError={isError} isLoading={isLoading}>
            <MovieDetails />
        </StatusChecker>
    );
};

export default MoviePage;