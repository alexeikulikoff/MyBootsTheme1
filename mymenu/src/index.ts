import { TodoItemNode } from "./constant";
import { IStore, Item } from "./interface";
import { Node } from "./interface";

import { createStore } from 'redux';


const initialState: IStore = {
	value: 0
};

const store = createStore(counterReducer);


function counterReducer(state = initialState, action: { type: any; }) {
	// Reducers usually look at the type of action that happened
	// to decide how to update the state
	switch (action.type) {
		case "counter/incremented":
			return { ...state, value: state.value + 1 };
		case "counter/decremented":
			return { ...state, value: state.value - 1 };
		default:
			// If the reducer doesn't care about this action type,
			// return the existing state unchanged
			return state;
	}
}


class MyMenu {

	private array: any[] = [];
	
	

	constructor(element: Element | string) {
       
		
		this.init();

		this.render();

		store.subscribe(this.render);
		
		const btn1 = document.getElementById("increment")!;
			btn1.addEventListener("click", function() {
				store.dispatch({ type: "counter/incremented" });
			});

		document
			.getElementById("decrement")!
			.addEventListener("click", function() {
				store.dispatch({ type: "counter/decremented" });
			});


	}

	render() {
		const state = store.getState();
		const valueEl = document.getElementById("value")!;
		valueEl.innerHTML = state.value.toString();
	}
	buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {


		return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
			const value = obj[key];
			const node = new TodoItemNode();
			node.item = key;

			if (value != null) {
				if (typeof value === 'object') {
					node.children = this.buildFileTree(value, level + 1);
				} else {
					node.item = value;
				}
			}

			return accumulator.concat(node);
		}, []);
	}



	private buildNode(array: Item[], p: String): Node[] {

		return array.filter(a => a.q === p).reduce<Node[]>((accumulator, key: Item) => {
			const node: Node = { p: key.p, name: key.name, q: key.q, nodes: [] };
			if (array.filter(f => f.q === key.p).length > 0) {
				node.nodes = this.buildNode(array, key.p);
			}

			return accumulator.concat(node);
		}, [])

	}
	private printNode(node: Node[]): string {

		let ul: string = "<ul>";
		node.forEach(n => {

			ul = ul.concat(`<li id='${n.p}'>${n.name}</li>`);
			if (n.nodes.length > 0) {
				ul = ul.concat(`<li>`);
				ul = ul.concat(this.printNode(n.nodes));
			}
		})
		ul = ul.concat(`</ul>`);
		return ul;

	}
	private init(): void {
		console.log('init');

		this.array.push({ p: '1', name: 'root0', q: '0' });
		this.array.push({ p: '2', name: 'root1', q: '0' });
		this.array.push({ p: '3', name: 'root2', q: '0' });

		this.array.push({ p: '4', name: 'root4', q: '1' });
		this.array.push({ p: '5', name: 'root5', q: '1' });

		this.array.push({ p: '6', name: 'root6', q: '4' });
		this.array.push({ p: '7', name: 'root7', q: '4' });

		let z0: String = '0';


		const node: Node[] = this.buildNode(this.array, '0');

		const print = this.printNode(node);

		const element = document.getElementById("list")!;
		element.innerHTML = print;


		console.log(print);
	}
}

export default MyMenu;