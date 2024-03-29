// @ts-ignore
import mermaid from 'mermaid/dist/mermaid'
import markdown from 'markdown-it'

const isWindow = typeof window === 'object'

function mermaidPlugin(md: markdown) {
  const rules = md.renderer.rules
  const originalLogic = rules.fence ? rules.fence.bind(md.renderer.rules) : undefined
  rules.fence = (tokens, idx, ...rest) => {
    const token = tokens[idx];
    const { info, content } = token;
    if (info.trim() === "mermaid") {
      try {
        mermaid.parse(content);
        if (isWindow) {
          setTimeout(() => {
            mermaid.init('.mermaid')
          }, 0);
        }
        return `<div class="mermaid">${content}</div>`;
      } catch ({ str, hash }) {
        return `<pre class="mermaid-error">${str}</pre>`;
      }
    } else {
      return originalLogic ? originalLogic(tokens, idx, ...rest) : ''
    }
  };
}

export default mermaidPlugin