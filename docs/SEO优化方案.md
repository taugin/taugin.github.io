# 静态网站 SEO 优化方案

## 1. Meta 标签优化

### 1.1 基础 Meta 标签

每个页面都应该包含以下基础 meta 标签：

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>页面标题 - 在线工具箱</title>
<meta name="description" content="页面描述内容">
<meta name="keywords" content="关键词1, 关键词2, 关键词3">
<meta name="author" content="在线工具箱">
<meta name="robots" content="index, follow">
```

### 1.2 首页 Meta 标签示例

```html
<title>在线工具箱 - 实用的在线小工具集合</title>
<meta name="description" content="提供各种实用的在线小工具，包括JSON校验、Base64编解码、URL编解码、正则测试器、Markdown转HTML等。纯前端实现，无需安装，即用即走。">
<meta name="keywords" content="在线工具, JSON校验, Base64, URL编码, 正则表达式, Markdown转HTML, 实用工具">
```

### 1.3 工具页面 Meta 标签示例

```html
<!-- JSON 校验器页面 -->
<title>JSON 格式校验器 - 在线工具箱</title>
<meta name="description" content="免费的在线 JSON 格式校验工具，支持 JSON 格式验证、美化和压缩。快速检测 JSON 语法错误并提供详细错误信息。">

<!-- Base64 编解码器页面 -->
<title>Base64 编解码 - 在线工具箱</title>
<meta name="description" content="在线 Base64 编码和解码工具，支持各类文本和数据的快速转换。纯前端实现，数据安全不上传。">
```

## 2. Open Graph 标签

### 2.1 基础 Open Graph 标签

```html
<meta property="og:title" content="页面标题 - 在线工具箱">
<meta property="og:description" content="页面描述内容">
<meta property="og:type" content="website">
<meta property="og:url" content="https://taugin.github.io/page-url">
<meta property="og:image" content="https://taugin.github.io/assets/images/og-image.jpg">
<meta property="og:site_name" content="在线工具箱">
<meta property="og:locale" content="zh_CN">
```

### 2.2 Twitter Card 标签

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="页面标题 - 在线工具箱">
<meta name="twitter:description" content="页面描述内容">
<meta name="twitter:image" content="https://taugin.github.io/assets/images/twitter-image.jpg">
<meta name="twitter:site" content="@your_twitter_handle">
```

## 3. 每个工具页面自动生成独立 title/description 的方法

### 3.1 模板化方法

为每个工具页面创建统一的模板，在页面头部手动设置特定的 title 和 description：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{tool_name}} - 在线工具箱</title>
  <meta name="description" content="{{tool_description}}。纯前端实现，数据安全不上传。">
  <meta name="keywords" content="{{tool_keywords}}, 在线工具, 实用工具">
  
  <!-- Open Graph Tags -->
  <meta property="og:title" content="{{tool_name}} - 在线工具箱">
  <meta property="og:description" content="{{tool_description}}">
  <meta property="og:url" content="https://taugin.github.io/tools/{{tool_slug}}.html">
  
  <!-- Twitter Card -->
  <meta name="twitter:title" content="{{tool_name}} - 在线工具箱">
  <meta name="twitter:description" content="{{tool_description}}">
</head>
<!-- ... rest of the page ... -->
</body>
</html>
```

### 3.2 JavaScript 动态设置方法

在页面加载时通过 JavaScript 动态设置页面标题和描述：

```javascript
// 工具页面配置
const toolConfig = {
  'json': {
    title: 'JSON 格式校验器',
    description: '免费的在线 JSON 格式校验工具，支持 JSON 格式验证、美化和压缩。快速检测 JSON 语法错误并提供详细错误信息。',
    keywords: 'JSON校验, JSON格式化, JSON压缩, JSON解析'
  },
  'base64': {
    title: 'Base64 编解码',
    description: '在线 Base64 编码和解码工具，支持各类文本和数据的快速转换。纯前端实现，数据安全不上传。',
    keywords: 'Base64编码, Base64解码, 编码解码, 数据转换'
  }
};

// 获取当前页面标识
const currentPage = getCurrentPageIdentifier();

