---
layout: page
title: contact us
description: 
---

<section>
	<form method="post" action="#">
		<div class="row uniform">
			<div class="6u 12u$(xsmall)">
				<input type="text" name="name" id="name" value="" placeholder="Name" />
			</div>
			<div class="6u$ 12u$(xsmall)">
				<input type="email" name="email" id="email" value="" placeholder="Email" />
			</div>
			<div class="12u$">
				<div class="select-wrapper">
					<select name="Subject" id="subject">
						<option value="">- Subject -</option>
						<option value="1">Business Inquiry</option>
						<option value="1">Media Inquiry</option>
						<option value="1">Employment Inquiry</option>
					</select>
				</div>
			</div>
			<div class="12u$">
				<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
			</div>
			<div class="6u$ 12u$(small)">
				<input type="checkbox" id="human" name="human">
				<label for="human">I am not a robot</label>
			</div>
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Send Message" class="special" /></li>
					<li><input type="reset" value="Reset" /></li>
				</ul>
			</div>
		</div>
	</form>
</section>