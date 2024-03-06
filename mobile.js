import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(Dimensions.get('window').width <= 500);

  useEffect(() => {
    const updateLayout = () => {
      const newIsMobile = Dimensions.get('window').width <= 500;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      if (Dimensions.removeEventListener) {
        Dimensions.removeEventListener('change', updateLayout);
      }
    };
  }, [isMobile]);

  return isMobile;
};

export default useIsMobile;
