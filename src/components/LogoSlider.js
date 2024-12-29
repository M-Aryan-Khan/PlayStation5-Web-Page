import React from "react";
import Marquee from "react-fast-marquee";
import "./styles.css";
import game1 from "../resources/RiseOfRonin.jpg";
import game2 from "../resources/Spiderman2.jpg";
import game3 from "../resources/GodOfWarRagnarok.jpg";
import game4 from "../resources/TheLastOfUsPart2.jpg";
import game5 from "../resources/HorizonForbiddenWestt.jpg";
import game6 from "../resources/GranTurismo7.jpg";
import game7 from "../resources/RatchetClank.jpg";
import game8 from "../resources/Returnal.jpg";
import game9 from "../resources/GhostOfTsushima.jpg";
import game10 from "../resources/NBA2k24.jpg"

const games = [
  {
    img: game1,
    title: "Rise of the Ronin",
    description:
      "Embark on an epic journey across war-torn 19th-century Japan in this combat-focused open-world action RPG from Team NINJA, the veteran studio behind Nioh and NINJA Gaiden.",
    trailer: "https://youtu.be/zS8EvlTGCiE?si=Ug6Dp4DxnpkDRs02",
  },
  {
    img: game2,
    title: "Marvel's Spider Man 2",
    description:
      "Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel's Spider-Man franchise for PS5.",
      trailer: "https://youtu.be/nq1M_Wc4FIc?si=6tIOX_6ukakEI9Ll",
  },
  {
    img: game3,
    title: "God of War Ragnarök",
    description:
      "Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.",
      trailer: "https://youtu.be/hfJ4Km46A-0?si=ynDzkDPhfmAq6bfK",
  },
  {
    img: game4,
    title: "The Last of Us Part I",
    description:
      "In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.",
      trailer: "https://youtu.be/WxjeV10H1F0?si=51JQtoSbCQ3GO3I_",
  },
  {
    img: game5,
    title: "Horizon Forbidden West",
    description:
      "Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.",
      trailer: "https://youtu.be/Lq594XmpPBg?si=9usgC-v5D73v1NK8",
  },
  {
    img: game6,
    title: "Gran Turismo 7",
    description:
      "Whether you're a competitive or casual racer, collector, tuner, livery designer or photographer - find your line with a staggering collection of game modes including fan-favourites like GT.",
      trailer: "https://youtu.be/1tBUsXIkG1A?si=bk0GB4oTmBP6JR2x",
  },
  {
    img: game7,
    title: "Ratchet & Clank™: Rift Apart",
    description:
      "Blast your way through an interdimensional adventure with Ratchet and Clank. Go dimension-hopping as they take on an evil emperor from another reality.",
      trailer: "https://youtu.be/55PRv_e00wc?si=pS-B0zGe3RDIdeQK",
  },
  {
    img: game8,
    title: "Returnal™",
    description:
      "Break the cycle of chaos on an always- changing alien planet in this acclaimed third-person roguelike shooter from Housemarque.",
      trailer: "https://youtu.be/0iNGNYuR5_8?si=y7PTgsPV38vyFMAj",
  },
  {
    img: game9,
    title: "Ghost of Tsushima™",
    description:
      "Forge a new path and wage an unconventional war for the freedom of Tsushima in this expanded version of the open-world action-adventure from Sucker Punch Productions.",
      trailer: "https://youtu.be/rTNfgIAi3pY?si=YYKJgbe2jbufdIyE",
  },
  {
    img: game10,
    title: "NBA2K24",
    description:
      "Experience your favorite NBA players’ signature moves and fine-tune your skills to deliver career-defining plays in dramatic fashion.Bring your game to life with ProPLAY™ on PS5®.",
      trailer: "https://youtu.be/7t0IQisJubM?si=hvVG_c9eA9USk2mD",
  },
];

export default function LogoSlider() {
  const openTrailer = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Marquee>
      {games.map((game, index) => (
        <div className="game-card" key={index}>
          <img src={game.img} alt={game.title} className="game-image" />
          <div className="game-info">
            <h5>{game.title}</h5>
            <p>{game.description}</p>
            <button
              type="button"
              className="btn SliderButton btn-outline-danger"
              onClick={() => openTrailer(game.trailer)}
            >
              Watch Trailer
            </button>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
