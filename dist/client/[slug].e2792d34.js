import { S as SvelteComponent, i as init, s as safe_not_equal, h as space, e as element, t as text, j as claim_text, c as claim_element, a as children, d as detach, b as attr, f as insert, g as append, v as set_data, n as noop } from './index.4e3102a5.js';

/* src/routes/blog/[slug].svelte generated by Svelte v3.9.1 */

function create_fragment(ctx) {
	var title_value, t0, h1, t1_value = ctx.post.title + "", t1, t2, div, raw_value = ctx.post.html + "";

	document.title = title_value = ctx.post.title;

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			this.h();
		},

		l(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			this.h();
		},

		h() {
			attr(div, "class", "content svelte-gnxal1");
		},

		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p(changed, ctx) {
			if ((changed.post) && title_value !== (title_value = ctx.post.title)) {
				document.title = title_value;
			}

			if ((changed.post) && t1_value !== (t1_value = ctx.post.title + "")) {
				set_data(t1, t1_value);
			}

			if ((changed.post) && raw_value !== (raw_value = ctx.post.html + "")) {
				div.innerHTML = raw_value;
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(div);
			}
		}
	};
}

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].html
	const res = await this.fetch(`blog/${params.slug}.json`);
	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;

	$$self.$set = $$props => {
		if ('post' in $$props) $$invalidate('post', post = $$props.post);
	};

	return { post };
}

class Slug extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["post"]);
	}
}

export default Slug;
export { preload };
