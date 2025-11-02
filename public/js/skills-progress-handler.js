// 全局技能页面进度条动画处理脚本
// 该脚本处理技能页面中进度条的动画效果，确保在各种导航场景下都能正确触发动画

(() => {
	// 存储已初始化的进度条，防止重复初始化
	const initializedBars = new Set();

	// 处理进度条动画的函数
	function handleProgressAnimation() {
		// 查找所有带有 data-final-width 属性的进度条元素
		const progressBars = document.querySelectorAll(
			"[data-final-width]:not(.animated)",
		);

		if (progressBars.length === 0) return;

		// 使用 Intersection Observer 确保元素可见时才触发动画
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const bar = entry.target;

						// 检查是否已经初始化过
						if (initializedBars.has(bar)) {
							observer.unobserve(bar);
							return;
						}

						const finalWidth = bar.getAttribute("data-final-width");
						if (finalWidth) {
							// 设置CSS变量
							bar.style.setProperty("--final-width", finalWidth);

							// 添加动画类
							bar.classList.add("skill-progress-bar-animate");

							// 标记为已初始化
							initializedBars.add(bar);

							// 添加animated类防止重复触发动画
							bar.classList.add("animated");
						}

						observer.unobserve(bar);
					}
				});
			},
			{
				threshold: 0.1, // 当元素10%可见时触发
			},
		);

		// 观察所有进度条元素
		progressBars.forEach((bar) => {
			observer.observe(bar);
		});
	}

	// 清理函数，用于页面切换时清理已初始化的进度条
	function cleanupProgressBars() {
		initializedBars.clear();

		// 移除所有进度条的animated类，以便下次可以重新触发动画
		const animatedBars = document.querySelectorAll(
			".skill-progress-bar-animate.animated",
		);
		animatedBars.forEach((bar) => {
			bar.classList.remove("skill-progress-bar-animate");
			bar.classList.remove("animated");

			// 重置宽度
			if (bar.style) {
				bar.style.width = "0%";
			}
		});
	}

	// 初始化进度条动画功能的函数
	function initProgressAnimation() {
		// 延迟执行以确保元素已正确渲染
		setTimeout(handleProgressAnimation, 100);
	}

	// 如果使用SWUP，监听其事件
	function setupSwupListeners() {
		if (typeof window !== "undefined" && window.swup) {
			const swup = window.swup;
			
			// 监听 SWUP 开始过渡事件
			swup.hooks.on("animation:out:start", () => {
				cleanupProgressBars();
			});

			// 监听 SWUP 内容替换事件
			swup.hooks.on("content:replace", () => {
				cleanupProgressBars();
				// 延迟初始化以确保DOM完全更新
				setTimeout(initProgressAnimation, 50);
			});

			// 监听 SWUP 页面视图事件
			swup.hooks.on("page:view", () => {
				cleanupProgressBars();
				setTimeout(initProgressAnimation, 100);
			});
			
			// 监听 SWUP 动画进入结束事件
			swup.hooks.on("animation:in:end", () => {
				setTimeout(initProgressAnimation, 100);
			});
			
			console.log("Swup skills progress listeners registered");
			return true;
		}
		return false;
	}
	
	// 延迟设置Swup监听器，确保Swup已初始化
	setTimeout(() => {
		if (!setupSwupListeners()) {
			// 如果Swup尚未初始化，延迟重试
			let retryCount = 0;
			const maxRetries = 10;
			const retryInterval = setInterval(() => {
				if (setupSwupListeners()) {
					clearInterval(retryInterval);
				} else if (++retryCount >= maxRetries) {
					clearInterval(retryInterval);
					console.log("Swup not found, using fallback listeners");
				}
			}, 100);
		}
	}, 200);

	// 增强对 Astro 导航的支持
	document.addEventListener("astro:page-load", () => {
		cleanupProgressBars();
		setTimeout(initProgressAnimation, 100);
	});

	document.addEventListener("astro:after-swap", () => {
		cleanupProgressBars();
		setTimeout(initProgressAnimation, 100);
	});

	// 暴露初始化函数到全局作用域，供其他脚本调用
	window.initSkillsProgressAnimation = initProgressAnimation;
	window.cleanupSkillsProgressBars = cleanupProgressBars;

	// 初始化和事件绑定
	// 如果页面已经加载完成，立即初始化
	if (document.readyState === "complete") {
		initProgressAnimation();
	} else if (document.readyState === "interactive") {
		// DOM 已经加载完成但资源可能还在加载
		initProgressAnimation();
	} else {
		// DOM 还在加载中，等待加载完成
		document.addEventListener("DOMContentLoaded", initProgressAnimation);
	}
})();
