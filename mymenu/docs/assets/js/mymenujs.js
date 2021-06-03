/*!
* mymenujs - v1.3.0
* MetisMenu: Collapsible menu plugin with Vanilla-JS
* https://github.com/onokumus/mymenujs#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MyMenu = factory());
}(this, (function () { 'use strict';

    const Node0 = {
        p: '',
        name: '',
        q: '',
        nodes: []
    };
    class TodoItemNode {
        constructor() {
        }
    }

    class MyMenu {
        constructor(element) {
            this.array = [];
            this.node = Node0;
            this.hasChild = (array, p) => {
                return array.filter(s => s.q === p).length > 0;
            };
            this.init();
        }
        buildFileTree(obj, level) {
            return Object.keys(obj).reduce((accumulator, key) => {
                const value = obj[key];
                const node = new TodoItemNode();
                node.item = key;
                if (value != null) {
                    if (typeof value === 'object') {
                        node.children = this.buildFileTree(value, level + 1);
                    }
                    else {
                        node.item = value;
                    }
                }
                return accumulator.concat(node);
            }, []);
        }
        buildNode(array, p) {
            return array.filter(a => a.q === p).reduce((accumulator, key) => {
                const node = { p: key.p, name: key.name, q: key.q, nodes: [] };
                if (array.filter(f => f.q === key.p).length > 0) {
                    node.nodes = this.buildNode(array, key.p);
                }
                return accumulator.concat(node);
            }, []);
        }
        init() {
            console.log('init');
            this.array.push({ p: '1', name: 'root0', q: '0' });
            this.array.push({ p: '2', name: 'root1', q: '0' });
            this.array.push({ p: '3', name: 'root2', q: '0' });
            this.array.push({ p: '4', name: 'root4', q: '1' });
            this.array.push({ p: '5', name: 'root5', q: '1' });
            this.array.push({ p: '6', name: 'root6', q: '4' });
            this.array.push({ p: '7', name: 'root7', q: '4' });
            const res = this.buildNode(this.array, '0');
            console.log(res);
        }
    }

    return MyMenu;

})));
//# sourceMappingURL=mymenujs.js.map
