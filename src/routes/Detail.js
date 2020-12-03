import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className='detail__container'>
          <img src={location.state.poster}></img>
          <div className='movie__div'>
            <span className='movie__title'>{location.state.title}</span>
            <span className='movie__year'>{location.state.year}</span>
            <ul className='movie__genres'>
              {location.state.genres.map((genre, index) => (
                <li key={index} className='genres__genre'>
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <span>{location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
