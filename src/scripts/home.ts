export const initHome = () => {
  console.log("Home initialized");

  const hash = window.location.hash;

  if (hash) {
    // requestAnimationFrame ensures the browser has rendered the
    // injected HTML before we try to find the element
    setTimeout(() => {
      const targetElement = document.getElementById(hash.substring(1));
      console.log("Scrolling to section:", hash, targetElement);
      if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
      }
    }, 100);
  }
};
