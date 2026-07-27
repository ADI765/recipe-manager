import { Heart } from 'lucide-react';

function FavoriteButton({ isFavorite, onClick, className = '' }) {
  return (
    <button
      className={`favorite-btn ${isFavorite ? 'favorite-btn-active' : ''} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        size={20}
        fill={isFavorite ? 'currentColor' : 'none'}
        strokeWidth={isFavorite ? 0 : 2}
      />
    </button>
  );
}

export default FavoriteButton;
