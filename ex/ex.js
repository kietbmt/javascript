const SERVER_API = 'https://dummyjson.com';

const app = {
    state: {
        q: '',
        page: 1,
        limit: 10,
        total: 0,
    },

    async getPosts() {
        const { q, page, limit } = this.state;
        const skip = (page - 1) * limit;

        const response = await fetch(
            `${SERVER_API}/posts/search?q=${encodeURIComponent(q)}&limit=${limit}&skip=${skip}`
        );
        const { posts, total } = await response.json();

        this.state.total = total;
        this.render(posts);
        this.renderPagination();
    },

    render(posts) {
        const postListEl = document.querySelector('.js-post-list');
        const html = posts.map((post) => `
        <div class="mb-3 pb-3 border-gray-200 border-b">
            <h3 class="mb-2 text-xl">${post.title}</h3>
            <p>${post.body}</p>
            <div class="flex gap-3 mt-3">
                ${post.tags.map(tag => `<span class="px-3 py-1 bg-white border border-gray-200">${tag}</span>`).join('')}
            </div>
        </div>
      `).join('');
        postListEl.innerHTML = html;
    },

    renderPagination() {
        const { page, limit, total } = this.state;
        const totalPages = Math.ceil(total / limit);
        const paginationEl = document.querySelector('.js-pagination');

        if (totalPages <= 1) {
            paginationEl.innerHTML = '';
            return;
        }

        const btn = (label, targetPage, { disabled = false, active = false } = {}) => `
            <button
                data-page="${targetPage}"
                ${disabled ? 'disabled' : ''}
                class="px-3 py-1 border border-gray-200 ${active ? 'bg-blue-500 text-white' : 'bg-white'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}">
                ${label}
            </button>`;

        // Hiển thị tối đa 5 trang quanh trang hiện tại
        const start = Math.max(1, page - 2);
        const end = Math.min(totalPages, start + 4);

        let html = btn('«', page - 1, { disabled: page === 1 });
        for (let i = start; i <= end; i++) {
            html += btn(i, i, { active: i === page });
        }
        html += btn('»', page + 1, { disabled: page === totalPages });

        paginationEl.innerHTML = html;
    },

    paginationEvent() {
        const paginationEl = document.querySelector('.js-pagination');
        // Event delegation: chỉ cần gắn 1 lần, nút render lại vẫn hoạt động
        paginationEl.addEventListener('click', (e) => {
            const button = e.target.closest('button[data-page]');
            if (!button || button.disabled) return;

            this.state.page = Number(button.dataset.page);
            this.getPosts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    debounce(callback, timeout = 500) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => callback(...args), timeout);
        };
    },

    searchEvent() {
        const searchEl = document.querySelector('.js-search');
        searchEl.addEventListener('input', this.debounce(() => {
            this.state.q = searchEl.value;
            this.state.page = 1; // tìm kiếm mới thì quay về trang 1
            this.getPosts();
        }, 1000));
    },

    start() {
        this.getPosts();
        this.searchEvent();
        this.paginationEvent();
    }
};

app.start();