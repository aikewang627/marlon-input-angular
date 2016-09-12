angular.module('marlon.input.angular', ['marlon.input.data'])
	.value('htmlTemplate', {
			//生成方法：
			//（1）复制至notePad++
			//（2）替换所有的 " 成 \"
			//（3）查找模式，勾上“扩展(\r,\n,\t,……)”，再替换所有的 \r\n 成 " + \r\n "
			marlonInputNum: "<div style=\"position: relative;\"> " +
				"    <!-- " +
				"        作者：aikewang627@163.com " +
				"        时间：2016-09-03 " +
				"        描述： 使用示例	<marlon-input-num-demo name=\"name\" options=\"inputNumOptions\" ng-model=\"marlonNum\" on-after-selected=\"funcNumSelected($item)\"></marlon-input-num-demo> " +
				" " +
				"    --> " +
				"    <!--   普通Input控件，用于显示值，点击时显示编辑框     --> " +
				"    <input type=\"text\" placeholder=\"{{placeholder}}\" ng-click=\"funcInputClick()\" style=\"width:inherit;border:none;\" ng-model=\"ngModel\" " +
				"            /><br /> " +
				"    <!--    编辑框    --> " +
				"    <div ng-if=\"isShow\" class=\" \"  style=\"position:absolute;z-index:10;left:1px;top:22px;width:200px;border:2px solid #808080; border-radius:5px; background-color: #ffffff;\"> " +
				"            <div class=\" text-center\" style=\"margin-top: 0px; margin-bottom: 0px; margin:3px;\"> " +
				"                <div class=\"row\" style=\"margin-top:3px;margin-bottom:3px;\"> " +
				" " +
				"                    <div class=\"col-xs-8  col \"> " +
				"                        <button ng-bind=\"inputNum\" class=\"btn btn-sm btn-block  button-block\" style=\"text-align: right; font:bolder;\"></button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4   \"> " +
				"                        <button ng-click=\"funcBackspace()\" class=\"btn btn-sm  btn-warning btn-block \">C</button> " +
				"                    </div> " +
				" " +
				"                </div> " +
				"                <div class=\"row\" style=\"margin-top:3px;margin-bottom:3px;\"> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('0')\" class=\"btn btn-sm btn-block \">0</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('.')\" ng-disabled=\"isInt=='true'\" class=\"btn btn-sm btn-block \">.</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcInvert()\" ng-disabled=\"isPositive=='true'\" class=\"btn btn-sm btn-block \">-</button> " +
				"                    </div> " +
				"                </div> " +
				"                <div class=\"row \" style=\"margin-top:3px;margin-bottom:3px;\"> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('1')\" class=\"btn btn-sm btn-block \">1</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4\"> " +
				"                        <button ng-click=\"funcClickItem('2')\" class=\"btn btn-sm btn-block \">2</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4\"> " +
				"                        <button ng-click=\"funcClickItem('3')\" class=\"btn btn-sm btn-block \">3</button> " +
				"                    </div> " +
				"                </div> " +
				"                <div class=\"row\" style=\"margin-top:3px;margin-bottom:3px;\"> " +
				"                    <div class=\"col-xs-4\"> " +
				"                        <button ng-click=\"funcClickItem('4')\" class=\"btn btn-sm btn-block \">4</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('5')\" class=\"btn btn-sm btn-block \">5</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('6')\" class=\"btn btn-sm btn-block \">6</button> " +
				"                    </div> " +
				"                </div> " +
				"                <div class=\"row\" style=\"margin-top:3px;margin-bottom:3px;\"> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('7')\" class=\"btn btn-sm btn-block \">7</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('8')\" class=\"btn btn-sm btn-block \">8</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClickItem('9')\" class=\"btn btn-sm btn-block \">9</button> " +
				"                    </div> " +
				"                </div> " +
				"                <div class=\"row\" style=\"margin-top:3px;margin-bottom:3px;\"> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcClear()\" class=\"btn btn-sm btn-warning btn-block  \">清零</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcCancel()\" class=\"btn btn-sm btn-default btn-block  \">取消</button> " +
				"                    </div> " +
				"                    <div class=\"col-xs-4 \"> " +
				"                        <button ng-click=\"funcOk()\" class=\"btn btn-sm btn-success btn-block \">确认</button> " +
				"                    </div> " +
				"                </div> " +
				"            </div> " +
				"            </div> " +
				"        </div>",
			//
			//
			marlonInputTab3: "<div > " +
				"    <!-- " +
				"        作者：aikewang627@163.com " +
				"        时间：2016-09-03 " +
				"        描述： 使用示例	<marlon-input-num-demo name=\"name\" options=\"inputNumOptions\" ng-model=\"marlonNum\" on-after-selected=\"funcNumSelected($item)\"></marlon-input-num-demo> " +
				" " +
				"    --> " +
				"    <!--   普通Input控件，用于显示值，点击时显示编辑框     --> " +
				"    <input type=\"text\" placeholder=\" {{placeholder}} \" ng-click=\"funcInputClick() \" style=\"width:100%;border:none;\" ng-model=\"ngModel \" " +
				"           /><br /> " +
				"    <!--    编辑框    --> " +
				"    <div ng-if=\"isShow \" class=\"modal \" style=\" top:10px; height: 800px;display:block;\" > " +
				"        <div class=\" modal-dialog \"> " +
				"            <div class=\"modal-content \"> " +
				"                <div class=\"modal-header \"> " +
				"                    <h4 class=\"modal-title \"><span ng-bind=\"itemTypeStr\"></span></h4> " +
				"                </div> " +
				"                <div class=\"modal-body \"> " +
				"                    <!--   选中的值，单击删除     --> " +
				"                    <div class=\"\"> " +
				"                        <div class=\"\"> " +
				"                            <span ng-repeat=\"item in selectedItemList \"> " +
				"                                <span ng-click=\"funcUnselectItem(item) \" class=\"btn btn-sm btn-outline-success button button-small button-calm\" style=\"margin: 3px;\"> " +
				"                                    <span ng-bind=\"item \"></span>&ensp;<i class=\"fa fa-remove icon ion-close\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                        </div> " +
				"                    </div> " +
				"                    <!--   候选的值，选项卡    --> " +
				"                    <div class=\"\" style=\"margin-top: 5px;\"> " +
				"                        <div class=\"nav nav-tabs button-bar\"> " +
				"                            <span class=\"btn btn-info btn-sm button button button-royal\" ng-click=\"funcClickTab1()\">全部 </span> " +
				"                            <span class=\"btn btn-info  btn-sm button button button-positive\" ng-click=\"funcClickTab2()\" ng-show=\"curItemPage1.text \" ng-bind=\"curItemPage1.text \"></span> " +
				"                            <span class=\"btn btn-info  btn-sm button button button-calm\" ng-click=\"funcClickTab3()\" ng-show=\"curItemPage2.text \" ng-bind=\"curItemPage2.text \"> </span> " +
				"                            <span style=\"font-size: small; color :#ff0000;\">（最多选择<span ng-bind=\"itemMax\"></span>个）</span> " +
				"                        </div> " +
				"                    </div> " +
				"                    <!--   候选的值，单击添加     --> " +
				"                    <div class=\"tab-content \"> " +
				"                        <div class=\"tab-pane fade in active\" style=\"min-height: 180px; \" > " +
				"                            <span ng-hide=\"curItemPage1 \" ng-repeat=\"item in itemList \"> " +
				"                                <span class=\"btn   btn-sm button button-small button-royal\" style=\"margin: 3px;\" ng-click=\"funcClickItem1(item) \"> " +
				"                                    <span ng-bind=\"item.text \"></span>&ensp;<i class=\"icon ion-chevron-right\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                            <span ng-hide=\"curItemPage2 \" ng-repeat=\"item in curItemPage1.items \"> " +
				"                                <span class=\"btn   btn-sm button button-small button-positive\" style=\"margin: 3px;\" ng-click=\"funcClickItem2(item) \"> " +
				"                                    <span ng-bind=\"item.text \"></span>&ensp;<i class=\"icon ion-chevron-right\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                            <span ng-repeat=\"item in curItemPage2.items \"> " +
				"                                <span class=\"btn   btn-sm button button-small button-calm\" style=\"margin: 3px;\" ng-show=\"funcShowItem3(item)\" ng-click=\"funcClickItem3(item) \"> " +
				"                                    <span ng-bind=\"item.text \"></span>&ensp;<i class=\"icon ion-plus\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                        </div> " +
				"                    </div> " +
				"                    <!--   自定义值，输入完成后，按逗号添加     --> " +
				"                    <input ng-show=\"funcShowCustomInput() \"  class=\"form-control\" type=\"text \" placeholder=\"自定义值，按逗号添加 \" ng-model=\"customItem \" ng-keyup=\"funcCustomKeyup($event) \" /> " +
				"                </div> " +
				"                <!--   关闭窗体     --> " +
				"                <div class=\"modal-footer \"> " +
				"                    <button class=\"btn btn-sm btn-default button button-small button-stable\" ng-click=\"funcCancel() \">&ensp;&ensp;取消&ensp;&ensp;</button> " +
				"                    <button class=\"btn btn-sm btn-success button button-small button-energized\" ng-click=\"funcOk() \">&ensp;&ensp;确定&ensp;&ensp;</button> " +
				"                </div> " +
				"            </div> " +
				"        </div> " +
				"    </div> " +
				"</div>",
			marlonInputTabs: "<div > " +
				"    <!-- " +
				"        作者：aikewang627@163.com " +
				"        时间：2016-09-03 " +
				"        描述： 使用示例	<marlon-input-num-demo name=\"name\" options=\"inputNumOptions\" ng-model=\"marlonNum\" on-after-selected=\"funcNumSelected($item)\"></marlon-input-num-demo> " +
				" " +
				"    --> " +
				"    <!--   普通Input控件，用于显示值，点击时显示编辑框     --> " +
				"    <input type=\"text\" placeholder=\" {{placeholder}} \" ng-click=\"funcInputClick() \" style=\"width:100%;border:none;\" ng-model=\"ngModel \" " +
				"           /><br /> " +
				"    <!--    编辑框    --> " +
				"    <div ng-show=\"isShow \" class=\"modal \" style=\" top:10px; height: 800px;display:block;\" > " +
				"        <div class=\" modal-dialog \"> " +
				"            <div class=\"modal-content \"> " +
				"                <div class=\"modal-header \"> " +
				"                    <h4 class=\"modal-title \"><span ng-bind=\"itemTypeStr\"></span></h4> " +
				"                </div> " +
				"                <div class=\"modal-body \"> " +
				"                    <!--   选中的值，单击删除     --> " +
				"                    <div class=\"\"> " +
				"                        <div class=\"\"> " +
				"                            <span ng-repeat=\"item in selectedItemList \"> " +
				"                                <span ng-click=\"funcUnselectItem(item) \" class=\"btn btn-sm btn-outline-success button button-small button-calm\" style=\"margin: 3px;\"> " +
				"                                    <span ng-bind=\"item \"></span>&ensp;<i class=\"fa fa-remove icon ion-close\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                        </div> " +
				"                    </div> " +
				"                    <!--   候选的值，选项卡    --> " +
				"                    <div class=\"\" style=\"margin-top: 5px;\"> " +
				"                        <div class=\"nav nav-tabs button-bar\"> " +
				"                            <span class=\"btn btn-info btn-sm button button button-royal\" ng-click=\"funcClickTab1()\">全部 </span> " +
				"                            <span class=\"btn btn-info  btn-sm button button button-positive\" ng-click=\"funcClickTab2()\" ng-show=\"curItemPage1.text \" ng-bind=\"curItemPage1.text \"></span> " +
				"                            <span class=\"btn btn-info  btn-sm button button button-calm\" ng-click=\"funcClickTab3()\" ng-show=\"curItemPage2.text \" ng-bind=\"curItemPage2.text \"> </span> " +
				"                            <span style=\"font-size: small; color :#ff0000;\">（最多选择<span ng-bind=\"itemMax\"></span>个）</span> " +
				"                        </div> " +
				"                    </div> " +
				"                    <!--   候选的值，单击添加     --> " +
				"                    <div class=\"tab-content \"> " +
				"                        <div class=\"tab-pane fade in active\" style=\"min-height: 180px; \" > " +
				"                            <span ng-hide=\"curItemPage1 \" ng-repeat=\"item in itemList \"> " +
				"                                <span class=\"btn   btn-sm button button-small button-royal\" style=\"margin: 3px;\" ng-click=\"funcClickItem1(item) \"> " +
				"                                    <span ng-bind=\"item.text \"></span>&ensp;<i class=\"icon ion-chevron-right\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                            <span ng-hide=\"curItemPage2 \" ng-repeat=\"item in curItemPage1.items \"> " +
				"                                <span class=\"btn   btn-sm button button-small button-positive\" style=\"margin: 3px;\" ng-click=\"funcClickItem2(item) \"> " +
				"                                    <span ng-bind=\"item.text \"></span>&ensp;<i class=\"icon ion-chevron-right\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                            <span ng-repeat=\"item in curItemPage2.items \"> " +
				"                                <span class=\"btn   btn-sm button button-small button-calm\" style=\"margin: 3px;\" ng-show=\"funcShowItem3(item)\" ng-click=\"funcClickItem3(item) \"> " +
				"                                    <span ng-bind=\"item.text \"></span>&ensp;<i class=\"icon ion-plus\"></i> " +
				"                                </span> " +
				"                            </span> " +
				"                        </div> " +
				"                    </div> " +
				"                    <!--   自定义值，输入完成后，按逗号添加     --> " +
				"                    <input ng-show=\"funcShowCustomInput() \"  class=\"form-control\" type=\"text \" placeholder=\"自定义值，按逗号添加 \" ng-model=\"customItem \" ng-keyup=\"funcCustomKeyup($event) \" /> " +
				"                </div> " +
				"                <!--   关闭窗体     --> " +
				"                <div class=\"modal-footer \"> " +
				"                    <button class=\"btn btn-sm btn-default button button-small button-stable\" ng-click=\"funcCancel() \">&ensp;&ensp;取消&ensp;&ensp;</button> " +
				"                    <button class=\"btn btn-sm btn-success button button-small button-energized\" ng-click=\"funcOk() \">&ensp;&ensp;确定&ensp;&ensp;</button> " +
				"                </div> " +
				"            </div> " +
				"        </div> " +
				"    </div> " +
				"</div>",

			marlonInputBar: " <div> " +
 "	<!-- " +
 "        作者：aikewang627@163.com " +
 "        时间：2016-09-03 " +
 "        描述： 使用示例	<marlon-input-num-demo name=\"name\" options=\"inputNumOptions\" ng-model=\"marlonNum\" on-after-selected=\"funcNumSelected($item)\"></marlon-input-num-demo> " +
 " " +
 "        注： 此文件是开发时使用的，发布时转变成字符串变量，存放在js文件中。 " +
 "   --> " +
 "	<div> " +
 "		<div ng-if=\"false\"> " +
 "			<span ng-bind=\"itemTypeStr\"></span> " +
 "		</div> " +
 "		<div ng-if=\"false\"> " +
 "			<span ng-repeat=\"item in itemListSelectedText\" class=\"btn btn-default btn-xs\"> " +
 "				<span ng-bind=\"item\"></span><i class=\"fa fa-close\"></i> " +
 "			</span> " +
 "		</div> " +
 "		<div style=\"position:relative; \"> " +
 "			<div style=\"cursor: pointer; line-height:200%\"> " +
 "				<span ng-show=\"HasParent\" class=\"btn btn-info btn-xs\"> " +
 "					<span  ng-click=\"funcGoUpperLevel()\"  ><i class=\"fa fa-chevron-left\"></i>返回</span> " +
 "				</span> " +
 " " +
 "                <span ng-repeat=\"item in itemListShow.items\" ng-show=\"$index<=ShowLength-1\"> " +
 "                    <span ng-bind=\"item.text\" ng-click=\"funcClickItem(itemListShow,item)\" " +
 "                           ng-class=\"{'btn btn-default btn-xs':true,'btn btn-info btn-xs':item.$HasSubSelected,'btn btn-success btn-xs':item.$IsSelected,}\"></span> " +
 "                </span> " +
 " " +
 "				<span ng-show=\"HasMore\"  class=\"btn btn-info btn-xs  pull-right \" > " +
 "					<span ng-show=\"!IsExpend\"ng-click=\"funcSetIsExpend()\">更多<i class=\"fa fa-chevron-circle-down\"></i></span> " +
 "				    <span ng-show=\"IsExpend\"   ng-click=\"funcResetIsExpend()\">收起<i class=\"fa fa-chevron-circle-up\"></i></span> " +
 "				</span> " +
 " " +
 "			</div> " +
 " " +
 "		</div> " +
 "	</div> " +
 "</div> ",


		}

	)
	//
	//
	//

