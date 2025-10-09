import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseDown = () => {
      document.body.classList.add('3d-cursor');
    };

    const handleMouseUp = () => {
      document.body.classList.remove('3d-cursor');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

 
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
};

export default CustomCursor;