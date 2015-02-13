/**
*  Module
*
* Description
*/
angular.module('starter.controllers', [])
/* ============================================================================
*
* This controller is associated with the home state as specified in the 
* stateProvider @see app.js for additional information on the detail state.
*
* the view associated with this controller is views/home.html
*
* all functions and models associated with this state, should be managed/created
* in this controller
*
*  ============================================================================ */
.controller('HomeController', ['$scope','ItemService', '$ionicModal','$state', 'test',
	function($scope, ItemService, $ionicModal, $state, test){


		$scope.items = test.query();


		/**
		* this function is called to display the modal window 
		* for adding new items to the collection of data
		* and eventually saving it in the datastore
		*
		* information on $ionicModal is available here
		* - http://ionicframework.com/docs/api/service/$ionicModal/
		*/
		$scope.doAddNewItem = function() {

			console.debug("doAddNewItem")

			$ionicModal.fromTemplateUrl('views/editItem.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {

				$scope.modal = modal;

				// clear out the model that is being
				// used in the display of the modal
				$scope.newEntry = {};

				// show the modal dialog
				$scope.modal.show();
			})  

		};

		/**
		* called from the UI to closed the modal dialog
         * this handles the click on the save button and the close
         * button, if _save is true than save the data; else just close
         * and cleanup
         */
         $scope.closeModal = function(_save) {
         	if (_save) {
         		console.debug("saving the data");
         		console.debug(JSON.stringify($scope.newEntry));

         		// this is where you would call the service with
         		// the new information to save
         	}

         	// hide the modal dialog
         	$scope.modal.hide();
         };

		/**
		* cleaning up the modal so there is no lingering
		* memory objects left around
		*/
		$scope.$on('$destroy', function() {
			$scope.newEntry = null;
			$scope.modal.remove();
		});

    $scope.getData = {};
    $scope.putData = {};
    $scope.postData = {};
    $scope.deleteData = {};
    $scope.response = {};

    function genericErrorHandler(_error) {
        console.log(_error.data);
        $scope.response = _error.data;
    }

        /**
         *
         * @param $scope
         */
         $scope.doList = function () {
            // specific helper classes for the HTTP VERBS
            test.query()
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);
        };


        /**
         *
         * @param $scope
         */
         $scope.doGet = function () {

            if (!$scope.getData.id) {
                $scope.doList();
                return;
            }

            test.get({_id: $scope.getData.id})
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);

        };


        /**
         *
         * @param $scope
         */
         $scope.doPost = function () {

            test.save(JSON.parse($scope.postData.json))
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);
        };

        /**
         *
         * @param $scope
         */
         $scope.doPut = function () {

            var objectData = JSON.parse($scope.putData.json);
            objectData._id = $scope.putData.id;

            test.update(objectData)
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);

        };


        /**
         *
         * @param $scope
         */
         $scope.doDelete = function () {

            test.remove({_id: $scope.deleteData.id})
            .$promise.then(function (_response) {
                $scope.response = _response;
            }).catch(genericErrorHandler);
        };
    }])

/* ============================================================================
*
* This controller is associated with the detail state as specified in the 
* stateProvider @see app.js for additional information on the detail state.
*
* the view associated with this controller is views/editItem.html
*
* all functions and models associated with this state, should be managed/created
* in this controller
*
*  ============================================================================ */
.controller('DetailController', ['$scope','ItemService', '$state', 
	function($scope, ItemService, $state){
		$scope.items = ItemService.getAllItems();
	}])