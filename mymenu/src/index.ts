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
		return array.filter(s=>s.q === p).length > 0;
	}
	
	buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
		
		
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
		
		
		
		
		
		const res = this.array.filter(s=>s.q === z0).reduce((a, b: Item, index, arr: Item[]  ) =>{
				
				const n: Node = { p: b.p, name: b.name, q: b.q, nodes: [] };
				
				if (this.hasChild(this.array, b.p)){
					
					console.log('has child');
					
					this.array.filter(s=> s.q === b.p).forEach(f=>{
						n.nodes.push({p: f.p, name: f.name, q: f.q, nodes: []});
					})
					
				}
				a.nodes.push(n);	
				
				return a ;
		},this.node);
		
		console.log(res);
	}
}

export default MyMenu;