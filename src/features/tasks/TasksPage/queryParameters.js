import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    searchParams.get(toString);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};