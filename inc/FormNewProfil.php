        <div class="well col-md-5 center login-box">
            <div class="alert alert-info">
                Veuillez utiliser votre nom d'utilisateur et votre mot de passe.
            </div>
     

            <form class="form-horizontal" action="controler/connection.php" method="post">
                <fieldset>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user red"></i></span>
                        <input type="text" name="name" class="form-control" placeholder="Nom d'utilisateur" <?php if (isset($_SESSION["name"])) { echo 'value="'.$_SESSION["name"].'"';} ?>>
                    </div>
                    <div class="clearfix"></div><br>

                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock red"></i></span>
                        <input type="password" name="password" class="form-control" placeholder="Mot de passe">
                    </div>

                    <div class="clearfix"><br/></div>
                    
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock red"></i></span>
                        <input type="password" name="confpassword" class="form-control" placeholder="Mot de passe">
                    </div>

                    <div class="clearfix"></div>

                    <p class="center col-md-5">
                        <button type="submit" class="btn btn-primary">Connexion</button>
                    </p>
                </fieldset>
            </form>
        </div>