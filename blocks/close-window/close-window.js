export default function decorate(block) {
    block.innerHTML = `
    <h1>Login successful</h1>
    <p>Close this tab to proceed...</p>
    <script>setTimeout(() => window.close(), 500);</script>
    `;
}
