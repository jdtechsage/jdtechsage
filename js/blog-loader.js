const container = document.getElementById("blog-container");

if (typeof BLOG_POSTS !== "undefined" && container) {
  BLOG_POSTS
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(post => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${post.image}" style="width:100%;border-radius:12px;margin-bottom:10px;">
        <h3>${post.title}</h3>
        <p style="font-size:0.85rem;">${post.description}</p>
        <div style="margin-top:8px;font-size:0.75rem;color:var(--text-secondary);">
          📅 ${post.date}
        </div>
        <a href="${post.url}" class="btn btn-primary" style="margin-top:10px;">Read More</a>
      `;

      container.appendChild(card);
    });
}