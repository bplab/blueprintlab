---
layout: page
title: news
description: Collection of BluePrintLAB news
order: 1
---

<section id="five">
<link rel="stylesheet" href="{{ "/assets/css/spotlight.css" | relative_url }}" />
{% for post in site.posts limit:10 %}{% if site.tiles-source == 'posts' %}
	<section class="spotlight">
		<div class="image">
			{% if post.image %}<a href="{{ post.url | relative_url }}" class="link">
				<picture>
					<source data-srcset="{{ "" | absolute_url }}/assets/images/{{ post.webp }}" type="image/webp">
					<source data-srcset="{{ "" | absolute_url }}/assets/images/{{ post.image }}" type="image/jpeg">
					<img data-src="{{ "" | absolute_url }}/assets/images/{{ post.image }}" class="lazyload" alt="{{ post.title }}">
				</picture>
			</a>{% endif %}
		</div>
		<div class="content">
			<h2><a href="{{ post.url | relative_url }}" class="link">{{ post.title }}</a></h2>
			<p>{{ post.description }}</p>
		</div>
	</section>
{% endif %}{% endfor %}
{% for page in site.pages limit:10 %}{% if site.tiles-source == 'pages' %}{% if page.layout == 'default' %}{% continue %}{% endif %}
	<section class="spotlight">
		<div class="image">
			{% if page.image %}<a href="{{ post.url | relative_url }}" class="link">
					<source data-srcset="{{ "" | absolute_url }}/assets/images/{{ post.webp }}" type="image/webp">
					<source data-srcset="{{ "" | absolute_url }}/assets/images/{{ post.image }}" type="image/jpeg">
					<img data-src="{{ "" | absolute_url }}/assets/images/{{ post.image }}" class="lazyload" alt="{{ post.title }}">
			</a>{% endif %}
		</div>
		<div class="content">
			<h2><a href="{{ page.url | relative_url }}" class="link">{{ page.title }}</a></h2>
			<p>{{ page.description }}</p>
		</div>
	</section>
{% endif %}{% endfor %}
</section>