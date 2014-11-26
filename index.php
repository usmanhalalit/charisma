<!DOCTYPE html>
<html lang="fr">

    <head>
    
        <?php include("inc/Copyright.inc.php"); ?>

        <meta charset="utf-8">
    
        <title>CHRU DE TOURS</title>
    
        <meta name="description" content="">

        <?php include("inc/Header.inc.php"); ?>

    </head>

    <body>

        <?php include("inc/TopBar.inc.php"); ?>

        <div class="ch-container">
            <div class="row">
                
                <!-- left menu starts -->
                <div class="col-sm-2 col-lg-2">
                    <div class="sidebar-nav">
                        <div class="nav-canvas">
                            <div class="nav-sm nav nav-stacked">

                            </div>
                            <ul class="nav nav-pills nav-stacked main-menu">
                                
                                <li>
                                    <a class="ajax-link" href="index.html"><i class="glyphicon glyphicon-home">
                                    </i><span> Accueil</span></a>
                                </li>

                                <li>
                                    <a href="error.html"><i class="glyphicon glyphicon-ban-circle"></i><span> Page d'erreur</span></a>
                                </li>
                                <li>
                                    <a href="login.php"><i class="glyphicon glyphicon-lock"></i><span> Page de connexion</span></a>
                                </li>
                            </ul>
                            <label id="for-is-ajax" for="is-ajax" style="visibility: hidden;">
                                <input id="is-ajax" type="checkbox"> Ajax on menu</input>
                            </label>
                        </div>
                    </div>
                </div>
                <!--/span-->
                <!-- left menu ends -->

                <noscript>
                    <div class="alert alert-block col-md-12">
                        <h4 class="alert-heading">Warning!</h4>

                        <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
                            enabled to use this site.</p>
                    </div>
                </noscript>

                <div id="content" class="col-lg-10 col-sm-10">

                    <!-- content starts -->
                    <div>
                        <ul class="breadcrumb">
                            <li><a href="#">Accueil</a></li>
                        </ul>
                    </div>

                    <div class=" row">
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <a data-toggle="tooltip" title="0 nouveau partenaire." class="well top-block" href="#">
                                <i class="glyphicon glyphicon-user blue"></i>
                                <div>Ensemble des partenaires</div>
                                <div>10</div>
                                <span class="notification">0</span>
                            </a>
                        </div>

                        <div class="col-md-3 col-sm-3 col-xs-6"></div>

                        <div class="col-md-3 col-sm-3 col-xs-6"></div>

                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <a data-toggle="tooltip" title="0 nouveau message." class="well top-block" href="#">
                                <i class="glyphicon glyphicon-envelope red"></i>
                                <div>Messages</div>
                                <div>0</div>
                                <span class="notification red">0</span>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="box col-md-12">
                            <div class="box-inner">

                                <div class="box-header well">
                                    <h2>
                                        <i class="glyphicon glyphicon-info-sign"></i> 
                                        Introduction
                                    </h2>
                                </div>

                                <div class="box-content row">
                                    <div class="col-lg-7 col-md-12">
                                        <h1>Projet avec le CHRU de Tours
                                            <br>
                                            <small>Maîtrise d'ouvrage: Brendan Jany & Valentin Montmirail</small>
                                        </h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

            <?php include("inc/Footer.inc.php"); ?>
    </body>
</html>
