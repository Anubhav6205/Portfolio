import { AppProps } from "next/app";
import "@/scss/index.scss"
import {Raleway,Fira_Code} from "next/font/google"

//configuring fonts 
const raleway=Raleway({subsets:["latin"]});
const firaCode=Fira_Code({
  //loading latin character of font 
  subsets:["latin"],
  weight:[
    "300","400","500","600","700"
  ]
})
//jsx set to global to allow writing global css
//css variables are defined
export default function App({ Component, pageProps }:AppProps) {

  
  return  <>
  
  <style jsx global>{`
  :root{
    
    --raleway:${raleway.style.fontFamily};
    --fira-code:${firaCode.style.fontFamily};
    --counter:0;
  }
  `}</style>
  <Component {...pageProps} /></>
}
 