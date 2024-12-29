import React, { useState } from "react";
import LeftHardware from "./LeftHardware";
import RightHardware from "./RightHardware";
import "./styles.css";
import PS5_Logo from "../resources/PS5_Logo.png";

const slideInfo = [
  {
    title: "DualSense™ wireless controller",
    description: "Discover a deeper, highly immersive gaming experience with the innovative new PS5™ controller, featuring haptic feedback and dynamic trigger effects. The DualSense wireless controller also includes a built-in microphone and create button, all integrated into an iconic, comfortable design.",
    url: "https://www.playstation.com/en-us/accessories/dualsense-wireless-controller/",
  },
  {
    title: "DualSense™ charging station",
    description: "Charge up to two DualSense wireless controllers simultaneously without having to connect them to your PlayStation 5 console.",
    url: "https://direct.playstation.com/en-us/buy-accessories/dualsense-charging-station",
  },
  {
    title: "Pulse 3D™ wireless headset",
    description: "Play in comfort with a wireless headset fine-tuned for 3D Audio on PS5 consoles. Featuring USB Type-C° charging and dual noise-cancelling microphones, you can keep the party chat flowing with crystal-clear voice capture.",
    url: "https://blog.playstation.com/2020/10/06/experience-ps5s-tempest-3d-audiotech-with-compatible-headsets-at-launch-tv-virtual-surround-sound-coming-after-launch/",
  },
  {
    title: "Media remote",
    description: "Conveniently control movies, streaming services4 and more on your PS5 console with an intuitive layout.",
    url: "https://www.playstation.com/en-us/accessories/media-remote/",
  },
  {
    title: "HD Camera",
    description: "Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.",
    url: "https://www.playstation.com/en-us/accessories/hd-camera/",
  }
];

export default function HardWare() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='container d-flex HardwarefrontPageContainer'>
      <LeftHardware title={slideInfo[currentIndex].title} description={slideInfo[currentIndex].description} url={slideInfo[currentIndex].url}/>
      <RightHardware currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <img src={PS5_Logo} alt="PS5_Logo" className="PS5_LogoCenter" />
    </div>
  )
}
