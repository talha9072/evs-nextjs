document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("ev-brands-container");
  const letterBar = document.getElementById("ev-letter-bar");
  const loader = document.getElementById("ev-loader");

  fetch("https://evsuae.com/ev-brands.xml")
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const brands = Array.from(xmlDoc.getElementsByTagName("brand"));

      brands.sort((a, b) => a.getAttribute("name").localeCompare(b.getAttribute("name")));

      const availableLetters = new Set();
      brands.forEach(brand => {
        const letter = brand.getAttribute("name").charAt(0).toUpperCase();
        availableLetters.add(letter);
      });

      // Build A–Z letter bar
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      alphabet.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm fw-600 px-2 py-1 rounded";
        btn.style.backgroundColor = availableLetters.has(letter) ? "var(--base-color)" : "var(--light-gray)";
        btn.style.color = "#fff";
        btn.textContent = letter;

        if (availableLetters.has(letter)) {
          btn.style.cursor = "pointer";
          btn.onclick = () => {
            const anchor = document.getElementById(`anchor-${letter}`);
            if (anchor) {
              const offsetTop = anchor.getBoundingClientRect().top + window.scrollY - 120;
              window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
          };
        } else {
          btn.style.cursor = "not-allowed";
        }

        letterBar.appendChild(btn);
      });

      loader.remove();

      brands.forEach(brand => {
        const brandName = brand.getAttribute("name");
        const models = Array.from(brand.getElementsByTagName("model"));
        const firstLetter = brandName.charAt(0).toUpperCase();

        const col = document.createElement("div");
        col.className = "col-md-2 mb-50px";
        col.id = `anchor-${firstLetter}`;

        const title = document.createElement("h3");
        title.className = "alt-font fs-20 fw-600 ls-minus-1px text-white mb-15px";
        title.textContent = brandName;
        col.appendChild(title);

        const ul = document.createElement("ul");
        ul.className = "list-unstyled warranty-list";

        models.forEach(model => {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = model.getAttribute("url");
          a.target = "_blank";
          a.className = "text-white lh-28 fs-16 urbanist";
          a.innerHTML = `<i class="bi bi-check-circle text-base-color"></i> ${model.getAttribute("name")}`;
          li.appendChild(a);
          ul.appendChild(li);
        });

        col.appendChild(ul);
        container.appendChild(col);
      });
    })
    .catch(error => {
      console.error("Error loading EV brands:", error);
      loader.textContent = "ما قدرنا نحمّل علامات السيارات الكهربائية. حاول مرة ثانية بعدين.";
    });
});
