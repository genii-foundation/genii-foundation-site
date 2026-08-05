"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ContactDialogContextValue = {
  isOpen: boolean;
  openDialog: (trigger: HTMLButtonElement) => void;
};

type ContactTriggerProps = {
  children: ReactNode;
  className?: string;
  current?: boolean;
};

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null);

export function useContactDialog() {
  const context = useContext(ContactDialogContext);

  if (!context) {
    throw new Error("ContactTrigger must be used inside ContactDialogProvider.");
  }

  return context;
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

function ContactActionArrow() {
  return (
    <span aria-hidden="true" className="contact-option-arrow">
      <svg focusable="false" viewBox="0 0 16 16">
        <path className="contact-option-arrow-stem" d="M4 12 11 5" />
        <path d="M7.25 5H11v3.75" />
      </svg>
    </span>
  );
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = (trigger: HTMLButtonElement) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    triggerRef.current = trigger;
    if (!dialog.open) {
      dialog.showModal();
      setIsOpen(true);
      requestAnimationFrame(() => headingRef.current?.focus());
    }
  };

  const restoreTriggerFocus = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
    triggerRef.current = null;
  };

  return (
    <ContactDialogContext.Provider value={{ isOpen, openDialog }}>
      {children}
      <dialog
        aria-labelledby="contact-dialog-title"
        className="contact-dialog"
        id="contact-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={restoreTriggerFocus}
        ref={dialogRef}
      >
        <div className="contact-dialog-shell">
          <div className="contact-dialog-header">
            <h2 id="contact-dialog-title" ref={headingRef} tabIndex={-1}>
              Contact GENII
            </h2>
            <form method="dialog">
              <button
                className="contact-dialog-close"
                aria-label="Close contact dialog"
                type="submit"
              >
                <CloseIcon />
              </button>
            </form>
          </div>

          <div className="contact-options">
            <a className="contact-option" href="mailto:hello@genii.foundation">
              <span className="contact-option-kicker">Email</span>
              <strong>Write to the foundation</strong>
              <p>
                Collaboration, funding, press, and private foundation inquiries.
              </p>
              <span className="contact-option-action">
                <span>hello@genii.foundation</span>
                <ContactActionArrow />
              </span>
            </a>
            <a
              className="contact-option"
              href="https://github.com/genii-foundation/coherence-thesis/issues/new"
            >
              <span className="contact-option-kicker">GitHub</span>
              <strong>Open a thesis ticket</strong>
              <p>
                Corrections and source questions for The Coherence Thesis.
                Tickets are public.
              </p>
              <span className="contact-option-action">
                <span>Open a ticket</span>
                <ContactActionArrow />
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </ContactDialogContext.Provider>
  );
}

export function ContactTrigger({
  children,
  className,
  current = false,
}: ContactTriggerProps) {
  const { isOpen, openDialog } = useContactDialog();
  const active = current || isOpen;

  return (
    <button
      aria-controls="contact-dialog"
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      className={className}
      data-current={active ? "true" : undefined}
      onClick={(event) => openDialog(event.currentTarget)}
      type="button"
    >
      {children}
    </button>
  );
}
