document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.createElement("div");
    navbar.style.cssText = "background: #1a202c; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; color: #fff; font-family: sans-serif; font-size: 14px; position: relative; z-index: 9999;";
    navbar.innerHTML = `
        <span style="font-weight: bold;">🌐 Red Mecánica Social</span>
        <div>
            <a href="https://github.io" style="color: #fff; text-decoration: none; margin-left: 15px; font-weight: bold;">💼 Institucional</a>
            <a href="https://github.io" style="color: #cbd5e0; text-decoration: none; margin-left: 15px;">🏫 Escuela</a>
            <a href="https://github.io" style="color: #cbd5e0; text-decoration: none; margin-left: 15px;">📚 Biblioteca</a>
        </div>
    `;
    document.body.insertBefore(navbar, document.body.firstChild);
});
