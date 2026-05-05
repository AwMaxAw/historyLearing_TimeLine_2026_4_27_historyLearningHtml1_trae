document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('timeline-events');
    
    // 渲染事件卡片
    function renderEvents() {
        if (!historyEvents || historyEvents.length === 0) {
            eventsContainer.innerHTML = '<p style="text-align:center; padding: 2rem;">暂无历史事件数据</p>';
            return;
        }

        eventsContainer.innerHTML = '';
        
        let eventCount = 0;
        historyEvents.forEach((event, index) => {
            const card = document.createElement('div');
            
            if (event.type === 'summary') {
                card.className = `summary-node`;
                card.innerHTML = `
                    <div class="summary-inner">
                        <h3>${event.title}</h3>
                        <p>${event.content}</p>
                    </div>
                `;
            } else {
                const side = eventCount % 2 === 0 ? 'left' : 'right';
                eventCount++;
                card.className = `event-card ${side}`;
                card.setAttribute('data-index', index);
                card.innerHTML = `
                    <div class="event-node"></div>
                    <div class="event-header">
                        <span class="event-year">${event.year}</span>
                        <span class="event-title">${event.title}</span>
                    </div>
                    <div class="event-content">
                        <span class="section-title">【内容详情】</span>
                        <p class="summary-text">${event.summary}</p>
                        
                        ${event.significance ? `
                        <span class="section-title">【历史意义】</span>
                        <p class="significance-text">${event.significance}</p>
                        ` : ''}
                        
                        <div class="exam-points">
                            <span class="section-title" style="margin-top:0; color:#e67e22;">【核心要点】</span>
                            <p><strong>${event.examPoints}</strong></p>
                        </div>
                    </div>
                `;
                
                // 点击事件：展开/收起
                card.addEventListener('click', () => {
                    card.classList.toggle('active');
                });
            }

            eventsContainer.appendChild(card);
        });
    }

    // 初始化渲染
    renderEvents();

    // 滚动动画效果
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 监听所有卡片和总结节点
    document.querySelectorAll('.event-card, .summary-node').forEach(node => {
        node.style.opacity = '0';
        node.style.transform = 'translateY(20px)';
        node.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(node);
    });
});
