/**
 * @module radio-option
 */

modules.define('radio-option', ['i-bem__dom', 'base-control'], function(provide, BEMDOM, BaseControl) {

/**
 * @exports
 * @class radio-option
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends radio-option.prototype */{
    onSetMod : {
        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
        }
    },

    _onPointerClick : function() {
        if(this.hasMod('disabled')) return;

        this.hasMod('mode', 'radio-check')?
            this.toggleMod('checked') :
            this.setMod('checked');
    }
}, /** @lends radio-option */{
    live : function() {
        this.liveBindTo('control', 'pointerclick', this.prototype._onPointerClick);
        return this.__base.apply(this, arguments);
    }
}));

});
