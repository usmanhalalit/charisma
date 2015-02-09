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
    
        <title>CHRU DE TOURS - Mon Profil</title>
    
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
                            <li><a href="#">Mon Profil</a></li>
                        </ul>
                    </div>
                 
                    <div class="row">
                     
                    </div>

            <?php include("inc/Footer.inc.php"); ?>
    </body>
</html>