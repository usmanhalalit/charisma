<?php include('header.php'); ?>


			<div>
				<ul class="breadcrumb">
					<li>
						<a href="#">Home</a> <span class="divider">/</span>
					</li>
					<li>
						<a href="#">Charts</a>
					</li>
				</ul>
			</div>

			<div class="row sortable">
				
				<div class="box">
					<div class="box-header well">
						<h2><i class="glyphicon glyphicon-list-alt"></i> Chart with points</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<div id="sincos"  class="center" style="height:300px" ></div>
						<p id="hoverdata">Mouse position at (<span id="x">0</span>, <span id="y">0</span>). <span id="clickdata"></span></p>
					</div>
				</div>
				
				<div class="box">
					<div class="box-header well">
						<h2><i class="glyphicon glyphicon-list-alt"></i> Flot</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<div id="flotchart" class="center" style="height:300px"></div>
					</div>
				</div>
				
				<div class="box">
					<div class="box-header well">
						<h2><i class="glyphicon glyphicon-list-alt"></i> Stack Example</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						 <div id="stackchart" class="center" style="height:300px;"></div>

						<p class="stackControls center">
							<input class="btn" type="button" value="With stacking">
							<input class="btn" type="button" value="Without stacking">
						</p>

						<p class="graphControls center">
							<input class="btn btn-primary" type="button" value="Bars">
							<input class="btn btn-primary" type="button" value="Lines">
							<input class="btn btn-primary" type="button" value="Lines with steps">
						</p>
					</div>
				</div>

			</div><!--/row-->
			
			<div class="row sortable">
				<div class="box col-md-4">
					<div class="box-header well" data-original-title>
						<h2><i class="glyphicon glyphicon-list-alt"></i> Pie</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
							<div id="piechart" style="height:300px"></div>
					</div>
				</div>
				
				<div class="box col-md-4">
					<div class="box-header well" data-original-title>
						<h2><i class="glyphicon glyphicon-list-alt"></i> Realtime</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						 <div id="realtimechart" style="height:190px;"></div>
						 <p>You can update a chart periodically to get a real-time effect by using a timer to insert the new data in the plot and redraw it.</p>
						 <p>Time between updates: <input id="updateInterval" type="text" value="" style="text-align: right; width:5em"> milliseconds</p>
					</div>
				</div>
					
				<div class="box col-md-4">
					<div class="box-header well" data-original-title>
						<h2><i class="glyphicon glyphicon-list-alt"></i> Donut</h2>
						<div class="box-icon">
							<a href="#" class="btn btn-setting btn-round"><i class="glyphicon glyphicon-cog"></i></a>
							<a href="#" class="btn btn-minimize btn-round"><i class="glyphicon glyphicon-chevron-up"></i></a>
							<a href="#" class="btn btn-close btn-round"><i class="glyphicon glyphicon-remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						 <div id="donutchart" style="height: 300px;">
					</div>
				</div>
			</div>  
		</div><!--/row-->
		
<?php include('footer.php'); ?>
