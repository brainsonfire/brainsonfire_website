<?php $title = 'Pages List' ?>
<?php include("inc/head.php"); ?>
<body>
    <style type="text/css">
        #header { margin: 0; }
        ul { list-style: none; float: left; width: 100%; }
        li { float: left; padding: 6px 0; width: 100%; }
        @media screen and (min-width:1025px) {
            ul li { width: 33%; }
        }
        @media screen and (min-width:768px) and (max-width:1024px) {
            ul { width: 50%; }
        }
    </style>
    <!--[if lte IE 7]><p class="chromeframe"> <strong>You are using an outdated browser.</strong><br /> <br />Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p><![endif]-->
    <header id="header">
    </header>
            <main>
            <section>
                <ul id="file-list" class="clearfix">
                    <?php
                    $implemented    = file('implemented.txt', FILE_IGNORE_NEW_LINES);
                    $ignore         = array('.', '..', 'favicon.png', 'index.php', 'implemented.txt', 'Config.codekit', '.DS Store');
                    $replace        = array( '_', '.php');
                    $dir            = opendir(".");
                    $all_good_files = array();
                    foreach ($implemented as &$imp)
                    $imp = trim($imp);
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
