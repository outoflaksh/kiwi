import Image from "next/image";
import bgImage from "/public/bg.jpg";

export default function BackgroundImg() {
  return <Image 
    alt="Gradient Background"
    src={bgImage}
    placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}