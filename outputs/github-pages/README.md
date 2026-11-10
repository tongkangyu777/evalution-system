# GitHub Pages 入口页上传说明

1. 把评分后台部署到运行 Python/Django 和数据库的服务器，确认学生及工作人员能打开该站点。
2. 编辑 `assets/config.js`，在空引号内填入后台的 HTTPS 站点地址。地址填写到域名或端口，学生入口和工作人员登录路径由页面生成。
3. 在 GitHub 仓库点击 **Add file → Upload files**。上传本目录内的 `index.html` 和整个 `assets` 目录，保持以下结构。

   ```text
   仓库根目录/
   ├── index.html
   └── assets/
       ├── config.js
       ├── site.css
       └── site.js
   ```

4. 点击 **Commit changes**，再到 **Settings → Pages → Deploy from a branch → main → /(root) → Save**。
5. 发布后打开 Pages 的网址，分别检查学生入口和教职工作台能否打开。

GitHub Pages 提供入口页，登录、评分、成绩查询和数据保存由正式后台处理。评分后台的数据库、名单、账号口令和配置密钥应留在后台部署环境。 [GitHub Pages 文档](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
