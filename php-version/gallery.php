<?php require('header.php'); ?>
    <div>
        <ul class="breadcrumb">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Gallery</a>
            </li>
        </ul>
    </div>

    <div class="row">
        <div class="box col-md-12">
            <div class="box-inner">
                <div class="box-header well" data-original-title="">
                    <h2><i class="glyphicon glyphicon-picture"></i> Gallery</h2>

                    <div class="box-icon">
                        <a href="#" class="btn btn-setting btn-round btn-default"><i
                                class="glyphicon glyphicon-cog"></i></a>
                        <a href="#" class="btn btn-minimize btn-round btn-default"><i
                                class="glyphicon glyphicon-chevron-up"></i></a>
                        <a href="#" class="btn btn-close btn-round btn-default"><i
                                class="glyphicon glyphicon-remove"></i></a>
                    </div>
                </div>
                <div class="box-content">
                    <br>
                    <ul class="thumbnails gallery">
                        <?php for ($i = 1; $i <= 24; $i++) { ?>
                            <li id="image-<?php echo $i ?>" class="thumbnail">
                                <a style="background:url(https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/<?php echo $i ?>.jpg)"
                                   title="Sample Image <?php echo $i ?>" href="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/<?php echo $i ?>.jpg"><img
                                        class="grayscale" src="https://raw.githubusercontent.com/usmanhalalit/charisma/1.x/img/gallery/thumbs/<?php echo $i ?>.jpg"
                                        alt="Sample Image <?php echo $i ?>"></a>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </div>
        <!--/span-->

    </div><!--/row-->

<?php require('footer.php'); ?>