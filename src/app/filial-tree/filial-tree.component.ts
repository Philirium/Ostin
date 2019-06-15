import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Филлиал',
    children: [
      {name: 'Магазин ул.Гагарина', children: [
        {name: 'работники',
          children: [
            {name: 'Сафронов'},
            {name: 'Михаилов'},
            {name: 'Ленин'},
            {name: 'Лебедев'},
            {name: 'Авчинников'},
            {name: 'Полижаев'},
            {name: 'Миронов'},
            {name: 'Потапов'},
    ]
    }]},
      {name: 'Магазин ул.Шевченко'},
      {name: 'Магазин р-н Шереметево'},
   ]} 
  ];
  


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-filial-tree',
  templateUrl: './filial-tree.component.html',
  styleUrls: ['./filial-tree.component.css']
})
export class FilialTreeComponent implements OnInit {
  
  addNode(node){
    console.log(node)
  }


  private _transformer = (node: FoodNode, level: number) => {
    
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
  
  ngOnInit() {
  }

}
