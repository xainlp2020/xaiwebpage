import { Component, OnInit, Inject, Type } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import xaipapers from "../../assets/data/xaipapers.json";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { TreeNode, TREE_DATA } from '../treedata'

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  image: string;
  text: string;
}

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

export interface DialogData
{
  title: string,
  authors: string,
  year: string,
  venue: string,
  main_explainability: string,
  main_visualization: string,
  citation: string,
  link: string,
  placement: string,
  xai_type: string,
  nlp_task_1: string,
  parts_covered: string,
  type: string,
  evaluation_metrics: string,
  operations: string
}
@Component({
  selector: 'paper-view-dialog',
  templateUrl: 'paper-view-dialog.html'
})
export class paperViewDialog{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

export interface defData
{
  name: string
}
@Component({
  selector: 'definition-view-dialog',
  templateUrl: 'definition-view-dialog.html'
})
export class defViewDialog{
  constructor(@Inject(MAT_DIALOG_DATA) public data: defData) {}
}



@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  countries = COUNTRIES;

  papers = xaipapers;

  viewDefinition(technique) {
    var tech = {
      'name': technique
    }
    this.dialog.open(defViewDialog, {
      data: tech
    });
  }

  viewPaper(selectedPaper, xai_type) {
    selectedPaper["xai_type"] = xai_type
    console.log("xai_type "+ xai_type);
    this.dialog.open(paperViewDialog, {
      data: selectedPaper
    });
  }
  private _transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      image: node.image,
      text: node.text
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
    console.log(xaipapers);
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
