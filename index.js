module.exports = function() {
  return {
    visitor: {
      ImportDeclaration(path) {
        const source = path.node.source;
        source.value = source.value.replace(/^lodash($|\/)/, 'lodash-es$1');
      },
      CallExpression({ node }) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments.length &&
          node.arguments[0].value
        ) {
          node.arguments[0].value = node.arguments[0].value.replace(/^lodash($|\/)/, 'lodash-es$1');
        }
      },
    },
  };
};
