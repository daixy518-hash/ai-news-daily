// News data
const newsData = [
    {
        id: 1,
        title: "OpenAI发布GPT-5.5新一代模型",
        source: "量子位",
        date: "2026-04-27",
        summary: "GPT-5.5被宣传为"新型智能"，擅长智能体编程和计算机操作。OpenAI称这是迄今发布最好的模型，通用人工智能不再是理论性的。",
        tags: ["大模型", "OpenAI", "AGI"],
        url: "https://www.qbitai.com"
    },
    {
        id: 2,
        title: "DeepSeek被曝首次融资，估值超100亿美元",
        source: "虎嗅",
        date: "2026-04-17",
        summary: "据报道，DeepSeek正在寻求至少3亿美元的首轮外部融资，估值超100亿美元。核心原因是人才流失和产品延期。",
        tags: ["融资", "DeepSeek"],
        url: "https://www.huxiu.com"
    },
    {
        id: 3,
        title: "中国科学院发布"磐石100"模型体系",
        source: "量子位",
        date: "2026-04-28",
        summary: "中科院发布"磐石100"模型体系，推动AI赋能科学研究从"单兵作战"迈向"集团冲锋"，已在中国科学院50余家单位推广应用。",
        tags: ["科研", "中科院", "大模型"],
        url: "https://www.qbitai.com"
    },
    {
        id: 4,
        title: "腾讯混元3.0（Hy3）全球上线",
        source: "InfoQ",
        date: "2026-04-23",
        summary: "腾讯正式上线混元3.0，编程能力从53%跃升至74.4%。姚顺雨加盟腾讯后首款自研模型，采用MoE混合专家架构。",
        tags: ["腾讯", "大模型", "编程"],
        url: "https://www.infoq.cn"
    },
    {
        id: 5,
        title: "小米开源MiMo-V2.5系列模型",
        source: "机器之心",
        date: "2026-04-24",
        summary: "小米开源罗福莉带队研发的MiMo-V2.5系列模型，开源首日完成与5家国产芯片的适配，在多项基准评测中超越DeepSeek-V4-Pro。",
        tags: ["小米", "开源", "大模型"],
        url: "https://www.jiqizhixin.com"
    },
    {
        id: 6,
        title: "谷歌宣布投入1850亿美元发展AI",
        source: "极客公园",
        date: "2026-04-23",
        summary: "谷歌CEO宣布投入1750-1850亿美元资本支出用于AI基础设施，内部75%新增代码由AI生成，全面转向智能体工作流。",
        tags: ["谷歌", "投资", "Agent"],
        url: "https://www.geekpark.net"
    },
    {
        id: 7,
        title: "微软与OpenAI合作松绑",
        source: "36氪",
        date: "2026-04-27",
        summary: "微软放弃OpenAI独家销售权，亚马逊等云平台将可销售OpenAI模型。OpenAI估值8520亿美元，计划2026年四季度IPO。",
        tags: ["微软", "OpenAI", "合作"],
        url: "https://36kr.com"
    },
    {
        id: 8,
        title: "智元机器人举办2026合作伙伴大会",
        source: "晚点",
        date: "2026-04-17",
        summary: "智元机器人发布4个本体新品、4个AI大模型、7个解决方案。第10000台机器人已下线，2026年为通用具身机器人规模化落地元年。",
        tags: ["机器人", "具身智能", "智元"],
        url: "https://www.latepost.com"
    },
    {
        id: 9,
        title: "量智开物成立，加码AI+量子融合",
        source: "量子位",
        date: "2026-04-22",
        summary: "科大讯飞与清华大学量子计算团队合资成立量智开物，成为国内首家专注于"AI+量子"深度融合的公司，解决算力与能耗瓶颈。",
        tags: ["量子计算", "科大讯飞", "清华"],
        url: "https://www.qbitai.com"
    },
    {
        id: 10,
        title: "Kimi K2.6发布，100个Agent蜂群模式",
        source: "机器之心",
        date: "2026-04-20",
        summary: "月之暗面发布Kimi K2.6，演进方向从单模型性能提升转向构建具备任务接管、流程编排与多Agent协同能力的系统级架构。",
        tags: ["Kimi", "Agent", "月之暗面"],
        url: "https://www.jiqizhixin.com"
    },
    {
        id: 11,
        title: "群核科技登陆港股，"杭州六小龙"首家上市",
        source: "晚点",
        date: "2026-04-17",
        summary: "群核科技登陆港股，成为"杭州六小龙"中第一家上市企业。黄晓煌说：活下来比活得亮眼重要。",
        tags: ["上市", "群核科技", "创业"],
        url: "https://www.latepost.com"
    },
    {
        id: 12,
        title: "星海图完成20亿元B+轮融资",
        source: "极客公园",
        date: "2026-04-02",
        summary: "具身智能公司星海图完成20亿元B+轮融资，估值突破200亿元。市场判断具身智能的scaling拐点已经出现。",
        tags: ["融资", "具身智能", "机器人"],
        url: "https://www.geekpark.net"
    }
];

// Current filter state
let currentTag = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    setupEventListeners();
});

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderNews();
    });

    // Tag filters
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentTag = tag.dataset.tag;
            renderNews();
        });
    });
}

function renderNews() {
    const newsList = document.getElementById('newsList');

    // Filter news
    const filteredNews = newsData.filter(news => {
        const matchesTag = currentTag === 'all' || news.source === currentTag;
        const matchesSearch = searchQuery === '' ||
            news.title.toLowerCase().includes(searchQuery) ||
            news.summary.toLowerCase().includes(searchQuery) ||
            news.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        return matchesTag && matchesSearch;
    });

    // Sort by date (newest first)
    filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render
    if (filteredNews.length === 0) {
        newsList.innerHTML = `
            <div class="empty-state">
                <p>没有找到相关资讯</p>
            </div>
        `;
        return;
    }

    newsList.innerHTML = filteredNews.map(news => `
        <article class="news-item">
            <div class="news-header">
                <span class="news-source">${news.source}</span>
                <span class="news-date">${formatDate(news.date)}</span>
            </div>
            <h3 class="news-title">
                <a href="${news.url}" target="_blank">${news.title}</a>
            </h3>
            <p class="news-summary">${news.summary}</p>
            <div class="news-footer">
                <div class="news-tags">
                    ${news.tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
                </div>
                <a href="${news.url}" target="_blank" class="news-link">阅读原文 →</a>
            </div>
        </article>
    `).join('');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
