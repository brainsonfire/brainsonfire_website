<?php $title = 'Pages List' ?>
<?php include("inc/head.php"); ?>
<body>
    <style type="text/css">
        #header { margin: 0; }
        #logo { display: table; float: none; margin: 0 auto; position: relative; }
        .right-off-canvas-menu { display: none;}
        ul { list-style: none; display: table; width: 100%; padding: 0; margin: 0 auto; }
        li { float: left; width: 100%; max-width: 240px; padding: 8px 12px; text-align: center; }
        a { font: 18px/24px "infotextsemibold", Arial, Helvetica, sans-serif; color: #333; }
        .tab-bar { display: none; }
    </style>
    <!--[if lte IE 7]><p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p><![endif]-->
    <?php include("inc/header.php"); ?>

    <main>
        <section>
                <ul id="file-list" class="clearfix">
                    <?php
                    $implemented    = file('implemented.txt', FILE_IGNORE_NEW_LINES);
                    $ignore         = array('.', '..', 'favicon.png', 'index.php', 'implemented.txt', 'Config.codekit', '.DS Store', '.git-ftp.log');
                    $replace        = array( '_', '.php');
                    $dir            = opendir(".");
                    $all_good_files = array();
                    foreach ($implemented as &$imp) $imp = trim($imp);
                    while (($file = readdir($dir)) !== false) {
	                    if (!in_array($file, $ignore) && !is_dir($file)) {
	                    	$all_good_files[] = $file;
	                    }
                    }
                    // sort files (thank you Dusan!! :D)
                    sort($all_good_files);
                    // show all files
                    foreach ($all_good_files as $file) {
                    ?>
                    <li<?php
                        if (in_array($file, $implemented))
                        echo ' class="implemented"';
                        ?>> <a href="<?php
                        echo $file;
                        ?>"><?php
                        echo ucwords(str_replace($replace, ' ', $file));
                    ?> </a> </li>
                    <?php
                    } // foreach
                    closedir($dir);
                    ?>
                </ul>
        </section>
    </main>
    <script type="text/javascript" src="js/min/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="js/min/helper.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('a[href$=".htaccess"]').parent().hide();
            $('a[href$="error_log"]').parent().hide();
            $('a[href$="config.rb"]').parent().hide();
            $('a[href$="MIT-LICENSE.txt"]').parent().hide();
            $('a[href$="foundation_index.html"]').parent().hide();
            $('a[href$="humans.txt"]').parent().hide();
            $('a[href$="robots.txt"]').parent().hide();
            $('a[href$="license_framework.txt"]').parent().hide();
        });
    </script>
</body>
</html>
