import React, { useEffect } from "react";
import Hello from "../../components/Hello/Hello";
import Function from "../../components/Function/Function";
import Process from "../../components/Process/Process";
import Input from "../../components/Input/Input";
import Price from "../../components/Price/Price";
import PriceTarif from "../../components/PriceTarif/PriceTarif";
import News from "../../components/News/News";
import Contact from "../../components/Contact/Contact";

function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <Hello />
      <Function isSpoiler={false} /> 
      <Input isSubTitle={true} />
      <Process isSpoiler={false} />
      <Price isSpoiler={false}/>
      <PriceTarif />
      <News /> 
      <Contact />
    </>
  )
}

export default MainPage;
