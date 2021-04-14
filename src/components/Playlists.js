import React from 'react'
import "../App.css";


function Playlists() {
    return (
        <div>
            <div class="lists" id="lists">
        <h1>Our lists</h1>
        <div class="lists__wrapper">
          <div class="lists__card">
            <iframe
              src="https://open.spotify.com/embed/playlist/2bsTvqExhELHvQIX5f8PAO"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div class="lists__card">
            <iframe
              src="https://open.spotify.com/embed/playlist/3mj5df8Fmla9D5FGwUiiER"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>{" "}
          </div>
          <div class="lists__card">
            <iframe
              src="https://open.spotify.com/embed/playlist/6tCmZj0gaKdK8ehmhXL73s"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div class="lists__card">
            <iframe
              src="https://open.spotify.com/embed/playlist/4h0yyN4qQSKeB2vIK1n53k"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>{" "}
          </div>
        </div>
      </div>
        </div>
    )
}

export default Playlists
