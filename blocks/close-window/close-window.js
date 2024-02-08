export default function decorate(block) {
    const script = document.createElement('script');
    script.textContent = 'window.close();';
    block.append(script);
}
