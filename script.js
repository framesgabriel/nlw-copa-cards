let isExplorer = true;

function changeCard(event) {
  const card = event.currentTarget;
  const road = isExplorer ? "ignite" : "explorer";

  isExplorer = !isExplorer;
  card.style.backgroundImage = `url(./assets/bg-${road}.svg)`;
}