//not finished
.filter("showMore", function() {
		return function(input, num) {
			if(num > 0) {

				return input[num];
			} else {
				return input;
			}

		}

	})
	//
	.directive('marlonInputNum', function(htmlTemplate) {
		/*
             <marlon-input-num name="Scale" is-int="true" is-positive="true" class="form-control "  ng-model="modelPosition.Scale"
             ng-required="true"  form-field-check="formFieldCheck" form-field-errormsg="{ }" ></marlon-input-num>
        */
		return {
			//require: '?ngModel',
			scope: {
				name: '@',
				class: '@',
				placeholder: '@',
				//ngRequired: '@',//
				//formFieldCheck:'@',//
				isInt: '@', //只可输入整数
				isPositive: '@', //只可输入正数
				options: '=',
				ngModel: "=",
				onAfterSelected: '&',

			},
			restrict: 'EA',
			replace: true,
			template: htmlTemplate.marlonInputNum,
			// templateUrl: "http://demo.ddhunter.com/Assets/JS/pluginsDDhunter/marlon-input-angular/marlonInputNum.html",
			controller: function($scope) {
				//console.log($scope);
				$scope.isShow = false; //是否显示编辑区域
				$scope.isInt = $scope.isInt ? true : false; //只可为整数
				$scope.isPositive = $scope.isPositive ? true : false; //只可为正数
				$scope.ngModel = $scope.ngModel ? $scope.ngModel : 0;
				$scope.onAfterSelected = $scope.onAfterSelected ? $scope.onAfterSelected : function() {};
				$scope.inputNumString = ""; //输入的值序列
				$scope.inputNum = 0;
				//点击 input控件，打开编辑框体
				$scope.funcInputClick = function() {
					$scope.inputNum = $scope.ngModel;
					$scope.inputNumString = $scope.inputNum.toString();
					$scope.isShow = true;
					console.log($scope);

				};
				//输入
				$scope.funcClickItem = function(item) {
					//避免输入00、01等类似值
					if($scope.inputNumString == "0") {
						$scope.inputNumString = "";
					}
					//
					var temp = $scope.inputNumString + item;
					var match = temp.match(/^(-?\d*)?(\.\d*)?$/g); //(/^(-?\d*)?(\.\d*)?$/g);
					if(match) {
						$scope.inputNum = match[0];
						$scope.inputNumString = $scope.inputNum.toString();
					}
				};
				//取反
				$scope.funcInvert = function() {
					$scope.inputNum = -$scope.inputNum;
					$scope.inputNumString = $scope.inputNum.toString();
				};
				//回退
				$scope.funcBackspace = function() {
					var len = $scope.inputNumString.length;
					if(len > 0) {

						var temp = $scope.inputNumString.substr(0, len - 1);
						var match = temp.match(/^(-?\d*)?(\.\d*)?$/g); //(/^(-?\d*)?(\.\d*)?$/g);
						if(match) {
							$scope.inputNum = match[0];
							$scope.inputNumString = $scope.inputNum.toString();
						}
					}
				};
				//清空
				$scope.funcClear = function() {
					$scope.inputNum = 0;
					$scope.inputNumString = $scope.inputNum.toString();
				};
				//关闭编辑窗体
				$scope.funcCancel = function() {
					$scope.inputNum = $scope.ngModel;
					$scope.isShow = false;
				};
				//关闭编辑窗体，变更模型值，同时触发回调事件
				$scope.funcOk = function() {
					$scope.ngModel = $scope.inputNum; // $scope.inputNumString.trim("0");
					//console.log($scope.ngModel);
					$scope.isShow = false;
					$scope.onAfterSelected({
						$item: $scope.inputNumString,
					}); //以对象形式，传递参数

				};

			}

		}

	})
	//
	.directive('marlonInputTab3', function(htmlTemplate, marlonInputTabsItemList) {

		/*
		     <marlon-input-tab3 name="OrgPro" is-tab2-="false" class="form-control" item-type="industry" item-max="1" item-list-custom="modelPosition.$$itemListCustom" ng-model="modelPosition.OrgPro"
		    ng-required="true"  form-field-check="formFieldCheck" form-field-errormsg="{ }"></marlon-input-tab3>
		*/
		return {
			//require: '?ngModel',
			scope: {
				name: '@',
				class: '@',
				placeholder: '@',
				// ngRequired: '@',//
				// formFieldCheck: '@',//
				sperator: '@', //子项内分隔符，子项间分隔符固定为','
				itemMax: '@', //最大条目
				itemType: '@', //行业：industry，职位：position，位置：location，自定义：custom
				itemTypeStr: '@', //标题
				itemInputCustom: '@', //允许自定义输入
				isTab1: '@', //是否采用1个选项卡
				isTab2: '@', //是否采用2个选项卡
				isFullItem: '@', //是否保存全路径
				itemListCustom: '=', //自定义数据列表
				options: '=',
				ngModel: "=", //模型值
				onAfterSelected: '&', //完成后事件

			},
			restrict: 'EA',
			//replace: true,
			template: htmlTemplate.marlonInputTab3,
			// templateUrl: "http://demo.ddhunter.com/Assets/JS/pluginsDDhunter/marlon-input-angular/marlonInputTab3.html",
			controller: function($scope) {
				//console.log($scope);
				//获取初始化数据
				$scope.sperator = $scope.sperator ? $scope.sperator : "-"; //分隔符
				$scope.itemMax = $scope.itemMax ? $scope.itemMax : 3; //可选择的最大数
				$scope.itemType = $scope.itemType ? $scope.itemType : ""; //
				$scope.itemTypeStr = "";
				$scope.isTab1 = $scope.isTab1 ? true : false; //是否采用2个选项卡
				$scope.isTab2 = $scope.isTab2 ? true : false; //是否采用2个选项卡
				$scope.isFullItem = $scope.isFullItem ? true : false; //是否保存全路径
				$scope.itemInputCustom = $scope.itemInputCustom ? true : false; //
				//$scope.itemListCustom = $scope.itemListCustom ? $scope.itemListCustom : [];

				if($scope.itemType == "custom") {
					$scope.itemList = $scope.itemListCustom;
				} else {
					$scope.itemList = marlonInputTabsItemList[$scope.itemType]; // [];
				}
				//
				$scope.isShow = false; //是否显示编辑区域
				$scope.curItemPage1 = null;
				$scope.curItemPage2 = null;
				$scope.selectedItemList = []; //选择的值"XXXX-XXXX-XXXX", "XXXX-XXXX-XXXX"//选择的值{text:"",value:002,}
				$scope.customItem = ""; //自定义值

				//点击 input控件，打开编辑框体
				$scope.funcInputClick = function() {
					console.log($scope.isTab2);
					$scope.selectedItemList = [];
					$scope.selectedItemList = $scope.ngModel ? $scope.ngModel.split(',') : [];
					$scope.isShow = true;
				};
				//单击页面头1
				$scope.funcClickTab1 = function() {
					$scope.curItemPage1 = null;
					$scope.curItemPage2 = null;
				};
				//单击页面头2
				$scope.funcClickTab2 = function() {
					$scope.curItemPage2 = null;
				};
				//单击页面1
				$scope.funcClickItem1 = function(item) {
					console.log(item);
					if(($scope.isTab1 === "true") || (item.items == undefined) || (item.items[0].text == "")) {
						if($scope.selectedItemList.length >= $scope.itemMax) {
							return;
						};
						var isExist = false;
						var tempItemValue = item.text;
						angular.forEach($scope.selectedItemList, function(value, key) {
							if(value === tempItemValue) {
								isExist = true;
							}
						})
						if(!isExist) {
							$scope.selectedItemList.push(tempItemValue);
						}

					} else {
						$scope.curItemPage1 = item;
						//console.log($scope.curItemPage2);
					}

					//console.log($scope.curItemPage1);
				};
				//单击页面2
				$scope.funcClickItem2 = function(item) {
					if(($scope.isTab2 === "true") || (item.items == undefined) || (item.items[0].text == "")) {
						if($scope.selectedItemList.length >= $scope.itemMax) {
							return;
						};
						var isExist = false;
						var tempItemValue = item.text;
						if($scope.isFullItem == "true") {
							tempItemValue = $scope.curItemPage1.text + $scope.sperator + item.text;
						}
						angular.forEach($scope.selectedItemList, function(value, key) {
							if(value === tempItemValue) {
								isExist = true;
							}
						})
						if(!isExist) {
							$scope.selectedItemList.push(tempItemValue);
						}

					} else {
						$scope.curItemPage2 = item;
						//console.log($scope.curItemPage2);
					}
				};
				//单击页面3，加入选择集合
				$scope.funcClickItem3 = function(item) {
					if($scope.selectedItemList.length >= $scope.itemMax) {
						return;
					};
					var isExist = false;
					var tempItemValue = item.text;
					if($scope.isFullItem == "true") {
						tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.curItemPage2.text + $scope.sperator + item.text;
					}
					angular.forEach($scope.selectedItemList, function(value, key) {
						if(value === tempItemValue) {
							isExist = true;
						}
					})
					if(!isExist) {
						$scope.selectedItemList.push(tempItemValue);
					}
				};
				//单击页面3，是否显示此条目
				$scope.funcShowItem3 = function(item) {
					var isExist = false;
					var tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.curItemPage2.text + $scope.sperator + item.text;
					angular.forEach($scope.selectedItemList, function(value, key) {
						if(value === tempItemValue) {
							isExist = true;
						}
					})
					return(!isExist);
				};
				//是否显示自定义输入框
				$scope.funcShowCustomInput = function() {
					if($scope.itemInputCustom == 'true') {
						if($scope.isTab1 === "true") {
							return true;
						} else if($scope.isTab2 === "true") {
							return $scope.curItemPage1;
						} else {
							return $scope.curItemPage2;
						}

					} else {
						return false;
					}
				};
				//自定义时，输入完成后，按逗号添加进选择集合
				$scope.funcCustomKeyup = function($event) {
					var keycode = window.event ? $event.keyCode : $event.which;
					//188： ,号；13：回车 ；32，空格；
					if(keycode == 188) {
						//去掉,号
						$scope.customItem = $scope.customItem.substr(0, $scope.customItem.length - 1);
						if($scope.selectedItemList.length >= $scope.itemMax) {
							return;
						};
						//				       
						var tempItemValue = $scope.customItem;
						if($scope.isFullItem == "true") {
							if($scope.isTab1 === "true") {
								tempItemValue = $scope.customItem;
							} else if($scope.isTab2 === "true") {
								tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.customItem;
							} else {
								tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.curItemPage2.text + $scope.sperator + $scope.customItem;
							}
						}
						//判断是否存在
						var isExist = false;
						angular.forEach($scope.selectedItemList, function(value, key) {
							if(value === tempItemValue) {
								isExist = true;
							}
						})
						if(!isExist) {
							$scope.selectedItemList.push(tempItemValue);
							$scope.customItem = "";
						}
					}
				};
				//单击已选择项，从已选择集合中删除
				$scope.funcUnselectItem = function(item) {
					var isExist = false;
					var index;
					angular.forEach($scope.selectedItemList, function(value, key) {
						if(value === item) {
							isExist = true;
							index = key;
						}
					})
					if(isExist) {
						$scope.selectedItemList.splice(index, 1);
					}
				};
				//关闭编辑窗体
				$scope.funcCancel = function() {
					$scope.isShow = false;
				};
				//关闭编辑窗体，变更模型值，同时触发回调事件
				$scope.funcOk = function() {
					$scope.ngModel = $scope.selectedItemList ? $scope.selectedItemList.join(",") : "";
					$scope.isShow = false;
					$scope.onAfterSelected({
						$item: $scope.selectedItemList,
					}); //以对象形式，传递参数					
				};

			}

		}

	})
	//尚未调试
	.directive('marlonInputTabs', function(htmlTemplate, marlonInputTabsItemList) {

		/*
		     <marlon-input-tab3 name="OrgPro" is-tab2-="false" class="form-control" item-type="industry" item-max="1" item-list-custom="modelPosition.$$itemListCustom" ng-model="modelPosition.OrgPro"
		    ng-required="true"  form-field-check="formFieldCheck" form-field-errormsg="{ }"></marlon-input-tab3>
		*/
		return {
			//require: '?ngModel',
			scope: {
				name: '@',
				class: '@',
				placeholder: '@',
				// ngRequired: '@',//
				// formFieldCheck: '@',//
				sperator: '@', //子项内分隔符，子项间分隔符固定为','
				itemMax: '@', //最大条目
				itemType: '@', //行业：industry，职位：position，位置：location，自定义：custom
				itemInputCustom: '@', //允许自定义输入
				isTab1: '@', //是否采用1个选项卡
				isTab2: '@', //是否采用2个选项卡
				itemListCustom: '=', //自定义数据列表
				options: '=',
				ngModel: "=", //模型值
				onAfterSelected: '&', //完成后事件

			},
			restrict: 'EA',
			//replace: true,
			template: htmlTemplate.marlonInputTab3,
			// templateUrl: "http://demo.ddhunter.com/Assets/JS/pluginsDDhunter/marlon-input-angular/marlonInputTab3.html",
			controller: function($scope) {
				// console.log($scope);
				//获取初始化数据
				$scope.sperator = $scope.sperator ? $scope.sperator : "-"; //分隔符
				$scope.itemMax = $scope.itemMax ? $scope.itemMax : 3; //可选择的最大数
				$scope.itemType = $scope.itemType ? $scope.itemType : ""; //
				$scope.itemTypeStr = "";
				$scope.isTab1 = $scope.isTab1 ? true : false; //是否采用2个选项卡
				$scope.isTab2 = $scope.isTab2 ? true : false; //是否采用2个选项卡
				$scope.itemInputCustom = $scope.itemInputCustom ? true : false; //
				//$scope.itemListCustom = $scope.itemListCustom ? $scope.itemListCustom : [];
				$scope.itemListIndustry = marlonInputTab3ItemList.industry;
				$scope.itemListPosition = marlonInputTab3ItemList.position;
				$scope.itemListLocation = marlonInputTab3ItemList.location;

				$scope.itemList = [];
				if($scope.itemType == "industry") {
					$scope.itemList = $scope.itemListIndustry;
					$scope.itemTypeStr = "行业选择";
				} else if($scope.itemType == "position") {
					$scope.itemList = $scope.itemListPosition;
					$scope.itemTypeStr = "职位选择";
				} else if($scope.itemType == "location") {
					$scope.itemList = $scope.itemListLocation;
					$scope.itemTypeStr = "地点选择";
				} else {
					$scope.itemList = $scope.itemListCustom;
					$scope.itemTypeStr = "请选择";
				}
				//
				$scope.isShow = false; //是否显示编辑区域
				$scope.curItemPage1 = null;
				$scope.curItemPage2 = null;
				$scope.selectedItemList = []; //选择的值"XXXX-XXXX-XXXX", "XXXX-XXXX-XXXX"//选择的值{text:"",value:002,}
				$scope.customItem = ""; //自定义值

				//点击 input控件，打开编辑框体
				$scope.funcInputClick = function() {
					console.log($scope.isTab2);
					$scope.selectedItemList = [];
					$scope.selectedItemList = $scope.ngModel ? $scope.ngModel.split(',') : [];
					$scope.isShow = true;
				};
				//单击页面头1
				$scope.funcClickTab1 = function() {
					$scope.curItemPage1 = null;
					$scope.curItemPage2 = null;
				};
				//单击页面头2
				$scope.funcClickTab2 = function() {
					$scope.curItemPage2 = null;
				};
				//单击页面1
				$scope.funcClickItem1 = function(item) {
					if($scope.isTab1 === "true") {
						if($scope.selectedItemList.length >= $scope.itemMax) {
							return;
						};
						var isExist = false;
						var tempItemValue = item.text;
						angular.forEach($scope.selectedItemList, function(value, key) {
							if(value === tempItemValue) {
								isExist = true;
							}
						})
						if(!isExist) {
							$scope.selectedItemList.push(tempItemValue);
						}

					} else {
						$scope.curItemPage1 = item;
						//console.log($scope.curItemPage2);
					}

					//console.log($scope.curItemPage1);
				};
				//单击页面2
				$scope.funcClickItem2 = function(item) {
					if($scope.isTab2 === "true") {
						if($scope.selectedItemList.length >= $scope.itemMax) {
							return;
						};
						var isExist = false;
						var tempItemValue = $scope.curItemPage1.text + $scope.sperator + item.text;
						angular.forEach($scope.selectedItemList, function(value, key) {
							if(value === tempItemValue) {
								isExist = true;
							}
						})
						if(!isExist) {
							$scope.selectedItemList.push(tempItemValue);
						}

					} else {
						$scope.curItemPage2 = item;
						//console.log($scope.curItemPage2);
					}
				};
				//单击页面3，加入选择集合
				$scope.funcClickItem3 = function(item) {
					if($scope.selectedItemList.length >= $scope.itemMax) {
						return;
					};
					var isExist = false;

					var tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.curItemPage2.text + $scope.sperator + item.text;
					angular.forEach($scope.selectedItemList, function(value, key) {
						if(value === tempItemValue) {
							isExist = true;
						}
					})
					if(!isExist) {
						$scope.selectedItemList.push(tempItemValue);
					}
				};
				//单击页面3，是否显示此条目
				$scope.funcShowItem3 = function(item) {
					var isExist = false;
					var tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.curItemPage2.text + $scope.sperator + item.text;
					angular.forEach($scope.selectedItemList, function(value, key) {
						if(value === tempItemValue) {
							isExist = true;
						}
					})
					return(!isExist);
				};
				//是否显示自定义输入框
				$scope.funcShowCustomInput = function() {
					if($scope.itemInputCustom == 'true') {
						if($scope.isTab1 === "true") {
							return true;
						} else if($scope.isTab2 === "true") {
							return $scope.curItemPage1;
						} else {
							return $scope.curItemPage2;
						}

					} else {
						return false;
					}
				};
				//自定义时，输入完成后，按逗号添加进选择集合
				$scope.funcCustomKeyup = function($event) {
					var keycode = window.event ? $event.keyCode : $event.which;
					if(keycode == 188) {
						$scope.customItem = $scope.customItem.substr(0, $scope.customItem.length - 1);
						if($scope.selectedItemList.length >= $scope.itemMax) {
							return;
						};
						console.log($scope.customItem);
						var tempItemValue = "";
						if($scope.isTab1 === "true") {
							tempItemValue = $scope.customItem;
						} else if($scope.isTab2 === "true") {
							tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.customItem;
						} else {
							tempItemValue = $scope.curItemPage1.text + $scope.sperator + $scope.curItemPage2.text + $scope.sperator + $scope.customItem;
						}
						console.log(tempItemValue);
						var isExist = false;
						angular.forEach($scope.selectedItemList, function(value, key) {
							if(value === tempItemValue) {
								isExist = true;
							}
						})
						if(!isExist) {
							$scope.selectedItemList.push(tempItemValue);
							$scope.customItem = "";
						}
					}
				};
				//单击已选择项，从已选择集合中删除
				$scope.funcUnselectItem = function(item) {
					var isExist = false;
					var index;
					angular.forEach($scope.selectedItemList, function(value, key) {
						if(value === item) {
							isExist = true;
							index = key;
						}
					})
					if(isExist) {
						$scope.selectedItemList.splice(index, 1);
					}
				};
				//关闭编辑窗体
				$scope.funcCancel = function() {
					$scope.isShow = false;
				};
				//关闭编辑窗体，变更模型值，同时触发回调事件
				$scope.funcOk = function() {
					$scope.ngModel = $scope.selectedItemList ? $scope.selectedItemList.join(",") : "";
					$scope.isShow = false;
					$scope.onAfterSelected({
						$item: $scope.selectedItemList,
					}); //以对象形式，传递参数					
				};

			}

		}

	})
	//
	.directive('marlonInputBar', function(htmlTemplate, marlonInputTabsItemList) {

		/*
		     <marlon-input-tab3 name="OrgPro" is-tab2-="false" class="form-control" item-type="industry" item-max="1" item-list-custom="modelPosition.$$itemListCustom" ng-model="modelPosition.OrgPro"
		    ng-required="true"  form-field-check="formFieldCheck" form-field-errormsg="{ }"></marlon-input-tab3>
		*/
		return {
			//require: '?ngModel',
			scope: {
				name: '@',
				class: '@',
				placeholder: '@',
				// ngRequired: '@',//
				// formFieldCheck: '@',//
				sperator: '@', //子项内分隔符，子项间分隔符固定为','
				itemMax: '@', //最大条目
				itemLevel: '@', //条目层级
				partShowNum:'@',
				itemType: '@', //行业：industry，职位：position，位置：location，自定义：custom
				itemTypeStr: '@',
				itemListCustom: '=', //自定义数据列表
				itemInputCustom: '@', //允许自定义输入			
				//options: '=',
				ngModel: "=", //模型值
				//onAfterSelected: '&', //完成后事件

			},
			restrict: 'EA',
			//replace: true,
			 template: htmlTemplate.marlonInputBar,
			// templateUrl: "http://demo.ddhunter.com/Assets/JS/pluginsDDhunter/marlon-input-angular/marlonInputBar.html",        
			// templateUrl: "marlonInputBar.html",
			controller: function($scope) {
				console.log($scope);
				//获取初始化数据
				$scope.sperator = $scope.sperator ? $scope.sperator : "-"; //分隔符
				$scope.itemMax = $scope.itemMax ? $scope.itemMax : 3; //可选择的最大数
				$scope.itemLevel = $scope.itemLevel ? $scope.itemLevel : 999; //可选择的最大数
				$scope.partShowNum = $scope.partShowNum?$scope.partShowNum:999;
				$scope.itemType = $scope.itemType ? $scope.itemType : ""; //
				$scope.itemTypeStr = "";
				$scope.isFullItem = $scope.isFullItem ? true : false; //是否保存全路径
				//$scope.itemListCustom = $scope.itemListCustom ? $scope.itemListCustom : [];

				//
				if($scope.itemType == "custom") {
					$scope.itemList = $scope.itemListCustom;
				} else {
					$scope.itemList = marlonInputTabsItemList[$scope.itemType]; // [];
				}
				$scope.itemListCopy=angular.copy($scope.itemList);
				$scope.itemListRoot = {
					text: "",
					value: 0000,
					items: $scope.itemListCopy
				};
				//展开的路由
				$scope.ExpendRoute = [];
				$scope.ExpendRoute.unshift($scope.itemListRoot);
				//当前展开项
				$scope.itemListShow = $scope.ExpendRoute[0];
				$scope.itemListSelectedText = [];
				$scope.itemListSelectedValue = [];
				//显示部分、全部

				$scope.HasMore = $scope.itemListShow.items.length > $scope.partShowNum;
				$scope.IsExpend = false;
				$scope.ShowLength = $scope.partShowNum;
				$scope.funcSetIsExpend = function(obj) {
					$scope.IsExpend = true;
					$scope.ShowLength = $scope.itemListShow.items.length;
				};
				$scope.funcResetIsExpend = function() {
					$scope.IsExpend = false;
					$scope.ShowLength = $scope.partShowNum;
				};
				//是否有上级
				$scope.HasParent = false;
				$scope.CurPageParent = {};

				//寻找所有的已经选择的项目
				$scope.findSelectedItem = function(target, parentText) {

					var itemFullStr = "";
					if(parentText == "") {
						itemFullStr = target.text;
					} else {
						itemFullStr = parentText + "-" + target.text;
					}
					if(target.$IsSelected == true) {
						$scope.itemListSelectedText.push(itemFullStr);
						$scope.itemListSelectedValue.push(target.value);
					}
					//判断遍历结束条件
					if((target.items == undefined) || (target.items[0].text == "")) {} else {
						for(var i = 0; i < target.items.length; i++) {
							$scope.findSelectedItem(target.items[i], itemFullStr)
						}
					}
				}
				//取消所有的选择
				$scope.unselectedAll=function(target){
					//
					if(target.$IsSelected == true) {
						target.$IsSelected = false;
					}
					//判断遍历结束条件
					if((target.items == undefined) || (target.items[0].text == "")) {} else {
						for(var i = 0; i < target.items.length; i++) {
							$scope.unselectedAll(target.items[i] )
						}
					}					
				}
				//取消选择某项
				$scope.unselectedItem=function(target,item){
					
					
				}
				//单击条目(进入下一级、选择)
				$scope.funcClickItem = function(parent, item) {
					//没有子级，或不许展开时
					if((item.items == undefined) || (item.items[0].text == "") || ($scope.ExpendRoute.length >= $scope.itemLevel)) {

						//取消选择
						if(item.$IsSelected == true) {
							//单选时
							if($scope.itemMax==1)
							{
							   item.$IsSelected = false;
							}//多选时
							else
							{
								item.$IsSelected = false;
							}
						}
						//添加选择
						else {
							//单选时
							if($scope.itemMax==1)
							{
								$scope.unselectedAll($scope.itemListRoot);
								item.$IsSelected = true;
							}	
							//多选时
							else if($scope.itemListSelectedText.length < $scope.itemMax) {
								item.$IsSelected = true;
							}
						}
						//遍历，更新已选择列表
						$scope.itemListSelectedText = [];
						$scope.itemListSelectedValue = [];
						$scope.findSelectedItem($scope.itemListRoot, "");
						$scope.ngModel={text:$scope.itemListSelectedText.join(","),value:$scope.itemListSelectedValue.join(",")};
					}
					//有子级
					else {
						$scope.ExpendRoute.unshift(item); //
						$scope.itemListShow = $scope.ExpendRoute[0];
						//$scope.CurPageParent = $scope.ExpendRoute[1];	
						$scope.ShowLength = $scope.itemListShow.items.length;
						$scope.HasMore = false;

						$scope.HasParent = true;
						$scope.CurPageParent = parent;
					}

				};
				//返回上级
				$scope.funcGoUpperLevel = function() {
					
					if($scope.ExpendRoute.length >= 2) {
						//判断是否有子项被选择
						$scope.ExpendRoute[0].$HasSubSelected = false;
						for(var i = 0; i < $scope.ExpendRoute[0].items.length; i++) {
							if(($scope.ExpendRoute[0].items[i].$IsSelected == true) || ($scope.ExpendRoute[0].items[i].$HasSubSelected == true)) {
								$scope.ExpendRoute[0].$HasSubSelected = true;
								break;
							}
						}
						//切换至上一级						
						$scope.ExpendRoute.shift(); //
						$scope.itemListShow = $scope.ExpendRoute[0];
						//$scope.CurPageParent = $scope.ExpendRoute[1];
						$scope.ShowLength = $scope.itemListShow.items.length;						
						$scope.HasMore = false
					};
					if($scope.ExpendRoute.length <= 2) {
						//$scope.CurPageParent = {};
						$scope.HasParent = false;
						$scope.ShowLength = $scope.itemListRoot.items.length;						
						$scope.HasMore = $scope.itemListRoot.items.length > $scope.partShowNum;
					};
				};

			}

		}

	});
