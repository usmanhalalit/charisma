<!DOCTYPE html>

<?php 
    
    session_start(); 
    if( ! isset( $_SESSION["connect"] ) ) {

        $url = 'http://' . $_SERVER['HTTP_HOST'];            
        $url .= rtrim(dirname($_SERVER['PHP_SELF']), '/\\'); 
        $url .= '/login.php';                                 

        echo '<script type="text/javascript"> window.location = "'.$url.'"</script>'; 
        die(); 
    }

?>

<html lang="fr">

    <head>
    
        <?php include("inc/Copyright.inc.php"); ?>

        <meta charset="utf-8">
    
        <title>CHRU DE TOURS - Administration</title>
    
        <meta name="description" content="">

        <?php include("inc/Header.inc.php"); ?>

    </head>

    <body>

        <?php include("detectOS.php"); ?>

        <?php include("inc/TopBar.inc.php"); ?>

        <div class="ch-container">
            <div class="row">
            
                <?php include("inc/LeftMenu.inc.php"); ?>

                <noscript>
                    <div class="alert alert-block col-md-12">
                        <h4 class="alert-heading">Warning!</h4>
                        <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled to use this site.</p>
                    </div>
                </noscript>

                <div id="content" class="col-lg-10 col-sm-10">

                    <!-- content starts -->
                    <div>
                        <ul class="breadcrumb">
                            <li><a href="#">Page Administrateur</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="col-md-3 col-sm-3 col-xs-6">
                            <a data-toggle="tooltip" class="well top-block" href="inc/FormNewProfil.php" rel="shadowbox">
                            <div>Ajout d'un utilisateur</div>
                            </a>
                        </div>
                    </div>
                    <?php echo password_hash('test', PASSWORD_BCRYPT )?>
                    <div class="row">
                        <div class="box col-md-12">
                            <div class="box-inner">

                                <div class="box-header well">
                                    <h2>
                                        <i class="glyphicon glyphicon-info-sign"></i> 
                                        Ensemble des inscrits
                                    </h2>

                                </div>

                                <div class="box-content row">
                                    <div class="col-lg-7 col-md-12">
                                        <table>
                                            <th>Email d'utilisateur</th><th>Statut</th>
                                                <?php 
                                                    include("models/DB.php");
                                                    $test=$bdd->query('SELECT * from chu_user');
                                                    while($donnees=$test->fetch())
                                                    {
                                                ?>
                                                    <tr><td><?php echo $donnees['user_email'];?></td><td><?php if($donnees['user_security']==0){echo "Administrateur";};?></td></tr>
                                                <?php

                                                    }
                                                    $test->closeCursor();

                                                ?>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

            <?php include("inc/Footer.inc.php"); ?>
    </body>
</html>