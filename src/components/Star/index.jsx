import { useState } from 'react';
import './style.css';

export const Star = ({ value, onSelect, glowing }) => {
  // const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  // const handleClick = () => {
  //   glowing(true)
  //   onSelect(value)
  // }

  return (
    <div className={starClass} onClick={() => {onSelect(value)}}></div>
  );
};
