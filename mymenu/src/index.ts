import { Node0, TodoItemNode } from "./constant";
import { Item } from "./interface";
import { Node } from "./interface";



class MyMenu {

	private array: any[] = [];

	private node: Node = Node0;


	constructor(element: Element | string) {

		this.init();
	}

	private hasChild = (array: Item[], p: String) => {
		return array.filter(s => s.q === p).length > 0;
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

		return array.filter(a=>a.q === p).reduce<Node[]>((accumulator, key: Item) => {
			const node: Node = { p: key.p, name: key.name, q: key.q, nodes: [] };
			if (array.filter(f => f.q === key.p).length > 0){
				node.nodes = this.buildNode(array, key.p);
			}
		
			return accumulator.concat(node);	
		}, [])

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


		const res: Node[] = this.buildNode(this.array, '0');

		console.log(res);
	}
}

export default MyMenu;