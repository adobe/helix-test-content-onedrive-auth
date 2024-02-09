export default function decorate(block) {
    block.innerHTML = `<h1>Login successful</h1><p>Close this tab to proceed...</p>`;
    const script = document.createElement('script');
    script.textContent = 'setTimeout(() => window.close(), 1000);';
    block.append(script);
}
