import SampleComponent from "@/app/_components/SampleComponent";
import Hero from "@/app/_components/Hero";
import { Stats } from "fs";
import Statistics from "./_components/Statistics";
export default function Home() 
{
  return (
    <div>
      <Hero/>
      <SampleComponent/>
      <Statistics/>
    </div>
  )
}