function CreateCard(title, channelName, views, monthsOld, duration, thumbnail) {
  const container = document.querySelector('.container');
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src = "${thumbnail}" alt="Thumbnail" class="thumbnail">
    <div class="card-content">
      <h2 class="title">${title}</h2>`
      + `<p class="channel-name">${channelName}</p>
      <p class="views">${formatViews(views)} views</p>
      <p class="months-old">${monthsOld} months old</p>
      <p class="duration">${duration} minutes</p>
    </div>
    <button class="subscribe-button">Subscribe</button>
  `;
  container.appendChild(card);
}
// function to add M or B to views
function formatViews(views) {
  if (views >= 1e9) {
    return (views / 1e9).toFixed(1) + 'B';
  }
  if (views >= 1e6) {
    return (views / 1e6).toFixed(1) + 'M';
  }
  return views.toLocaleString();
}

document.querySelector('.header button').addEventListener('click', () => {
  const title = prompt("Enter video title:");
  const channelName = prompt("Enter channel name:");
  const views = parseInt(prompt("Enter number of views:"));
  const monthsOld = parseInt(prompt("Enter months old:"));
  const duration = prompt("Enter video duration (in minutes):");
  const thumbnail = prompt("Enter thumbnail URL:");

  if (title && channelName && !isNaN(views) && !isNaN(monthsOld) && duration && thumbnail) {
    CreateCard(title, channelName, views, monthsOld, duration, thumbnail);
  } else {
    alert("Please fill in all fields correctly.");
  }
});
