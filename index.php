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
        <SCRIPT src="http://java.com/js/dtjava.js"></SCRIPT>

      <script>

        var server = '<?php echo substr("http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'],0,-9)."upload.php"; ?>'

        function launchApplication(jnlpfile) {
            dtjava.launch({
                    url : 'AnonymFX.jnlp',
                    params: {'service': 'Neurologie',
                             'url': server
                        }
                    },
                    {
                        javafx : '8.0+'
                    },
                    {}
            );
            return false;
        }
        </script>

        <?php if($uagent != "MacOS") { ?>

        <script>

            function javafxEmbed_fxApplication() {
                dtjava.embed(
                    {
                        id : 'fxApplication',
                        url : 'AnonymFX.jnlp',
                        placeholder : 'holderID',
                        width : 700,
                        height : 400,
                        params: {'service': 'Neurologie',
                                 'url': server
                                }
                    },
                    {
                        javafx : '8.0+'
                    },
                    {}
                );
            }

             dtjava.addOnloadCallback(javafxEmbed_fxApplication);

        </script>

        <?php } ?>

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
                            <li><a href="#">Accueil</a></li>
                        </ul>
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
                                    <div class="col-lg-7 col-md-12 center" style="height: 500px;">
                                            
                                        <?php if($uagent == "MacOS") { ?>

                                            <a href='AnonymFX.jnlp' onclick="return launchApplication('AnonymFX.jnlp');">
                                                <button><img src="./img/anonymisation.png" height="500" width="500" /></button>
                                            </a>

                                        <?php } else { ?>

                                            <br />    
                                            <div id='holderID' class="center"></div>                                            

                                        <?php } ?>
                                        
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

            <?php include("inc/Footer.inc.php"); ?>
    </body>
</html>
