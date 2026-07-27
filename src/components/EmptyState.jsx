import { UtensilsCrossed } from 'lucide-react';

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <UtensilsCrossed size={48} />
      </div>
      <h2 className="empty-state-title">No recipes yet</h2>
      <p className="empty-state-text">
        Start building your collection by adding your first recipe.
      </p>
    </div>
  );
}

export default EmptyState;
