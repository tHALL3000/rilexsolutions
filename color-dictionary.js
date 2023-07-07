Object.keys(colors).forEach((key) => {
  document.documentElement.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, colors[key]);
});
