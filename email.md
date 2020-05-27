---
layout: page
title: email us
description: BluePrintLAB Email Form
order: 2
---

<section>
	<form method="post" action="https://getsimpleform.com/messages?form_api_token=af201f2a2487815fb1d745822af038bc" onsubmit="return myFunction(sent)">
		<div class="row uniform" style="font-weight: bold">
			<div class="6u 12u$(xsmall)">
				Name: <br />
				<input type="text" name="name" id="body" value="" placeholder="Name" required />
			</div>
			<div class="6u$ 12u$(xsmall)">
				Email: <br />
				<input type="email" name="email" id="body" value="" placeholder="Email" required />
			</div>
			<div class="12u$">
				Subject: <br />
				<div class="select-wrapper">
					<select name="subject" id="subject">
						<option value="">- Subject -</option>
						<option value="Contact Form - Business Inquiry">Business Inquiry</option>
						<option value="Contact Form - Media Inquiry">Media Inquiry</option>
						<option value="Contact Form - Employment">Employment Inquiry</option>
					</select>
				</div>
			</div>
			<div class="12u$">
				Message: <br />
				<textarea name="body" id="body" placeholder="Enter your message" rows="6"></textarea>
			</div>
			<div class="6u$ 12u$(small)">
				<input type="hidden" name="human" value="no" />
				<input type="checkbox" id="human" name="human" value="yes" />
				<label for="human" style="font-weight: bold">I am not a robot</label>
			</div>
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Send" class="special" /></li>
					<div id="sent">Message sent! Thank you.</div>
				</ul>
			</div>
		</div>
	</form>
</section>
<script src="{{ "/assets/js/sent.js" | relative_url }}"></script>