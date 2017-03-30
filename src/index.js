import parser from 'posthtml-parser';
import render from 'posthtml-render';

const clean = tree => parser(render(tree))
	.filter(node => {
		return typeof node === 'object' || (typeof node === 'string' && (node.trim().length !== 0 || /doctype/gi.test(node)));
	})
	.map(node => {
		if (Object.prototype.hasOwnProperty.call(node, 'content')) {
			node.content = clean(node.content);
		}

		return typeof node === 'string' ? node.trim() : node;
	});

const spaceless = tree => tree.match({tag: 'spaceless'}, node => {
	node.tag = false;
	return clean(node);
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
