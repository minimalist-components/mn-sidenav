"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnSidenav=function(_HTMLElement){function MnSidenav(self){var _this,_ret;return _classCallCheck(this,MnSidenav),self=_this=_possibleConstructorReturn(this,(MnSidenav.__proto__||Object.getPrototypeOf(MnSidenav)).call(this,self)),_this.setOpenEvents(),_this.setToggleEvents(),_this.setCloseEvents(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnSidenav,_HTMLElement),_createClass(MnSidenav,[{key:"setToggleEvents",value:function(){var _this2=this,buttons=document.querySelectorAll('[toggle-sidenav="'+this.id+'"]');Array.from(buttons).forEach(function(button){return button.addEventListener("click",function(event){_this2.toggle(),event.stopPropagation()})})}},{key:"setOpenEvents",value:function(){var _this3=this,buttons=document.querySelectorAll('[open-sidenav="'+this.id+'"]');Array.from(buttons).forEach(function(button){return button.addEventListener("click",function(event){_this3.open(),event.stopPropagation()})})}},{key:"setCloseEvents",value:function(){var _this4=this,buttons=document.querySelectorAll("[close-sidenav]");Array.from(buttons).forEach(function(button){return button.addEventListener("click",function(){return _this4.close()})}),document.addEventListener("click",function(event){var clickOutside=!event.target.closest("mn-sidenav"),sidebarVisible=_this4.classList.contains("visible");clickOutside&&sidebarVisible&&_this4.close()}),document.addEventListener("keyup",function(){var esc=27===event.keyCode,isOpened=document.body.classList.contains("mn-sidenav-visible");if(esc&&isOpened){var sidenav=document.querySelector("mn-sidenav.visible");document.body.classList.remove("mn-sidenav-visible"),sidenav.classList.remove("visible")}})}},{key:"open",value:function(){this.classList.add("visible"),document.body.classList.add("mn-sidenav-visible"),window.MnBackdrop.show()}},{key:"close",value:function(){document.body.classList.remove("mn-sidenav-visible"),this.classList.remove("visible"),window.MnBackdrop.hide()}},{key:"toggle",value:function(){this.classList.toggle("visible")?window.MnBackdrop.show():window.MnBackdrop.hide(),document.body.classList.toggle("mn-sidenav-visible")}}]),MnSidenav}(HTMLElement);customElements.define("mn-sidenav",MnSidenav);
//# sourceMappingURL=mn-sidenav.js.map
