document.getElementById("chips").onmousemove = e => {
    for(const chip of document.getElementsByClassName("chip")) {
      const rect = chip.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      chip.style.setProperty("--mouse-x", `${x}px`);
      chip.style.setProperty("--mouse-y", `${y}px`);
    };
  }