"use client";

import Presentation from "./components/Presentation";
import { allSlides } from "./components/slides";

export default function Home() {
  return <Presentation slides={allSlides} />;
}
