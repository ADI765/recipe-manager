import { X } from 'lucide-react';

function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  }

  return (
    <div className="confirm-overlay" onClick={handleOverlayClick}>
      <div className="confirm-dialog" role="dialog" aria-modal="true">
        <button
          className="confirm-close"
          onClick={onCancel}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        <h3 className="confirm-title">{title}</h3>
        <p className="confirm-message">{message}</p>

        <div className="confirm-actions">
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
