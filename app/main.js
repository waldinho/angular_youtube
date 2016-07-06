(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));



$.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoCategoryId=17&key=AIzaSyAjp5wSXG0pdARuxo70JPQ98p3dNwNTL0c",
    dataType: 'json',
    success: function(results){
    	console.log(results);
        // console.log(results.items[4].snippet.title);
        for (var i = 0; i < results.length; i++) {
        	$('#data').append(JSON.stringify(results[i]));
        	console.log(results);
        }
    }
});

