<?php
$no_visible_elements=true;
include('header.php'); ?>

			<div class="row">
				<div class="col-md-12 center login-header">
					<h2>Welcome to Charisma</h2>
				</div><!--/span-->
			</div><!--/row-->
			
			<div class="row">
				<div class="well col-md-5 center login-box">
					<div class="alert alert-info">
						Please login with your Username and Password.
					</div>
					<form class="form-horizontal" action="index.html" method="post">
						<fieldset>
							<div class="input-prepend" title="Username" data-rel="tooltip">
								<span class="input-group-addon"><i class="icon-user"></i></span><input autofocus="" class="col-md-0 input-lg" name="username" id="username" type="text" value="admin">
							</div>
							<div class="clearfix"></div>

							<div class="input-prepend" title="Password" data-rel="tooltip">
								<span class="input-group-addon"><i class="icon-lock"></i></span><input class="col-md-0 input-lg" name="password" id="password" type="password" value="admin123456">
							</div>
							<div class="clearfix"></div>

							<div class="input-prepend">
							<label class="remember" for="remember"><input type="checkbox" id="remember">Remember me</label>
							</div>
							<div class="clearfix"></div>

							<p class="center col-md-5">
							<button type="submit" class="btn btn-primary">Login</button>
							</p>
						</fieldset>
					</form>
				</div><!--/span-->
			</div><!--/row-->
<?php require('footer.php'); ?>