/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-cut', modName: 'animation', modVal: 'smooth'}, {

    onElemSetMod : {
        'content' : {
            'visibility' : {
                'visible' : function(elem) {
                    elem.slideDown(1400, function(){ elem.css('display', '')});
                }
            }
        }
}

});

})();
