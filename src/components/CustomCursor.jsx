import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseDown = () => {
      document.body.classList.add('red-cursor');
    };

    const handleMouseUp = () => {
      document.body.classList.remove('red-cursor');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
};

export default CustomCursor;