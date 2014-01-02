<?php include('header.php'); ?>

			<div>
				<ul class="breadcrumb">
					<li>
						<a href="#">Home</a> <span class="divider">/</span>
					</li>
					<li>
						<a href="#">Calendar</a>
					</li>
				</ul>
			</div>

			<div class="row sortable">
				<div class="box col-md-12">
				  <div class="box-header well" data-original-title>
					  <h2><i class="glyphicon glyphicon-calendar"></i>Calendar</h2>
					  <div class="box-icon">
						  <a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
						  <a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
						  <a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
				  </div>
				  <div class="box-content">
					<div id="external-events" class="well">
						<h4>Draggable Events</h4>
						<div class="external-event badge">Default</div>
						<div class="external-event badge badge-success">Completed</div>
						<div class="external-event badge badge-warning">Warning</div>
						<div class="external-event badge badge-important">Important</div>
						<div class="external-event badge badge-info">Info</div>
						<div class="external-event badge badge-inverse">Other</div>
						<p>
						<label for="drop-remove"><input type="checkbox" id="drop-remove" /> remove after drop</label>
						</p>
						</div>

						<div id="calendar"></div>

						<div class="clearfix"></div>
					</div>
				</div>
			</div><!--/row-->
		
<?php include('footer.php'); ?>
