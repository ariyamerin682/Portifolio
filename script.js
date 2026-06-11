const styleToRemove = `        /* Cursor Spotlight */
        .cursor-glow {
            position: fixed;
            top: -300px;
            left: -300px;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, rgba(121, 40, 202, 0.05) 40%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            transition: top 0.1s ease-out, left 0.1s ease-out;
        }`;
    content = content.replace(styleToRemove, '');

    // Remove cursor glow script
    const scriptToRemove = `        document.addEventListener('mousemove', (e) => {
            const glow = document.querySelector('.cursor-glow');
            if (glow) {
                requestAnimationFrame(() => {
                    glow.style.top = (e.clientY - 300) + 'px';
                    glow.style.left = (e.clientX - 300) + 'px';
                });
            }
        });`;
    content = content.replace(scriptToRemove, '');

    fs.writeFileSync(file, content);
    console.log('Removed glow from ' + file);