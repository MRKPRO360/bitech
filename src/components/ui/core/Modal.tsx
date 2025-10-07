'use client';

import { useState } from 'react';
import Cta from './Cta';

interface FTModalProps {
  title: string;
  description?: string;
  onConfirm: () => Promise<void>;
  confirmText?: string;
  cancelText?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Modal = ({
  title,
  description,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  children,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: FTModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const open = controlledOpen ?? internalOpen;
  const setOpen = setControlledOpen ?? setInternalOpen;

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
      setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger button / element */}
      <span
        onClick={() => setOpen(true)}
        className="inline-flex cursor-pointer"
      >
        {children}
      </span>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-200">
          {/* Modal box */}
          <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md p-6 relative">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

            {/* Description */}
            {description && (
              <p className="text-gray-600 mt-2 text-sm">{description}</p>
            )}

            {/* Footer CTA buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <Cta
                text={cancelText}
                outline
                className="!text-sm"
                onClick={() => setOpen(false)}
              />

              <Cta
                text={confirmText}
                onClick={handleConfirm}
                isSubmitting={loading}
                submittingText="Processing..."
                className="!bg-red-500 hover:!bg-red-600 !text-sm"
                renderIcon={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
