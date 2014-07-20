<?php require('header.php'); ?>
    <div>
        <ul class="breadcrumb">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#"> Icons</a>
            </li>
        </ul>
    </div>

    <div class="row">
    <div class="box col-md-12">
    <div class="box-inner">
    <div class="box-header well">
        <h2><i class="glyphicon glyphicon-picture"></i> Icons</h2>

        <div class="box-icon">
            <a href="#" class="btn btn-setting btn-round btn-default"><i class="glyphicon glyphicon-cog"></i></a>
            <a href="#" class="btn btn-minimize btn-round btn-default"><i
                    class="glyphicon glyphicon-chevron-up"></i></a>
            <a href="#" class="btn btn-close btn-round btn-default"><i class="glyphicon glyphicon-remove"></i></a>
        </div>
    </div>
    <div class="box-content">
    <section id="icons1">

    <div class="row">

        <div class="col-md-6">
            <h3>How to use</h3>

            <p>Bootstrap uses an <code>&lt;i&gt;</code> tag for all icons, but they have no case class—only a shared
                prefix. To use, place the following code just about anywhere:</p>
            <pre class="prettyprint linenums">&lt;i class="glyphicon glyphicon-search"&gt;&lt;/i&gt;</pre>



            <p>
                <span class="label-info label label-default">Heads up!</span>
                When using beside strings of text, as in buttons or nav links, be sure to leave a space after the
                <code>&lt;i&gt;</code> tag for proper spacing.
            </p>
        </div>
        <div class="col-md-6">
            <h3>Use cases</h3>

            <p>Icons are great, but where would one use them? Here are a few ideas:</p>
            <ul>
                <li>As visuals for your sidebar navigation</li>
                <li>For a purely icon-driven navigation</li>
                <li>For buttons to help convey the meaning of an action</li>
                <li>With links to share context on a user's destination</li>
            </ul>
            <p>Essentially, anywhere you can put an <code>&lt;i&gt;</code> tag, you can put an icon.</p>
        </div>
    </div>

    <h3>Examples</h3>

    <p>Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.</p>

    <div class="row">
        <div class="col-md-4">
            <div style="font-size: 50px">
                <h5>Big-Color Icons</h5>
                <span><i class="glyphicon glyphicon-tint"></i></span>
                <span><i class="glyphicon glyphicon-star yellow"></i></span>
                <span><i class="glyphicon glyphicon-calendar red"></i></span>
                <span><i class="glyphicon glyphicon-bell blue"></i></span>
                <span><i class="glyphicon glyphicon-camera green"></i></span>
            </div>

            <div class="btn-toolbar">
                <div class="btn-group">
                    <a class="btn btn-default" href="#"><i class="glyphicon glyphicon-align-left"></i></a>
                    <a class="btn btn-default" href="#"><i class="glyphicon glyphicon-align-center"></i></a>
                    <a class="btn btn-default" href="#"><i class="glyphicon glyphicon-align-right"></i></a>
                    <a class="btn btn-default" href="#"><i class="glyphicon glyphicon-align-justify"></i></a>
                </div>
                <div class="btn-group">
                    <a class="btn btn-primary" href="#"><i class="glyphicon glyphicon-user icon-white"></i> User</a>
                    <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span
                            class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#"><i class="glyphicon glyphicon-pencil"></i> Edit</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-trash"></i> Delete</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-ban-circle"></i> Ban</a></li>
                        <li class="divider"></li>
                        <li><a href="#"><i class="i"></i> Make admin</a></li>
                    </ul>

                </div>
            </div>

            <br>

            <p>
                <a class="btn btn-default" href="#"><i class="glyphicon glyphicon-refresh"></i> Refresh</a>
                <a class="btn btn-success" href="#"><i class="glyphicon glyphicon-shopping-cart"></i>
                    Checkout</a>
                <a class="btn btn-danger" href="#"><i class="glyphicon glyphicon-trash"></i> Delete</a>
            </p>

            <p>
                <a class="btn btn-default btn-lg" href="#"><i class="glyphicon glyphicon-comment"></i> Comment</a>
                <a class="btn btn-default btn-sm" href="#"><i class="glyphicon glyphicon-cog"></i> Settings</a>
                <a class="btn btn-info btn-sm" href="#"><i class="glyphicon glyphicon-info-sign"></i> More
                    Info</a>
            </p>
        </div>
        <div class="col-md-4">
            <div class="well">
                <ul class="nav nav-list">
                    <li class="active"><a href="#"><i class="glyphicon glyphicon-home"></i> Home</a></li>
                    <li><a href="#"><i class="glyphicon glyphicon-book"></i> Library</a></li>
                    <li><a href="#"><i class="glyphicon glyphicon-pencil"></i> Applications</a></li>
                    <li><a href="#"><i class="i"></i> Misc</a></li>
                </ul>
            </div>
            <!-- /well -->
        </div>
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label class="control-label" for="inputIcon">Email address</label>

                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope red"></i></span>
                        <input id="inputIcon" type="text" class="form-control" placeholder="Username">
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="page-header">
        <h1>Icons</h1>
    </div>
    <div class="row bs-icons">
        <div class="col-md-3">
            <ul class="the-icons">
                <li><i class="glyphicon glyphicon-glass"></i> glyphicon glyphicon-glass</li>
                <li><i class="glyphicon glyphicon-music"></i> glyphicon glyphicon-music</li>
                <li><i class="glyphicon glyphicon-search"></i> glyphicon glyphicon-search</li>
                <li><i class="glyphicon glyphicon-envelope"></i> glyphicon glyphicon-envelope</li>
                <li><i class="glyphicon glyphicon-heart"></i> glyphicon glyphicon-heart</li>
                <li><i class="glyphicon glyphicon-star"></i> glyphicon glyphicon-star</li>
                <li><i class="glyphicon glyphicon-star-empty"></i> glyphicon glyphicon-star-empty</li>
                <li><i class="glyphicon glyphicon-user"></i> glyphicon glyphicon-user</li>
                <li><i class="glyphicon glyphicon-film"></i> glyphicon glyphicon-film</li>
                <li><i class="glyphicon glyphicon-th-large"></i> glyphicon glyphicon-th-large</li>
                <li><i class="glyphicon glyphicon-th"></i> glyphicon glyphicon-th</li>
                <li><i class="glyphicon glyphicon-th-list"></i> glyphicon glyphicon-th-list</li>
                <li><i class="glyphicon glyphicon-ok"></i> glyphicon glyphicon-ok</li>
                <li><i class="glyphicon glyphicon-remove"></i> glyphicon glyphicon-remove</li>
                <li><i class="glyphicon glyphicon-zoom-in"></i> glyphicon glyphicon-zoom-in</li>
                <li><i class="glyphicon glyphicon-zoom-out"></i> glyphicon glyphicon-zoom-out</li>
                <li><i class="glyphicon glyphicon-off"></i> glyphicon glyphicon-off</li>
                <li><i class="glyphicon glyphicon-signal"></i> glyphicon glyphicon-signal</li>
                <li><i class="glyphicon glyphicon-cog"></i> glyphicon glyphicon-cog</li>
                <li><i class="glyphicon glyphicon-trash"></i> glyphicon glyphicon-trash</li>
                <li><i class="glyphicon glyphicon-home"></i> glyphicon glyphicon-home</li>
                <li><i class="glyphicon glyphicon-file"></i> glyphicon glyphicon-file</li>
                <li><i class="glyphicon glyphicon-time"></i> glyphicon glyphicon-time</li>
                <li><i class="glyphicon glyphicon-road"></i> glyphicon glyphicon-road</li>
                <li><i class="glyphicon glyphicon-download-alt"></i> glyphicon glyphicon-download-alt</li>
                <li><i class="glyphicon glyphicon-download"></i> glyphicon glyphicon-download</li>
                <li><i class="glyphicon glyphicon-upload"></i> glyphicon glyphicon-upload</li>
                <li><i class="glyphicon glyphicon-inbox"></i> glyphicon glyphicon-inbox</li>
                <li><i class="glyphicon glyphicon-play-circle"></i> glyphicon glyphicon-play-circle</li>
                <li><i class="glyphicon glyphicon-repeat"></i> glyphicon glyphicon-repeat</li>
                <li><i class="glyphicon glyphicon-refresh"></i> glyphicon glyphicon-refresh</li>
                <li><i class="glyphicon glyphicon-list-alt"></i> glyphicon glyphicon-list-alt</li>
                <li><i class="glyphicon glyphicon-lock"></i> glyphicon glyphicon-lock</li>
                <li><i class="glyphicon glyphicon-flag"></i> glyphicon glyphicon-flag</li>
                <li><i class="glyphicon glyphicon-headphones"></i> glyphicon glyphicon-headphones</li>
            </ul>
        </div>
        <div class="col-md-3">
            <ul class="the-icons">
                <li><i class="glyphicon glyphicon-volume-off"></i> glyphicon glyphicon-volume-off</li>
                <li><i class="glyphicon glyphicon-volume-down"></i> glyphicon glyphicon-volume-down</li>
                <li><i class="glyphicon glyphicon-volume-up"></i> glyphicon glyphicon-volume-up</li>
                <li><i class="glyphicon glyphicon-qrcode"></i> glyphicon glyphicon-qrcode</li>
                <li><i class="glyphicon glyphicon-barcode"></i> glyphicon glyphicon-barcode</li>
                <li><i class="glyphicon glyphicon-tag"></i> glyphicon glyphicon-tag</li>
                <li><i class="glyphicon glyphicon-tags"></i> glyphicon glyphicon-tags</li>
                <li><i class="glyphicon glyphicon-book"></i> glyphicon glyphicon-book</li>
                <li><i class="glyphicon glyphicon-bookmark"></i> glyphicon glyphicon-bookmark</li>
                <li><i class="glyphicon glyphicon-print"></i> glyphicon glyphicon-print</li>
                <li><i class="glyphicon glyphicon-camera"></i> glyphicon glyphicon-camera</li>
                <li><i class="glyphicon glyphicon-font"></i> glyphicon glyphicon-font</li>
                <li><i class="glyphicon glyphicon-bold"></i> glyphicon glyphicon-bold</li>
                <li><i class="glyphicon glyphicon-italic"></i> glyphicon glyphicon-italic</li>
                <li><i class="glyphicon glyphicon-text-height"></i> glyphicon glyphicon-text-height</li>
                <li><i class="glyphicon glyphicon-text-width"></i> glyphicon glyphicon-text-width</li>
                <li><i class="glyphicon glyphicon-align-left"></i> glyphicon glyphicon-align-left</li>
                <li><i class="glyphicon glyphicon-align-center"></i> glyphicon glyphicon-align-center</li>
                <li><i class="glyphicon glyphicon-align-right"></i> glyphicon glyphicon-align-right</li>
                <li><i class="glyphicon glyphicon-align-justify"></i> glyphicon glyphicon-align-justify</li>
                <li><i class="glyphicon glyphicon-list"></i> glyphicon glyphicon-list</li>
                <li><i class="glyphicon glyphicon-indent-left"></i> glyphicon glyphicon-indent-left</li>
                <li><i class="glyphicon glyphicon-indent-right"></i> glyphicon glyphicon-indent-right</li>
                <li><i class="glyphicon glyphicon-facetime-video"></i> glyphicon glyphicon-facetime-video</li>
                <li><i class="glyphicon glyphicon-picture"></i> glyphicon glyphicon-picture</li>
                <li><i class="glyphicon glyphicon-pencil"></i> glyphicon glyphicon-pencil</li>
                <li><i class="glyphicon glyphicon-map-marker"></i> glyphicon glyphicon-map-marker</li>
                <li><i class="glyphicon glyphicon-adjust"></i> glyphicon glyphicon-adjust</li>
                <li><i class="glyphicon glyphicon-tint"></i> glyphicon glyphicon-tint</li>
                <li><i class="glyphicon glyphicon-edit"></i> glyphicon glyphicon-edit</li>
                <li><i class="glyphicon glyphicon-share"></i> glyphicon glyphicon-share</li>
                <li><i class="glyphicon glyphicon-check"></i> glyphicon glyphicon-check</li>
                <li><i class="glyphicon glyphicon-move"></i> glyphicon glyphicon-move</li>
                <li><i class="glyphicon glyphicon-step-backward"></i> glyphicon glyphicon-step-backward</li>
                <li><i class="glyphicon glyphicon-fast-backward"></i> glyphicon glyphicon-fast-backward</li>
            </ul>
        </div>
        <div class="col-md-3">
            <ul class="the-icons">
                <li><i class="glyphicon glyphicon-backward"></i> glyphicon glyphicon-backward</li>
                <li><i class="glyphicon glyphicon-play"></i> glyphicon glyphicon-play</li>
                <li><i class="glyphicon glyphicon-pause"></i> glyphicon glyphicon-pause</li>
                <li><i class="glyphicon glyphicon-stop"></i> glyphicon glyphicon-stop</li>
                <li><i class="glyphicon glyphicon-forward"></i> glyphicon glyphicon-forward</li>
                <li><i class="glyphicon glyphicon-fast-forward"></i> glyphicon glyphicon-fast-forward</li>
                <li><i class="glyphicon glyphicon-step-forward"></i> glyphicon glyphicon-step-forward</li>
                <li><i class="glyphicon glyphicon-eject"></i> glyphicon glyphicon-eject</li>
                <li><i class="glyphicon glyphicon-chevron-left"></i> glyphicon glyphicon-chevron-left</li>
                <li><i class="glyphicon glyphicon-chevron-right"></i> glyphicon glyphicon-chevron-right</li>
                <li><i class="glyphicon glyphicon-plus-sign"></i> glyphicon glyphicon-plus-sign</li>
                <li><i class="glyphicon glyphicon-minus-sign"></i> glyphicon glyphicon-minus-sign</li>
                <li><i class="glyphicon glyphicon-remove-sign"></i> glyphicon glyphicon-remove-sign</li>
                <li><i class="glyphicon glyphicon-ok-sign"></i> glyphicon glyphicon-ok-sign</li>
                <li><i class="glyphicon glyphicon-question-sign"></i> glyphicon glyphicon-question-sign</li>
                <li><i class="glyphicon glyphicon-info-sign"></i> glyphicon glyphicon-info-sign</li>
                <li><i class="glyphicon glyphicon-screenshot"></i> glyphicon glyphicon-screenshot</li>
                <li><i class="glyphicon glyphicon-remove-circle"></i> glyphicon glyphicon-remove-circle</li>
                <li><i class="glyphicon glyphicon-ok-circle"></i> glyphicon glyphicon-ok-circle</li>
                <li><i class="glyphicon glyphicon-ban-circle"></i> glyphicon glyphicon-ban-circle</li>
                <li><i class="glyphicon glyphicon-arrow-left"></i> glyphicon glyphicon-arrow-left</li>
                <li><i class="glyphicon glyphicon-arrow-right"></i> glyphicon glyphicon-arrow-right</li>
                <li><i class="glyphicon glyphicon-arrow-up"></i> glyphicon glyphicon-arrow-up</li>
                <li><i class="glyphicon glyphicon-arrow-down"></i> glyphicon glyphicon-arrow-down</li>
                <li><i class="glyphicon glyphicon-share-alt"></i> glyphicon glyphicon-share-alt</li>
                <li><i class="glyphicon glyphicon-resize-full"></i> glyphicon glyphicon-resize-full</li>
                <li><i class="glyphicon glyphicon-resize-small"></i> glyphicon glyphicon-resize-small</li>
                <li><i class="glyphicon glyphicon-plus"></i> glyphicon glyphicon-plus</li>
                <li><i class="glyphicon glyphicon-minus"></i> glyphicon glyphicon-minus</li>
                <li><i class="glyphicon glyphicon-asterisk"></i> glyphicon glyphicon-asterisk</li>
                <li><i class="glyphicon glyphicon-exclamation-sign"></i> glyphicon glyphicon-exclamation-sign</li>
                <li><i class="glyphicon glyphicon-gift"></i> glyphicon glyphicon-gift</li>
                <li><i class="glyphicon glyphicon-leaf"></i> glyphicon glyphicon-leaf</li>
                <li><i class="glyphicon glyphicon-fire"></i> glyphicon glyphicon-fire</li>
                <li><i class="glyphicon glyphicon-eye-open"></i> glyphicon glyphicon-eye-open</li>
            </ul>
        </div>
        <div class="col-md-3">
            <ul class="the-icons">
                <li><i class="glyphicon glyphicon-eye-close"></i> glyphicon glyphicon-eye-close</li>
                <li><i class="glyphicon glyphicon-warning-sign"></i> glyphicon glyphicon-warning-sign</li>
                <li><i class="glyphicon glyphicon-plane"></i> glyphicon glyphicon-plane</li>
                <li><i class="glyphicon glyphicon-calendar"></i> glyphicon glyphicon-calendar</li>
                <li><i class="glyphicon glyphicon-random"></i> glyphicon glyphicon-random</li>
                <li><i class="glyphicon glyphicon-comment"></i> glyphicon glyphicon-comment</li>
                <li><i class="glyphicon glyphicon-magnet"></i> glyphicon glyphicon-magnet</li>
                <li><i class="glyphicon glyphicon-chevron-up"></i> glyphicon glyphicon-chevron-up</li>
                <li><i class="glyphicon glyphicon-chevron-down"></i> glyphicon glyphicon-chevron-down</li>
                <li><i class="glyphicon glyphicon-retweet"></i> glyphicon glyphicon-retweet</li>
                <li><i class="glyphicon glyphicon-shopping-cart"></i> glyphicon glyphicon-shopping-cart</li>
                <li><i class="glyphicon glyphicon-folder-close"></i> glyphicon glyphicon-folder-close</li>
                <li><i class="glyphicon glyphicon-folder-open"></i> glyphicon glyphicon-folder-open</li>
                <li><i class="glyphicon glyphicon-resize-vertical"></i> glyphicon glyphicon-resize-vertical</li>
                <li><i class="glyphicon glyphicon-resize-horizontal"></i> glyphicon glyphicon-resize-horizontal</li>
                <li><i class="glyphicon glyphicon-hdd"></i> glyphicon glyphicon-hdd</li>
                <li><i class="glyphicon glyphicon-bullhorn"></i> glyphicon glyphicon-bullhorn</li>
                <li><i class="glyphicon glyphicon-bell"></i> glyphicon glyphicon-bell</li>
                <li><i class="glyphicon glyphicon-certificate"></i> glyphicon glyphicon-certificate</li>
                <li><i class="glyphicon glyphicon-thumbs-up"></i> glyphicon glyphicon-thumbs-up</li>
                <li><i class="glyphicon glyphicon-thumbs-down"></i> glyphicon glyphicon-thumbs-down</li>
                <li><i class="glyphicon glyphicon-hand-right"></i> glyphicon glyphicon-hand-right</li>
                <li><i class="glyphicon glyphicon-hand-left"></i> glyphicon glyphicon-hand-left</li>
                <li><i class="glyphicon glyphicon-hand-up"></i> glyphicon glyphicon-hand-up</li>
                <li><i class="glyphicon glyphicon-hand-down"></i> glyphicon glyphicon-hand-down</li>
                <li><i class="glyphicon glyphicon-circle-arrow-right"></i> glyphicon glyphicon-circle-arrow-right</li>
                <li><i class="a icon-circle-arrow-left s s"></i> glyphicon glyphicon-circle-arrow-left</li>
                <li><i class="glyphicon glyphicon-circle-arrow-up"></i> glyphicon glyphicon-circle-arrow-up</li>
                <li><i class="glyphicon glyphicon-circle-arrow-down"></i> glyphicon glyphicon-circle-arrow-down</li>
                <li><i class="glyphicon glyphicon-globe"></i> glyphicon glyphicon-globe</li>
                <li><i class="glyphicon glyphicon-wrench"></i> glyphicon glyphicon-wrench</li>
                <li><i class="glyphicon glyphicon-tasks"></i> glyphicon glyphicon-tasks</li>
                <li><i class="glyphicon glyphicon-filter"></i> glyphicon glyphicon-filter</li>
                <li><i class="glyphicon glyphicon-briefcase"></i> glyphicon glyphicon-briefcase</li>
                <li><i class="glyphicon glyphicon-fullscreen"></i> glyphicon glyphicon-fullscreen</li>
            </ul>
        </div>
    </div>

    </section>

    </div>
    </div>
    </div>
    <!--/span-->

    </div><!--/row-->

<?php require('footer.php'); ?>