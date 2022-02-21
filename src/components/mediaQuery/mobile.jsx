import React from "react";
import { render } from "react-dom";
import { useMediaQuery } from "react-responsive";



const IsMobileOrTablet = () => {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    console.log(isPortrait)
    
      return ("");
  
  }


  export default IsMobileOrTablet;


/*class IsMobileOrTablet extends React.Component {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })
    
  render() {
    return (
      
    );
  }
}
export default IsMobileOrTablet;*/


