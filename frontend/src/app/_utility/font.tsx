import { Amita } from "next/font/google"
import { Montserrat } from "next/font/google";
import { Salsa } from "next/font/google";

export const amita = Amita({
  weight : ["400","700"],
  subsets: ["latin","devanagari"]
})

export const montserrat = Montserrat({ 
  weight: ["400", "700"], 
  subsets: ["latin"] 
});

export const salsa = Salsa({
  weight: ["400"],
  subsets: ["latin"],
});