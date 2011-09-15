/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'fade'}, {

    onElemSetMod : {
        'content' : {
            'visibility' : {
                'visible' : function(elem) {
                    elem.fadeIn(1400, function(){
                        elem.css('display', '')
                    });
                }
            }
        }
    }

});

})();