// 设置页面标题和描述
if (toolConfig[currentPage]) {
  document.title = `${toolConfig[currentPage].title} - 在线工具箱`;
  document.querySelector('meta[name="description"]').setAttribute('content', toolConfig[currentPage].description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', `${toolConfig[currentPage].keywords}, 在线工具, 实用工具`);
  
  // 设置 Open Graph 标签
  document.querySelector('meta[property="og:title"]').setAttribute('content', `${toolConfig[currentPage].title} - 在线工具箱`);
  document.querySelector('meta[property="og:description"]').setAttribute('content', toolConfig[currentPage].description);
}
```

## 4. 站点地图 sitemap.xml 生成方案

### 4.1 手动创建 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://taugin.github.io/</loc>
    <lastmod>2023-12-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://taugin.github.io/tools/json.html</loc>
    <lastmod>2023-12-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://taugin.github.io/tools/base64.html</loc>
    <lastmod>2023-12-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://taugin.github.io/tools/urlencode.html</loc>
    <lastmod>2023-12-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://taugin.github.io/tools/regex.html</loc>
    <lastmod>2023-12-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://taugin.github.io/tools/markdown.html</loc>
    <lastmod>2023-12-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 4.2 自动化生成方案

可以使用 GitHub Actions 在每次部署时自动生成 sitemap.xml：

```yaml
name: Generate Sitemap

on:
  push:
    branches: [ main ]

jobs:
  generate-sitemap:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Generate Sitemap
        run: |
          # 安装 sitemap-generator
          npm install -g sitemap-generator-cli
          
          # 生成站点地图
          sitemap-generator https://taugin.github.io/ --output sitemap.xml
          
      - name: Commit and push
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add sitemap.xml
          git commit -m "Update sitemap.xml" || echo "No changes to commit"
          git push
```

## 5. Google Analytics 集成

### 5.1 GA4 集成代码

在每个页面的 `<head>` 部分添加以下代码：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5.2 工具使用事件跟踪

为了更好地分析用户行为，可以为工具使用添加事件跟踪：

```javascript
// 工具使用事件跟踪
document.getElementById('validateBtn').addEventListener('click', function() {
  gtag('event', 'tool_usage', {
    'event_category': 'JSON_Validator',
    'event_label': 'Validate_JSON',
    'value': 1
  });
});

document.getElementById('formatBtn').addEventListener('click', function() {
  gtag('event', 'tool_usage', {
    'event_category': 'JSON_Validator',
    'event_label': 'Format_JSON',
    'value': 1
  });
});
```

## 6. Lighthouse 性能优化建议

### 6.1 性能优化措施

1. **资源压缩**
   - 启用 Gzip 压缩（GitHub Pages 自动支持）
   - 压缩 CSS 和 JavaScript 文件
   - 优化图片大小和格式

2. **缓存策略**
   ```html
   <!-- 设置合适的缓存头 -->
   <meta http-equiv="Cache-Control" content="public, max-age=31536000">
   ```

3. **关键资源优先级**
   ```html
   <!-- 预加载关键资源 -->
   <link rel="preload" href="critical-script.js" as="script">
   <link rel="preload" href="critical-style.css" as="style">
   ```

4. **减少 DOM 元素**
   - 简化 HTML 结构
   - 避免深层嵌套

5. **优化 CSS 和 JavaScript**
   - 移除未使用的代码
   - 合并小型文件
   - 延迟加载非关键资源

### 6.2 可访问性优化

1. **语义化 HTML**
   ```html
   <main>
   <nav>
   <section>
   <article>
   <aside>
   <footer>
   ```

2. **ARIA 属性**
   ```html
   <button aria-label="清空输入">X</button>
   <div role="alert" aria-live="assertive">错误信息</div>
   ```

3. **键盘导航**
   - 确保所有交互元素可通过键盘访问
   - 合理设置 tab 顺序

### 6.3 最佳实践

1. **HTTPS**
   - GitHub Pages 自动提供 HTTPS

2. **移动友好**
   - 响应式设计
   - 触摸友好的按钮大小

3. **结构化数据**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "WebApplication",
     "name": "JSON 格式校验器",
     "description": "在线 JSON 格式校验工具",
     "url": "https://taugin.github.io/tools/json.html",
     "applicationCategory": "DeveloperApplication",
     "operatingSystem": "Any"
   }
   </script>
   ```

## 7. 实施计划

### 7.1 第一阶段（立即实施）
- 为所有页面添加完整的 meta 标签
- 添加 Open Graph 和 Twitter Card 标签
- 创建 sitemap.xml 并提交到搜索引擎

### 7.2 第二阶段（短期）
- 集成 Google Analytics
- 添加结构化数据
- 优化页面加载性能

### 7.3 第三阶段（长期）
- 实施自动化 SEO 工具
- 定期监控和优化 SEO 表现
- 根据用户行为数据调整优化策略