---
layout: page
title: news
description: Collection of BluePrintLAB news
order: 1
---

<section id="news">
{% for post in site.posts limit:10 %}{% if site.tiles-source == 'posts' %}<section class="spotlight">
	<div class="image">
		{% if post.image %}<a href="{{ post.url | relative_url }}" class="link">
			<picture>
				<source srcset="{{ "" | absolute_url }}/assets/images/{{ post.webp }}" type="image/webp">
				<source srcset="{{ "" | absolute_url }}/assets/images/{{ post.image }}" type="image/jpeg">
				<img src="{{ "" | absolute_url }}/assets/images/{{ post.image }}" alt="{{ post.title }}">
			</picture>
		</a>{% endif %}
	</div>
	<div class="content">
		<h2><a href="{{ post.url | relative_url }}" class="link">{{ post.title }}</a></h2>
		<p>{{ post.description }}</p>
		<a href="{{ post.url | relative_url }}" class="more">
			<picture>
				<source data-srcset="{{site.baseurl}}/assets/images/arrow.webp" type="image/webp">
				<source data-srcset="{{site.baseurl}}/assets/images/arrow.jpg" type="image/jpeg">
				<img src="{{site.baseurl}}/assets/images/arrow.jpg" alt="More Arrow">
			</picture>
		</a>
	</div>
</section>
{% endif %}{% endfor %}
{% for page in site.pages limit:10 %}{% if site.tiles-source == 'pages' %}{% if page.layout == 'default' %}{% continue %}{% endif %}
<section class="spotlight">
	<div class="image">
		{% if page.image %}<a href="{{ post.url | relative_url }}" class="link">
				<source srcset="{{ "" | absolute_url }}/assets/images/{{ post.webp }}" type="image/webp">
				<source srcset="{{ "" | absolute_url }}/assets/images/{{ post.image }}" type="image/jpeg">
				<img src="{{ "" | absolute_url }}/assets/images/{{ post.image }}" alt="{{ post.title }}">
		</a>{% endif %}
	</div>
	<div class="content">
		<h2><a href="{{ page.url | relative_url }}" class="link">{{ page.title }}</a></h2>
		<p>{{ page.description }}</p>
		<a href="{{ post.url | relative_url }}" class="more">
			<picture>
				<source data-srcset="{{site.baseurl}}/assets/images/arrow.webp" type="image/webp">
				<source data-srcset="{{site.baseurl}}/assets/images/arrow.jpg" type="image/jpeg">
				<img src="{{site.baseurl}}/assets/images/arrow.jpg" alt="More Arrow">
			</picture>
		</a>
	</div>
</section>{% endif %}{% endfor %}
</section>