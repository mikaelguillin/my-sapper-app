import { S as SvelteComponent, i as init, s as safe_not_equal, h as space, e as element, t as text, j as claim_text, c as claim_element, a as children, d as detach, b as attr, f as insert, g as append, n as noop } from './index.4e3102a5.js';

/* src/routes/index.svelte generated by Svelte v3.9.1 */

function create_fragment(ctx) {
	var t0, h1, t1, t2, figure, figcaption, t3, t4, p, strong, t5;

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Great success!");
			t2 = space();
			figure = element("figure");
			figcaption = element("figcaption");
			t3 = text("HIGH FIVE!");
			t4 = space();
			p = element("p");
			strong = element("strong");
			t5 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},

		l(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Great success!");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			figure = claim_element(nodes, "FIGURE", { class: true }, false);
			var figure_nodes = children(figure);

			figcaption = claim_element(figure_nodes, "FIGCAPTION", {}, false);
			var figcaption_nodes = children(figcaption);

			t3 = claim_text(figcaption_nodes, "HIGH FIVE!");
			figcaption_nodes.forEach(detach);
			figure_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			strong = claim_element(p_nodes, "STRONG", {}, false);
			var strong_nodes = children(strong);

			t5 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(detach);
			p_nodes.forEach(detach);
			this.h();
		},

		h() {
			document.title = "Sapper project template";
			attr(h1, "class", "svelte-1kk9opm");
			attr(figure, "class", "svelte-1kk9opm");
			attr(p, "class", "svelte-1kk9opm");
		},

		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, figure, anchor);
			append(figure, figcaption);
			append(figcaption, t3);
			insert(target, t4, anchor);
			insert(target, p, anchor);
			append(p, strong);
			append(strong, t5);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(figure);
				detach(t4);
				detach(p);
			}
		}
	};
}

class Index extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;