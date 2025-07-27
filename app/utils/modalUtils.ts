export function setDocumentOverflow(isModalOpen: boolean) {
  if (typeof document !== 'undefined') {
    const root = document.documentElement
    root.style.overflow = isModalOpen ? 'hidden' : 'auto'
  }
}

export function focusTrigger(trigger: { current: HTMLElement | null } | null) {
  if (trigger && trigger.current) {
    setTimeout(() => {
      trigger.current?.focus()
    }, 0)
  }
}
