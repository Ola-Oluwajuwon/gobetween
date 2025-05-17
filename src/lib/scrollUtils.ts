export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    // Offset for navbar
    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
