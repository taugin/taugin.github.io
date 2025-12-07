# 在线工具箱

![项目预览](https://placehold.co/800x400?text=Online+Tools+Preview)

一个纯前端实现的在线工具集合网站，部署在 GitHub Pages 上，提供各种实用的小工具，无需后端支持即可使用。

## 功能列表

### 已实现工具

- ✅ **JSON 格式校验器** - 校验、格式化和压缩 JSON 数据
- ✅ **Base64 编解码器** - 快速进行 Base64 编码和解码操作
- ✅ **URL 编解码器** - 对 URL 进行编码和解码处理
- ✅ **正则表达式测试器** - 在线测试正则表达式并查看匹配结果
- ✅ **Markdown 转 HTML** - 将 Markdown 文本转换为 HTML 格式

### 计划中工具

- 🔄 **文本格式化工具** - 大小写转换、空格处理等
- 🔄 **时间戳转换器** - Unix 时间戳与日期时间互转
- 🔄 **密码哈希生成器** - MD5、SHA 系列哈希计算
- 🔄 **代码美化工具** - CSS、JavaScript 代码格式化

## 预览图

### 首页
![首页预览](https://placehold.co/800x500?text=Home+Page+Preview)

### 工具页面示例
<div style="display: flex; justify-content: space-around;">
  <img src="https://placehold.co/400x300?text=JSON+Validator" alt="JSON 校验器" width="32%" />
  <img src="https://placehold.co/400x300?text=Base64+Encoder" alt="Base64 编解码器" width="32%" />
  <img src="https://placehold.co/400x300?text=Regex+Tester" alt="正则表达式测试器" width="32%" />
</div>

## 如何本地运行

1. 克隆项目到本地：
   ```bash
   git clone https://github.com/taugin/taugin.github.io.git
   ```

2. 进入项目目录：
   ```bash
   cd taugin.github.io
   ```

3. 使用本地服务器运行项目：
   - 方法一：使用 VS Code Live Server 插件
   - 方法二：使用 Python 简单服务器：
     ```bash
     python -m http.server 8000
     ```
   - 方法三：使用 Node.js http-server：
     ```bash
     npx http-server
     ```

4. 在浏览器中访问 `http://localhost:8000` 查看网站

## 如何新增工具

1. 在 `tools/` 目录下创建新的 HTML 文件，例如 `new-tool.html`

2. 参考现有工具的结构和样式：
   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>新工具 - 在线工具箱</title>
     <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
   </head>
   <body>
     <!-- 工具内容 -->
   </body>
   </html>
   ```

3. 在首页 `index.html` 中添加新工具的卡片：
   ```html
   <div class="tool-card bg-white rounded-lg shadow overflow-hidden">
     <div class="p-6">
       <div class="flex items-center mb-4">
         <div class="flex-shrink-0 bg-indigo-100 rounded-md p-3">
           <svg class="w-6 h-6 text-indigo-600"><!-- 图标 --></svg>
         </div>
         <h3 class="ml-4 text-lg font-medium text-gray-900">新工具名称</h3>
       </div>
       <p class="text-gray-500 text-base mb-4">
         工具描述
       </p>
       <a href="tools/new-tool.html" class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
         立即使用
         <svg><!-- 箭头图标 --></svg>
       </a>
     </div>
   </div>
   ```

4. 在 `docs/` 目录下创建相应的文档说明文件

5. 更新 `README.md` 中的功能列表

## 技术栈说明

- **HTML5** - 页面结构和语义化标记
- **Tailwind CSS** - 用于快速构建响应式界面的 CSS 框架
- **原生 JavaScript** - 实现交互逻辑，无额外依赖
- **GitHub Pages** - 静态网站托管服务
- **Markdown** - 文档编写格式

### 设计原则

- 纯前端实现，所有处理在浏览器端完成
- 响应式设计，适配移动端和桌面端
- 简洁直观的用户界面
- 快速加载和流畅交互
- 数据隐私保护，用户数据不会上传到服务器

## 未来规划

### 短期计划
- [ ] 完善现有工具的功能和用户体验
- [ ] 增加工具收藏和历史记录功能
- [ ] 实现深色模式支持
- [ ] 添加工具使用统计和热门工具推荐

### 中期计划
- [ ] 增加更多实用工具（文本处理、时间转换、加密解密等）
- [ ] 实现工具分类和标签系统
- [ ] 添加工具搜索和过滤功能
- [ ] 支持键盘快捷键操作

### 长期计划
- [ ] 开发 PWA 版本，支持离线使用
- [ ] 实现工具插件化架构
- [ ] 增加多语言支持
- [ ] 提供 API 接口供外部调用

## 开源协议

本项目采用 MIT 协议开源，详细信息请查看 [LICENSE](LICENSE) 文件。

```
MIT License

Copyright (c) 2023 taugin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```