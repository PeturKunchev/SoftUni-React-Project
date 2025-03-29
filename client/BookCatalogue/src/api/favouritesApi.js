import useAuth from "../hooks/useAuth";

const baseUrl = `${import.meta.env.VITE_BASE_URL}/users`;

export const useFavourites = () => {
    const { request } = useAuth();

    const getFavourites = (userId) => request.get(`${baseUrl}/favourites/${userId}`);

    return {
        getFavourites,
    };
}
export const useAddFavourite = () => {
    const { request } = useAuth();

    const addToFavourites = (userId, bookId) =>
        request.post(`${baseUrl}/favourites/add`, { userId, bookId });

    return {
        addToFavourites,
    };
}
export const useRemoveFromFavourites = () => {
    const { request } = useAuth();

    const removeFromFavourites = (userId, bookId) =>
        request.post(`${baseUrl}/favourites/remove`, { userId, bookId });

    return {
        removeFromFavourites,
    };
};