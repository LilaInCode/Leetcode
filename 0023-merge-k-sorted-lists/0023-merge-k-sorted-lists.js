/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let current= new ListNode(-1);
    let newList=new ListNode(-1);

    let newArr=[];
    for(let i=0;i<lists.length;i++){
        current=lists[i];
        while(current!=null){
            newArr.push(current.val)
            current=current.next
        }  
    }
    newArr.sort((a, b) => a - b);
    let temp = newList;
for(let j=0; j<newArr.length;j++){
    newList.next=new ListNode(newArr[j]);
    newList=newList.next;
}
    return temp.next;
};