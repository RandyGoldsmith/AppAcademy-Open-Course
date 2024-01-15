# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: No matter how big n is, that is no matter how big the array gets with 5 elements or 500, we are only adding on 1 element at the end of the array. Adding an element to the end of the array will not affect n whether its really big or really small so its constant time. For SC (space complexity) the method just modifies the existing array and does not create or copy a new array.

[push on MDN][push]

## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Same as above, the time complexity does not depend on how big n is (how big the array is). It will not change no matter how big or small n is since once the length is updated, we remove the last element in an array. For SC, see above.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Time complexity is linear since when we add an element to the front of the array, it shifts each element in the array by 1 (it increaes its index by 1 for each and every element in the array). Since it shifts every element in the array once, n grows linearly and depends how big the array is each time an element is added to teh beginning of the array. For SC, the method removes an element from the front of array and then shifts all the elements within the array and this is all done in place. It modifies the existing array and does not require any additional memory requirements.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Time complexity is same as above but we are removing the first element in an array which will still shift every element in the array "to the left" by 1 affecting all values in the array which means n depends on how big the array is since it touches all values. For SC, it is the same as above.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: TC is affected by either the number of elements removed or added, making the method dependent on n elements. SC is also linear as the method depends on the addition or removal of elements. Doing either or both depends on the size of the array.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: TC is linear since slice returns either a full copy of the original array or a portion of the array which means it depends on how big n, or the array is. For SC, slice creates a new array to store the sliced elements. The number of elements in the array is dependent upon what is sliced. In other words, the space complexity is linear as it depends on how many elements are sliced.
[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: TC is linear since worst case scenerio is we have to traverse the whole length of the array if a match is not found. The time complexity depends on the size of n. We do not create any additional data structures as the method just traverses the array and returns a number based on if the stated element is found.

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Time complexity is linear since the method has to go through all the elements once. SC is O(n) b/c the method calls a provided callback fn once on each element. Therefore, a new array is created based on the size of the original array.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Time complexity same as above, have to go through all the elements in the array once. SC is the same as above, a callback fn is initiated once on each element in the array and returns a new array with the same number of elements as the original.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Time complexity is the same as above, have to go through all the elements in the array once. For SC, the method uses a single variable to accumulate the elements in the array. No new array or data structures are created.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Time complexity is linear since the method transforms the array in place and depends on the input values on n (how large or small the array is). SC is constant since it transform the original array in place and doesn't depend on the size of the array.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: Time complexity is linear since the array method copies each element in the original array to the new array. SC is linear bc it directly copies the elements from the old array to a new array making it directly proportional to the size of the input array.

[spread on MDN][spread]

[push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
