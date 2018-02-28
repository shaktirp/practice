// // Write a JavaScript function, treeToHTML(), which creates an HTML string representation of a given tree.  Input details:
// // The argument of treeToString is an array of pairs of string values.
// // Each string found anywhere in the input represents a unique node.
// // Each item in the input is a pair indicating a parent/child relationship in the tree.  The first element in the pair is the parent.  The second element in the pair is the child.
// // Each pair is represented as a two-element array.
// // Each parent can have many children.
// // The input array may contain relationship pairs in any order, although:
// // The order in which the pairs appear in the input array determines the nodes' order with respect to its siblings.
// // See below for an example.
// //
// // Output details:
// // Your output string should contain an HTML DIV block for each node in the tree.
// // Each DIV block should start with the name of the node in a SPAN block, followed by the DIV of each child node.
// // See below for an example.
// //
// // Please note: you may not use the DOM API for this problem, but you may use any features of the core JavaScript language.
// //
// // Code:
// // function treeToHTML(input) {
// // return // your code
// // }
// //
// //
// // Example input:
// // var input = [];
// //
// // input.push(['animal', 'mammal']);
// // input.push(['animal', 'bird']);
// // input.push(['lifeform', 'animal']);
// // input.push(['cat', 'lion']);
// // input.push(['mammal', 'cat']);
// // input.push(['animal', 'fish']);
// // input.push(['lifeform', 'vegetable']);
// // input.push(['lifeform', 'fish']);
// //
// //
// //
// //
// // myDiv.innerHTML = treeToString(input);
// //
// // Expected output:
// // <div>
// //     <span>lifeform</span>
// //     <div>
// //         <span>animal</span>
// //         <div>
// //             <span>mammal</span>
// //             <div>
// //                 <span>cat</span>
// //                 <div>
// //                     <span>lion</span>
// //                 </div>
// //             </div>
// //         </div>
// //         <div>
// //             <span>bird</span>
// //         </div>
// //         <div>
// //             <span>fish</span>
// //         </div>
// //     </div>
// // </div>
// //
// //
// function treeToString(input) {
//   var treeObj = createTree(input)
//
//   var htmlString = '< div > < span > '+treeObj['value'] + ' < /span>'
//   treeObj['children'].forEach(function (child) {
//     htmlString += generateDomString(child)
//   })
//   htmlString += ' < /div>'
//
//   return htmlString
// }
//
// function generateDomString(childNode) {
//   var tempHtmlString = ' < div > < span > '+childNode['value'] + ' < /span>'
//   childNode['children'].forEach(function (child) {
//     htmlString += generateDomString(child)
//   })
//   tempHtmlString += ' < /div>'
//
//   return tempHtmlString
// }
//
// function createTree(input) {
//   var obj = {}
//   var countOfNodeParent = {}
//   var countOfNodeChildren = {}
//   var parent
//   input.forEach(function (pair) {
//     for (key in pair) {
//       if (obj[key]) {
//         obj[key].push(pair[key])
//       } else {
//         obj[key] = [pair[key]]
//       }
//     }
//
//     if (countOfNodeParent[key]) {
//       countOfNodeParent[key] = countOfNodeParent[key] + 1
//     } else {
//       countOfNodeParent[key] = 1
//     }
//
//     if (countOfNodeChildren[pair[key]]) {
//       countOfNodeChildren[pair[key]] = countOfNodeChildren[pair[key]] + 1
//     } else {
//       countOfNodeChildren[pair[key]] = 1
//     }
//   })
//
//   for (key in countOfNodeParent) {
//     if (!countOfNodeChildren[key]) {
//       parent = key
//     }
//   }
//
//   var tree = {
//     'value': parent,
//     'children': []
//   }
//
//   obj[parent].forEach(function (childValue) {
//     tree['children'].push({
//       'value ': childValue,
//       'children': []
//     })
//   })
//
//   tree['children'].forEach(function (child, i) {
//     tree['children'][i] = generateTreeObj(child, obj)
//   })
//
//   return tree
// }
//
// function generateTreeObj(child, obj) {
//   var childNode = {
//     'value ': child,
//     'children': []
//   }
//   console.log(obj)
//   obj[child].forEach(function (child) {
//     childNode['children'].push({
//       'value': children,
//       'children': []
//     })
//   })
//
//   childNode['children'].forEach(function (child, i) {
//     childNode['children'][i] = generateTreeObj(child, obj)
//   })
//
//   return childNode
// }

var input = [];

input.push(['animal', 'mammal']);
input.push(['animal', 'bird']);
input.push(['lifeform', 'animal']);
input.push(['cat', 'lion']);
input.push(['mammal', 'cat']);
input.push(['animal', 'fish']);
input.push(['lifeform', 'vegetable']);
input.push(['lifeform', 'fish']);

function treeToString(input) {
  createTreeObject(input)
}

function createTreeObject(input) {
  var treeObject = {
    input[0][0]: [
      {
        input[0][1]: []
      }]
  }

  addToTree(input.slice(1), treeObject)
}

function addToTree(input, treeObject) {
  input.forEach(function(pair) {
    // If child
    if(treeObject[pair[0]]) {
      treeObject[pair[0]].push({
        pair[1]: []
      })
    }
    // if parent of tree parent
    else if (treeObject[pair[1]]) {
      treeObject = {
        pair[1]: [{
          treeObject[pair[0]: []
        }]
      }
    }
    // if not parent or child
    else {
      for (key in treeObject) {
        treeObject[key].forEach(function(child) {
          addToTree(input.slice(1), treeObject)
        })
      }
    }
  })
}
