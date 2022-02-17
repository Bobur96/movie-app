import React from "react";
import Movies from "../Components/Movies";
import Loader from "../Components/Loader";
import Search from "../Components/Search";
// import rasm from "../404p.png";
import NotFound from "../Components/NotFound";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }

  searchMovie = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };

  render() {
    return (
      <div className="container content">
        <Search searchMovie={this.searchMovie} />
        {this.state.loading ? (
          <Loader />
        ) : this.state.movies ? (
          <Movies movies={this.state.movies} />
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}
