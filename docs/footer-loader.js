// 用于动态加载footer的JavaScript函数
async function loadFooter() {
  try {
    // 获取当前页面的路径，以确定相对路径
    const currentPath = window.location.pathname;
    // 计算到根目录的相对路径
    let basePath = '';
    if (currentPath.includes('/tools/')) {
      basePath = '../'; // 从tools目录返回根目录
    }
    // 构建正确的footer路径
    const footerPath = basePath + 'docs/footer.html';
    
    const response = await fetch(footerPath);
    const footerHtml = await response.text();
    
    // 找到页面中需要插入footer的容器
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      footerContainer.innerHTML = footerHtml;
    }
  } catch (error) {
    console.error('加载footer时出错:', error);
    // 如果动态加载失败，使用备用方法显示错误信息
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      footerContainer.innerHTML = '<footer class="bg-white mt-12"><div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"><div class="text-center text-base text-gray-400"><p>页面底部 - 加载页脚时出现问题</p></div></div></footer>';
    }
  }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  loadFooter();
});