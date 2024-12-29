import React, { useState } from "react";
import LeftOfGame from "./LeftOfGame";
import LogoSlider from "./LogoSlider";

const GameInfo = [
  {
    title: "Spider-Man: Miles Morales",
    description:
      "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    title: "Horizon Forbidden West",
    description:
      "Join Aloy as she braves the Forbidden West - a majestic but dangerous frontier that conceals mysterious new threats.",
  },
  {
    title: "God of War Ragnarök",
    description:
      "Join Kratos and Atreus to explore the mythic Nine Realms in search of answers and allies in God of War Ragnarök.",
  },
  {
    title: "Resident Evil Village",
    description:
      "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise.",
  },
];

export default function Games() {
  const [currentTrailer, setCurrentTrailer] = useState(null);

  const handlePlayTrailer = (index) => {
    setCurrentTrailer(index);
  };

  return (
    <div className="GamesContainer">
      <div className="GameSpiderMan">
        <div className="GameOverlay d-flex">
          <LeftOfGame
            title={GameInfo[0].title}
            description={GameInfo[0].description}
            onPlayTrailer={() => handlePlayTrailer(0)}
          />
          {currentTrailer === 0 && (
            <iframe
              className="YoutubeTrailer"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/65iW-nM4ncs?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="GameHorizonForbiddenWest">
        <div className="GameOverlay d-flex">
          <LeftOfGame
            title={GameInfo[1].title}
            description={GameInfo[1].description}
            onPlayTrailer={() => handlePlayTrailer(1)}
          />
          {currentTrailer === 1 && (
            <iframe
              className="YoutubeTrailer"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Lq594XmpPBg?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="GameGodOfWar">
        <div className="GameOverlay d-flex">
          <LeftOfGame
            title={GameInfo[2].title}
            description={GameInfo[2].description}
            onPlayTrailer={() => handlePlayTrailer(2)}
          />
          {currentTrailer === 2 && (
            <iframe
              className="YoutubeTrailer"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hfJ4Km46A-0?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="GameResidentEvilVillage">
        <div className="GameOverlay d-flex">
          <LeftOfGame
            title={GameInfo[3].title}
            description={GameInfo[3].description}
            onPlayTrailer={() => handlePlayTrailer(3)}
          />
          {currentTrailer === 3 && (
            <iframe
              className="YoutubeTrailer"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tjfTxFzGh3Q?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
      <LogoSlider />
    </div>
  );
}
