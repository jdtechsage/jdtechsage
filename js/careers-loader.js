const jobsContainer = document.getElementById("jobs-container");

if (typeof JOB_POSTS !== "undefined" && jobsContainer) {
  JOB_POSTS
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(job => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${job.title}</h3>
        <p style="font-size:0.85rem;margin-bottom:6px;">📍 ${job.location}</p>
        <span class="tag cyan">${job.type}</span>
        <p style="font-size:0.85rem;margin-top:10px;">${job.description}</p>
        <div style="margin-top:8px;font-size:0.75rem;color:var(--text-secondary);">
          📅 ${job.date}
        </div>
        <a href="${job.url}" class="btn btn-primary" style="margin-top:10px;">View Details</a>
      `;

      jobsContainer.appendChild(card);
    });
}