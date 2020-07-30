---
layout: page
title: email us
description: BluePrintLAB Email Form
order: 2
---

<section class="email">
	<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {window.location='';}"></iframe>
	<form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLScb8uKySfgZ2T_vISEgDH83Glq0-kiklD5ytUI46C4pfCj4Nw/formResponse?" target="hidden_iframe" onsubmit="myFunction(sent);">
		<div class="row uniform" style="font-weight: bold">
			<div class="6u 12u$(xsmall)">
				Name<br />
				<input type="text" name="entry.1924625708" id="name" value="" placeholder="Name" required />
			</div>
			<div class="6u$ 12u$(xsmall)">
				Email<br />
				<input type="email" name="entry.1064324287" id="email" value="" placeholder="Email" required />
			</div>
			<div class="12u$">
				Subject<br />
				<div class="select-wrapper">
					<select type="text" name="entry.1781999880" id="subject">
						<option value="">- Subject -</option>
						<option value="Contact Form - Business Inquiry">Business Inquiry</option>
						<option value="Contact Form - Media Inquiry">Media Inquiry</option>
						<option value="Contact Form - Employment">Employment Inquiry</option>
					</select>
				</div>
			</div>
			<div class="12u$">
				Message<br />
				<textarea type="text" name="entry.1865264541" id="message" placeholder="Enter your message" rows="6"></textarea>
			</div>
			<div class="6u$ 12u$(small)">
				<input type="checkbox" id="human" name="entry.2067130109" value="yes" />
				<label for="human" style="font-weight: bold">I am not a robot</label>
			</div>
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Submit" class="special" /></li>
					<div id="sent">Message sent! Thank you.</div>
				</ul>
			</div>
		</div>
	</form>
</section>
<script src="{{ "/assets/js/sent.js" | relative_url }}"></script>