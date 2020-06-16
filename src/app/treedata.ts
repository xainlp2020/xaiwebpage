export interface TreeNode{
  name: string;
  children?: TreeNode[];
  image?: string;
  text?: string;
}

export const TREE_DATA: TreeNode[] = [
  {
    name: 'Local Post-Hoc', image: '../assets/placeholder.png', text:'definition',
    children: [
      {name: 'feature importance', image: '../assets/placeholder.png', text:'definition'},
      {name: 'surrogate model', image: '../assets/placeholder.png', text:'definition'},
      {name: 'example driven', image: '../assets/placeholder.png', text:'definition'},
    ]
  }, {
    name: 'Local Self-Explaining', image: '../assets/placeholder.png', text:'definition',
    children: [
      {
        name: 'feature importance', image: '../assets/placeholder.png', text:'definition',
        children: [
          {name: 'saliency', image: '../assets/placeholder.png', text:'definition'},
        ]
      }, {
        name: 'surrogate model', image: '../assets/placeholder.png', text:'definition',
        children: [
          {name: 'natural language', image: '../assets/placeholder.png', text:'definition',},
          {name: 'feature importance', image: '../assets/placeholder.png', text:'definition',},
        ]
      },
    ]
  },
];
