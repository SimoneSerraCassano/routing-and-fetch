import "./Search.css";
import useAxios from "hooks/useAxios";
import { feedUrl } from "utils/constants";
import { Loader } from "rsuite";
import Post from "components/Post/Post";
import { useState } from "react";
import Input from "components/Input/Input";

function Search() {
  const { data: posts, error, isLoading } = useAxios(feedUrl);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event, type) => {
    let newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
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
