import ReactDOMServer from 'react-dom/server';

/**
 * Split on highlight term and include term into parts, ignore case
 * Code snippet adapted from https://stackoverflow.com/a/43235785
 * @param {*} text
 * @param {*} highlight
 * @returns requested parts are highlighted with <b>
 */
function getHighlightedText(text, highlight) {
  const lowerHighlight = highlight
    .map((h) => h.toLowerCase())
    .filter((h) => h.length > 1);
  const compile = new RegExp(`(${lowerHighlight.join('|')})`, 'g');
  const parts = text.split(compile);
  console.log('parts', parts);
  console.log('lowerHighlight', lowerHighlight);
  return (
    <span>
      {' '}
      {parts.map((part, i) =>
        lowerHighlight.includes(part.toLowerCase()) ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}{' '}
    </span>
  );
}

function getLineBreakText(text) {
  // console.log('getlinebreak', text, ReactDOMServer.renderToString(text));
  // return ReactDOMServer.renderToString(text)
  return text.split('\n').map((str, i) => (
    <span key={i} style={{ display: 'block' }}>
      {str}
    </span>
  ));
}

var desanitizeText = (function () {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g,
    translate = {
      nbsp: String.fromCharCode(160),
      amp: '&',
      quot: '"',
      lt: '<',
      gt: '>',
    },
    translator = function ($0, $1) {
      return translate[$1];
    };

  return function (s) {
    return s.replace(translate_re, translator);
  };
})();

function debackslash(text) {
  return text.replace(/\\/g, '');
}

/**
 * Get text content of JSX element
 * Code snippet from https://stackoverflow.com/a/60564620
 * @param {*} node JSX element node
 * @returns String of the text content
 */
function getNodeText(node) {
  if (['string', 'number'].includes(typeof node)) return node;
  if (node instanceof Array) return node.map(getNodeText).join('');
  if (typeof node === 'object' && node) return getNodeText(node.props.children);
}

function decodeNewline(text, multiplier) {
  return text.replace(/\\n/g, '\n'.repeat(multiplier));
}

// sessionStorage를 쉽게 사용하게 해주는 함수
// ex) const [getCart, addCart] = useSessionStorage('riskoutShoppingCart');
const useSessionStorage = (key) => {
  const getStorage = () =>
    sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : [];
  const isInStorage = (item) => getStorage().indexOf(item) !== -1;
  const addStorage = (item) => {
    const sto = getStorage();
    sto.push(item);
    sessionStorage.setItem(key, JSON.stringify(sto));
  };
  const removeStorage = (item) => {
    const sto: Array = getStorage();
    var index = sto.indexOf(item);
    if (index !== -1) {
      sto.splice(index, 1);
    }
    sessionStorage.setItem(key, JSON.stringify(sto));
  };
  return [getStorage, addStorage, removeStorage, isInStorage];
};

export {
  getHighlightedText,
  getLineBreakText,
  getNodeText,
  decodeNewline as replaceNewline,
  useSessionStorage,
  desanitizeText,
  debackslash,
};
