import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (parameter: string) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(parameter);
};

interface ReplaceQueryParams {
  key: string;
  value?: string;
}

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }: ReplaceQueryParams) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
