import React, { Component } from 'react';

class PlayListItem extends Component {

  render() {
    let songInfo = this.props.songs.map(song => {
      return (
        <div className="playlistCard" key={song._id}>
          <div>
            <span className="itemTitle">User Name: </span>
            <span className="itemValue">{song.userName} </span>
          </div>
          <div>
            <span className="itemTitle">Artist/Band: </span>
            <span className="itemValue">{song.songArtist} </span>
          </div>
          <div>
            <span className="itemTitle">Song Title: </span>
            <span className="itemValue">{song.songTitle} </span>
          </div>
          <div>
            <span className="itemTitle">Song Notes: </span>
            <span className="itemValue">{song.songNotes}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="playlist">
        {songInfo}
      </div>
    );
  }
}

export default PlayListItem;
