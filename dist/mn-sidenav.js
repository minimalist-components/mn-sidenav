"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnSidenav=function(_HTMLElement){function MnSidenav(self){var _this,_ret;return _classCallCheck(this,MnSidenav),self=_this=_possibleConstructorReturn(this,(MnSidenav.__proto__||Object.getPrototypeOf(MnSidenav)).call(this,self)),_this.setOpenEvents(),_this.setCloseEvents(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnSidenav,_HTMLElement),_createClass(MnSidenav,[{key:"setOpenEvents",value:function(){var buttons=document.querySelectorAll('button[sidenav="'+this.id+'"]'),open=this.open;Array.from(buttons).forEach(function(button){return button.addEventListener("click",open)})}},{key:"setCloseEvents",value:function(){var close=this.close;document.body.addEventListener("click",close),document.addEventListener("keyup",function(){var esc=27===event.keyCode,isOpened=document.body.classList.contains("mn-sidenav-visible");if(esc&&isOpened){var sidenav=document.querySelector("mn-sidenav.visible");document.body.classList.remove("mn-sidenav-visible"),sidenav.classList.remove("visible")}})}},{key:"open",value:function(event){var id=event.target.getAttribute("sidenav"),sidenav=document.querySelector("mn-sidenav#"+id);sidenav.classList.add("visible"),document.body.classList.add("mn-sidenav-visible")}},{key:"close",value:function(event){event.stopPropagation();var clickButtonClose=event.target.getAttribute("data-close-sidenav"),clickOutside="BODY"===event.target.tagName,sidenav=document.querySelector("mn-sidenav.visible");(clickButtonClose||clickOutside)&&sidenav&&(document.body.classList.remove("mn-sidenav-visible"),sidenav.classList.remove("visible"))}}]),MnSidenav}(HTMLElement);customElements.define("mn-sidenav",MnSidenav);
//# sourceMappingURL=mn-sidenav.js.map
