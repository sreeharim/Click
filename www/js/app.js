var myApp = angular.module("myModule",[])
				   .controller("myController",function($scope,$timeout){
				   	$scope.count = 0;
				   	$scope.addCount = function(){
				   		
				   		$scope.count++;
				   	}
				   	$scope.counter='Start';
				   	$scope.onTimeout = function(){
				   		if($scope.counter == 0){
				   			$timeout.cancel(mytimeout);
				   			$scope.counter = 'Play Again';
				   		}
				   		else{
				   			$scope.counter--;
        					mytimeout = $timeout($scope.onTimeout,1000);
				   		}

    					}
    				$scope.start = function(){
    					if($scope.counter == 'Start'){
				   			$scope.counter = 10;
    						mytimeout = $timeout($scope.onTimeout,1000);
    					}
    					else if($scope.counter == 'Play Again'){
				   			$scope.count = -1;
    						$scope.counter='Start';
    					}
    				}	
    				var mytimeout;
    				$scope.playSound = function(){
 			        var q= window.location.pathname;
        			var url = q.substring(0, q.lastIndexOf('/')) + "/res/click.wav";
        			var myMedia = new Media(url,
           			 // success callback
             			function () { console.log("playAudio():Audio Success"); },
            			// error callback
            			 function (err) { console.log("playAudio():Audio Error: " + err.code+"  "+ err.message );});
        			myMedia.play();     
    				}
				   });

