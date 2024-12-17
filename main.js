const colorChange = () => {
    const body = document.querySelector("body");
    const colors = ["#A1D6CB", "#FA4032", "#F72C5B", "#FFF574", "#A19AD3", "#FAB12F","#7ABA78","#C80036","#FF8383","#03346E","#F6B17A","#DFD0B8","#C5FF95","#C5FFF8" ];
    

    const randomIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomIndex];
  };
  