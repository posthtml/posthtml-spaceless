import parser from 'posthtml-parser';
import render from 'posthtml-render';

const clean = tree => tree
	.filter(node => typeof node === 'object' || (typeof node === 'string' && (node.trim().length !== 0 || /doctype/gi.test(node))))
	.map(node => {
		if (Object.prototype.hasOwnProperty.call(node, 'content')) {
			node.content = clean(node.content);
		}

		return node;
	});

const spaceless = tree => tree.match({tag: 'spaceless'}, node => {
	node.tag = false;
	return clean(parser(render(node).trim()));
});

const cloneClassTo = tree => Promise.resolve(tree).then(tree => spaceless(tree)).then(tree => tree);

export default () => {
	return tree => new Promise((resolve, reject) => {
		if (!Array.isArray(tree)) {
			reject(new Error(`tree is not Array`));
		}

		if (tree.length === 0) {
			resolve(tree);
		}

		resolve(cloneClassTo(tree));
	});
};
