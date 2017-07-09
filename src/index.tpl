<!doctype html>
<html>
<head>
	<base href="../../../">
	<meta charset="utf-8">
	<title>Craft</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

	<!-- build:css({.tmp/,./}) styles/styles.css -->
	<link rel="stylesheet" type="text/css" href="node_modules/highlight.js/styles/monokai.css">
	<link rel="stylesheet" type="text/css" href="node_modules/font-awesome/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.css">

	<link rel="stylesheet" type="text/css" href="styles/index.css">
	<!-- endbuild -->
</head>
<body>
	<div class="all">
		<%= menu %>
		<div class="mid">
			<div class="container posts">
				<%= content %>

			</div>
			<%= footer %>
		</div>
	</div>

	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-48138722-11', 'auto');
	ga('send', 'pageview');

	</script>

	<!-- build:js({.tmp/,./}) scripts/scripts.js -->
	<script src="node_modules/highlight.js/lib/highlight.js"></script>
	
	<script src="scripts/index.js"></script>
	<!-- endbuild -->
</body>
</html>
