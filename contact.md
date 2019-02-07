---
layout: page
title: contact us
description: BluePrintLAB Contact Form
---

<section>
	<form method="post" action="https://getsimpleform.com/messages?form_api_token=2bb36f58581ca191bfa93ac88eda5090">
		<div class="row uniform">
			<div class="6u 12u$(xsmall)">
				<input type="text" name="name" id="body" value="" placeholder="Name" />
			</div>
			<div class="6u$ 12u$(xsmall)">
				<input type="email" name="email" id="body" value="" placeholder="Email" />
			</div>
			<div class="12u$">
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
				<textarea name="body" id="body" placeholder="Enter your message" rows="6"></textarea>
			</div>
			<div class="6u$ 12u$(small)">
				<input type="checkbox" id="human" name="human">
				<label for="human">I am not a robot</label>
			</div>
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Send Message" class="special" /></li>
					<input type="hidden" name='redirect_to' value="https://bplmarketer.github.io/thanks.html"/> 
				</ul>
			</div>
		</div>
	</form>
</section>