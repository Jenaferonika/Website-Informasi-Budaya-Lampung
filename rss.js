fetch(feedUrl)
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");
    const items = xmlDoc.querySelectorAll("item");
    const feedList = document.getElementById("rss-feed");

    items.forEach((item) => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;

      const listItem = document.createElement("li");
      listItem.innerHTML = (
        <a href="${link}" target="_blank">
          ${title}
        </a>
      );
      feedList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching RSS feed:", error));

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
