
import { Node } from './interface';


export const Node0: Node  = {
	p: '',
	name: '',
	q : '',
	nodes: []
} 

export class TodoItemNode {
  children?: TodoItemNode[];
  item?: String;
  p?: String;
  selected?: boolean;
	
   constructor() {
	}	
 

}
