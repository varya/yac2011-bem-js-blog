/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'smooth'}, {

    onElemSetMod : {
        'content' : {
            'visibility' : {
                'visible' : function() {
                    var _this = this;
                    this.elem('content').slideDown(700);
                    this.afterCurrentEvent(function(){
                        _this.elem('content').css('display', '');
                    });
                }
            }
        }
}

});

})();
