/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'fade'}, {

    onElemSetMod : {
        'content' : {
            'visibility' : {
                'visible' : function() {
                    var _this = this;
                    this.elem('content').fadeIn(1400);
                    this.afterCurrentEvent(function(){
                        _this.elem('content').css('display', '');
                    });
                }
            }
        }
    }

});

})();
