define(["utils/utils"],function(a){return Backbone.View.extend({colors:{standard:["c00000","ff0000","ffc000","ffff00","92d050","00b050","00b0f0","0070c0","002060","7030a0"],base:["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646"],theme:[["f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada"],["d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5"],["bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","92cddc","fac08f"],["a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","31859b","e36c09"],["7f7f7e","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","205867","974806"]]},initialize:function(b){this.options=a.merge(b,{}),this.setElement(this._template()),this.$panel=this.$(".ui-color-picker-panel"),this.$view=this.$(".ui-color-picker-view"),this.$value=this.$(".ui-color-picker-value"),this.$header=this.$(".ui-color-picker-header"),this._build(),this.visible=!1,this.value(this.options.value),this.$boxes=this.$(".ui-color-picker-box");var c=this;this.$boxes.on("click",function(){c.value($(this).css("background-color")),c.$header.trigger("click")}),this.$header.on("click",function(){c.visible=!c.visible,c.visible?c.$view.fadeIn("fast"):c.$view.fadeOut("fast")})},value:function(a){return void 0!==a&&null!==a&&(this.$value.css("background-color",a),this.$(".ui-color-picker-box").empty(),this.$(this._getValue()).html(this._templateCheck()),this.options.onchange&&this.options.onchange(a)),this._getValue()},_getValue:function(){function a(a){return("0"+parseInt(a).toString(16)).slice(-2)}var b=this.$value.css("background-color");return b=b.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),b?"#"+a(b[1])+a(b[2])+a(b[3]):null},_build:function(){this._content({colors:this.colors.base});for(var a in this.colors.theme){var b={};0==a?b.bottom=!0:a!=this.colors.theme.length-1?(b.top=!0,b.bottom=!0):b.top=!0,b.colors=this.colors.theme[a],this._content(b)}this._content({colors:this.colors.standard})},_content:function(a){var b=a.colors,c=$(this._templateContent()),d=c.find(".line");this.$panel.append(c);for(var e in b){var f=$(this._templateBox(b[e]));a.top&&(f.css("border-top","none"),f.css("border-top-left-radius","0px"),f.css("border-top-right-radius","0px")),a.bottom&&(f.css("border-bottom","none"),f.css("border-bottom-left-radius","0px"),f.css("border-bottom-right-radius","0px")),d.append(f)}return c},_templateCheck:function(){return'<div class="ui-color-picker-check fa fa-check"/>'},_templateContent:function(){return'<div class="ui-color-picker-content"><div class="line"/></div>'},_templateBox:function(a){return'<div id="'+a+'" class="ui-color-picker-box" style="background-color: #'+a+';"/>'},_template:function(){return'<div class="ui-color-picker"><div class="ui-color-picker-header"><div class="ui-color-picker-value"/><div class="ui-color-picker-label">Select a color</div></div><div class="ui-color-picker-view ui-input"><div class="ui-color-picker-panel"/></div>'}})});
//# sourceMappingURL=../../../maps/mvc/ui/ui-color-picker.js.map