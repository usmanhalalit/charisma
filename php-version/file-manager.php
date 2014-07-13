<?php require('header.php'); ?>
<div>
				<ul class="breadcrumb">
					<li>
						<a href="#">Home</a> <span class="divider">/</span>
					</li>
					<li>
						<a href="#">File Manager</a>
					</li>
				</ul>
			</div>

			<div class="row">
				<div class="box col-md-12"><div class="box-inner">
					<div class="box-header well" data-original-title="">
						<h2><i class="glyphicon glyphicon-picture"></i> File Manager</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round btn-default"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round btn-default"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round btn-default"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<div class="alert alert-info">
							<button type="button" class="close" data-dismiss="alert">&times;</button>
							<i class="glyphicon glyphicon-info-sign"></i> As its a demo, you currently have read-only permission, in your server you may do everything like, upload or delete. It will work on a server only.
						</div>
						<div class="file-manager"></div>
					</div>
				</div></div><!--/span-->
			
			</div><!--/row-->


<?php require('footer.php'); ?>