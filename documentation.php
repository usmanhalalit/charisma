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
    
        <title>CHRU DE TOURS - Accueil</title>
    
        <meta name="description" content="">

        <?php include("inc/Header.inc.php"); ?>
        <script>
        $(function() {
            $( "#accordion" ).accordion({active: false, collapsible: true,heightStyle: "content"});
            });

        </script>

        <SCRIPT src="http://java.com/js/dtjava.js"></SCRIPT>

    </head>

    <body>

        <?php include("detectOS.php"); ?>

        <?php include("inc/TopBar.inc.php"); ?>

        <div class="ch-container" >
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
                            <li><a href="index.php">Accueil</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        <div class="box col-md-12">
                            <div class="box-inner">

                                <div class="box-header well">
                                    <h2>
                                        <i class="glyphicon glyphicon-info-sign"></i> 
                                        Documentation
                                    </h2>
                                </div>

                                <div class="box-content row">
                                    <div class="col-lg-7 col-md-12 " >
                                        
                                        <ul>
                                            <li>Accédez au panneau de configuration Java (sous Windows, cliquez sur Démarrer, puis sur Configurer Java).</li>
                                            <br />
                                            <img src="./img/java0.jpg"/>
                                            <br /><br />
                                            <li>Cliquez sur l'onglet Sécurité.</li>
                                            <br />
                                            <li>Cliquez sur le bouton Modifier la liste des sites.</li>
                                            <br />
                                            <li>Cliquez sur Ajouter dans la fenêtre Liste des sites avec exception.</li>
                                            <br />
                                            <img src="./img/add_urlJava.png"/>
                                            <br /><br />
                                            <li>Ajouter <a href="#"><?php echo "http://".$_SERVER['HTTP_HOST']; ?></a>  à la liste des sites avec exception.</li>
                                            <br />
                                            <li>Cliquez dans le champ vide sous le champ Emplacement pour entrer l'URL.</li>
                                        </ul>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

            <?php include("inc/Footer.inc.php"); ?>
    </body>
</html>
