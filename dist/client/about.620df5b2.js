import { S as SvelteComponent, i as init, s as safe_not_equal, h as space, e as element, t as text, j as claim_text, c as claim_element, a as children, d as detach, f as insert, g as append, n as noop } from './index.4e3102a5.js';

/* src/routes/about.svelte generated by Svelte v3.9.1 */

function create_fragment(ctx) {
	var t0, h1, t1, t2, p, t3;

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About this site");
			t2 = space();
			p = element("p");
			t3 = text("This is the 'about' page. There's not much here.");
			this.h();
		},

		l(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "About this site");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
			p_nodes.forEach(detach);
			this.h();
		},

		h() {
			document.title = "About";
		},

		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, t3);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(p);
			}
		}
	};
}

class About extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default About;
