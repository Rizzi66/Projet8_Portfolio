import './index.scss'
import { useContext } from 'react';
import { BackgroundContext } from '../../utils/context'


function Background({ longueurX, longueurY_headerMax, longueurY_headerMin, longueurY_main }) {

  const { pathName, oldPathName } = useContext(BackgroundContext)

  const root = document.documentElement;
  root?.style.setProperty("--longueurX",longueurX+"px");

  root?.style.setProperty("--longueurY__main",longueurY_main+"px");
  const angle__main = Math.atan(longueurY_main/longueurX)*(180/Math.PI)
  root?.style.setProperty("--angle__main",angle__main+"deg");

  function changementHeader(longueurY_header) {
    root?.style.setProperty("--longueurY__header",longueurY_header+"px");
    const angle__header = Math.atan(longueurY_header/longueurX)*(180/Math.PI)
    root?.style.setProperty("--angle__header","-"+angle__header+"deg");
  }


  
  if (pathName !== oldPathName && (pathName === "/" || oldPathName === "/")) {
    if (pathName !== "/") {
      changementHeader(longueurY_headerMin)
      // console.log("vers petit header")
    } else {
      changementHeader(longueurY_headerMax)
      //console.log("vers grand Background")
    }  
  }
  

  // function transitionVariable(input, output) {

  //   const timingInterval = 1

  //   if (input > output) {
  //     const myInterval = setInterval(() => {
  //       const longueurY_header = input--
  //       changementHeader(longueurY_header)
  //       if (input <= output) {
  //         clearInterval(myInterval)
  //       }
  //     }, timingInterval)
  //   } else {
  //     const myInterval = setInterval(() => {
  //       const longueurY_header = input++
  //       changementHeader(longueurY_header)
  //       if (input >= output) {
  //         clearInterval(myInterval)
  //       }
  //     }, timingInterval)
  //   }

  // }
  
  return (
  <div className='background'>
      <div className="background__main"></div>
      <div className="background__main background__line2"></div>
      <div className="background__main background__line3"></div>
      <div className="background__gradientBottom"></div>
  </div>
  )
}

export default Background
