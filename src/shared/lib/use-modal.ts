export function showModal(toggle: (val: boolean) => void) {
  toggle(true);

  setTimeout(() => {
    toggle(false);
  }, 3000);
}
