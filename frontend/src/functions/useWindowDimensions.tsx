import { useState, useEffect } from 'react';

function useWindowDimensions() {
    const getDimensions = () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const [windowDimensions, setWindowDimensions] = useState(getDimensions());

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getDimensions());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;