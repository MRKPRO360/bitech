'use client';

import { useState, useRef, useEffect } from 'react';
import Cta from './Cta';

interface ContentModalProps {
  title: string;
  description?: string;
  onConfirm?: (close: () => void) => Promise<void>;
  confirmText?: string;
  cancelText?: string;
  children: (close: () => void) => React.ReactNode;
  icon?: React.ReactNode;
  btnText?: string;
  hideFooter?: boolean;
  isNormalBtn?: boolean;
}

const ContentModal = ({
  title,
  description,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  children,
  icon,
  btnText = 'Open Modal',
  hideFooter = false,
  isNormalBtn = false,
}: ContentModalProps) => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // 🧩 Close modal on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // 🧠 Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (open) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Trigger Button */}
      {isNormalBtn ? (
        <button
          onClick={() => setOpen(true)}
          className="flex gap-1 items-center cursor-pointer hover:text-primary transition-all"
        >
          {icon} {btnText}
        </button>
      ) : (
        <Cta
          text={btnText}
          icon={icon}
          onClick={() => setOpen(true)}
          outline={false}
          className="bg-primary text-white"
        />
      )}

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
          {/* Modal Container */}
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-[90%] max-w-lg p-6 transform transition-all duration-300 scale-100 opacity-100 animate-fadeInUp"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              <button
                onClick={close}
                className="text-gray-500 hover:text-primary transition-all text-xl"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            {description && (
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {description}
              </p>
            )}

            {/* Body Content */}
            <div className="pb-4">{children(close)}</div>

            {/* Footer */}
            {!hideFooter && (
              <div className="flex justify-end gap-3 border-t pt-4">
                <button
                  onClick={close}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition"
                >
                  {cancelText}
                </button>

                {onConfirm && (
                  <Cta
                    text={confirmText}
                    outline={false}
                    onClick={() => onConfirm(close)}
                    className="!bg-red-600 hover:!bg-red-700 text-white"
                    renderIcon={false}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContentModal;
