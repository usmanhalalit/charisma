<!DOCTYPE html>
<html lang="fr">

    <head>
    
        <?php include("inc/Copyright.inc.php"); ?>

        <meta charset="utf-8">
    
        <title>CHRU DE TOURS - Connexion</title>
    
        <meta name="description" content="">

        <?php include("inc/Header.inc.php"); ?>

    </head>

    <body>

<div class="ch-container">
    <div class="row">
        
    <div class="row">
        <div class="col-md-12 center login-header">
            <h2>Bienvenue sur l'anonymisation des DICOMs</h2>
        </div>
        <!--/span-->
    </div><!--/row-->

    <div class="row">
        <div class="well col-md-5 center login-box">
            <div class="alert alert-info">
                Veuillez utiliser votre nom d'utilisateur et votre mot de passe.
            </div>
    
        <?php
            if(isset($_SESSION["error"])) {

                echo '<div class="alert alert-danger">';

                echo $_SESSION["error"];    

                echo '</div>';

                unset($_SESSION["error"]);
            }
        ?>  

            <form class="form-horizontal" action="controler/connection.php" method="post">
                <fieldset>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user red"></i></span>
                        <input type="text" name="name" class="form-control" placeholder="Nom d'utilisateur" <?php echo 'value="'.$_SESSION["name"].'"' ?>>
                    </div>
                    <div class="clearfix"></div><br>

                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock red"></i></span>
                        <input type="password" name="password" class="form-control" placeholder="Mot de passe">
                    </div>

                    <div class="clearfix"><br/></div>
                    
                    <div class="input-prepend">
                        <label class="remember" for="remember">
                            <input type="checkbox" name="remember"> Se souvenir de moi
                        </label>
                    </div>
                    <div class="clearfix"></div>

                    <p class="center col-md-5">
                        <button type="submit" class="btn btn-primary">Connexion</button>
                    </p>
                </fieldset>
            </form>
        </div>
        <!--/span-->
    </div><!--/row-->
</div><!--/fluid-row-->

    <!--/ 
        include("inc/Footer.inc.php"); ?> 
    -->
</body>
</html>
