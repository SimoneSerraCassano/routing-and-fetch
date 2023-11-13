import "./Search.css";
import useAxios from "hooks/useAxios";
import { feedUrl } from "utils/constants";
import { Loader } from "rsuite";
import Post from "components/Post/Post";
import { useState, useCallback } from "react";
import Input from "components/Input/Input";
import _debounce from "lodash/debounce";

function Search() {
  const { data: posts, error, isLoading } = useAxios(feedUrl);

  const [searchTerm, setSearchTerm] = useState("");

  // Il _debounce mi fornisce una nuova funzione debounceata, senza eseguirla. Quindi ora la definisco, dopo la uso.
  const debouncedSetSearchTerm = _debounce((inputValue) => {
    setSearchTerm(inputValue);
  }, 400);

  const handleChange = (event, type) => {
    let newSearchTerm = event.target.value;
    debouncedSetSearchTerm(newSearchTerm);
  };

  return (
    <div className="Search">
      <div className="container">
        <Input
          inputName="Search"
          placeholder="Cerca un post"
          handleChange={handleChange}
        />

        {searchTerm &&
          posts &&
          posts
            .filter((post) => post.title.includes(searchTerm))
            .map((post) => <Post key={post.id} post={post} />)}
        {error && "C'è stato un errore"}
        {isLoading && <Loader size="md" />}
      </div>
    </div>
  );
}

export default Search;
