export default function decorate(block) {
    const script = document.createElement('script');
    script.textContent = 'setTimeout(() => window.close(), 1000);';
    block.append(script);
}
