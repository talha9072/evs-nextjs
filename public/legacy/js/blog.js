document.addEventListener("DOMContentLoaded", function () {
  let currentPage = 1;
  const blogsPerPage = 12;

  fetch('https://evsuae.com/blogs.xml')
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const allBlogs = Array.from(xmlDoc.getElementsByTagName("blog"));

      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to midnight

      const blogs = allBlogs
        .map(blog => {
          const publishDateText = blog.getElementsByTagName("publisheddate")[0]?.textContent || "";
          const publishDate = new Date(publishDateText);
          return { blog, publishDate };
        })
        .filter(({ publishDate }) => !isNaN(publishDate) && publishDate <= today)
        .sort((a, b) => b.publishDate - a.publishDate)
        .map(({ blog }) => blog);

      const totalPages = Math.ceil(blogs.length / blogsPerPage);

      function renderBlogs() {
        const container = document.getElementById("blog-container");
        container.innerHTML = "";

        const startIndex = (currentPage - 1) * blogsPerPage;
        const endIndex = Math.min(startIndex + blogsPerPage, blogs.length);

        blogs.slice(startIndex, endIndex).forEach(blog => {
          const blogTitle = blog.getElementsByTagName("blogtitle")[0]?.textContent || "No Title";
          const blogUrl = blog.getElementsByTagName("blogurl")[0]?.textContent || "#";
          const blogImage = blog.getElementsByTagName("blogimage")[0]?.textContent || "default.jpg";
          const publishDate = formatDate(blog.getElementsByTagName("publisheddate")[0]?.textContent || "Unknown Date");

          const blogHTML = `
            <div class="col-xl-3 col-lg-4 col-md-6 mb-3">
              <figure class="position-relative mb-0 box-hover">
                <div class="blog-image">
                  <img loading="lazy" src="${blogImage}&q=70&w=640"
                    srcset="
                      ${blogImage}&q=70&w=320 320w,
                      ${blogImage}&q=70&w=500 500w,
                      ${blogImage}&q=70&w=768 768w
                    " alt="${blogTitle}" width="297" height="414" />
                  <span class="box-overlay"></span>
                  <span class="bg-gradient-gray-light-dark-transparent position-absolute opacity-6 top-0px left-0px w-100 h-100"></span>
                </div>
                <figcaption class="d-flex flex-column h-100">
                  <div class="my-auto w-100 text-center blog-hover-icon"><a href="${blogUrl}" aria-label="Read more about ${blogTitle}" class="d-inline-block"><i class="line-icon-Arrow-OutRight icon-extra-large text-white"></i></a></div>
                  <div class="position-relative post-content p-14 text-center last-paragraph-no-margin">
                    <div class="position-relative z-index-2 overflow-hidden">
                      <a href="${blogUrl}" aria-label="Read more about ${blogTitle}" class="d-inline-block fs-15 text-base-color mb-20px text-uppercase fw-600">${publishDate}</a>
                      <a href="${blogUrl}"  aria-label="Read more about ${blogTitle}" class="card-title fs-20 alt-font fw-500 text-white mb-0 d-block">${blogTitle}</a>
                      <div class="hover-text"><a href="${blogUrl}" class="btn btn-link-gradient btn-medium text-white thin mt-20px mb-5px opacity-6 fw-300">Continue reading<span class="bg-white"></span></a></div>
                    </div>
                    <div class="box-overlay"></div>
                  </div>
                </figcaption>
              </figure>
            </div>
          `;

          container.innerHTML += blogHTML;
        });

        renderPaginationControls(totalPages);
      }

      function renderPaginationControls(totalPages) {
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const paginationList = document.createElement("ul");
        paginationList.className = "pagination pagination-style-01 fs-13 fw-500 mb-0";

        const prevItem = document.createElement("li");
        prevItem.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevItem.innerHTML = `<a class="page-link" href="#"><i class="feather icon-feather-arrow-left fs-18 d-xs-none"></i></a>`;
        prevItem.onclick = () => {
          if (currentPage > 1) {
            currentPage--;
            renderBlogs();
          }
        };
        paginationList.appendChild(prevItem);

        for (let i = 1; i <= totalPages; i++) {
          const pageItem = document.createElement("li");
          pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
          pageItem.innerHTML = `<a class="page-link" href="#">${String(i).padStart(2, '0')}</a>`;
          pageItem.onclick = () => {
            currentPage = i;
            renderBlogs();
          };
          paginationList.appendChild(pageItem);
        }

        const nextItem = document.createElement("li");
        nextItem.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextItem.innerHTML = `<a class="page-link" href="#"><i class="feather icon-feather-arrow-right fs-18 d-xs-none"></i></a>`;
        nextItem.onclick = () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderBlogs();
          }
        };
        paginationList.appendChild(nextItem);

        paginationContainer.appendChild(paginationList);
      }

      renderBlogs();
    })
    .catch(error => {
      console.error("Error fetching or processing XML:", error);
      document.getElementById("loader").textContent = "Failed to load blogs. Please try again later.";
    });

  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
});
