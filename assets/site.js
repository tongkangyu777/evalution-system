"use strict";

const configuredAddress = window.LAB_REVIEW_BACKEND;
if (typeof configuredAddress === "string" && configuredAddress.trim()) {
  const status = document.getElementById("connection-status");
  try {
    const backend = new URL(configuredAddress.trim());
    if (backend.protocol !== "https:" || backend.username || backend.password ||
        backend.pathname !== "/" || backend.search || backend.hash) {
      throw new Error("Expected the HTTPS origin of the scoring system.");
    }

    for (const link of document.querySelectorAll("[data-route]")) {
      link.href = new URL(link.dataset.route, backend.origin).href;
      link.hidden = false;
    }
    status.classList.add("is-configured");
    status.textContent = "进入后，请使用课题组发放的登录信息。";
  } catch {
    status.textContent = "评分系统地址格式有误，请管理员填写正式后台的 HTTPS 站点地址。";
  }
}
