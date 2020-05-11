### Day 26, React Routing

20200511, Julie Kwok

---

##### Notes

1. having `div` inside `Switch` triggers "React does not recognize the `computedMatch` prop on a DOM element" warning.

2. `fetch` in a component will be called every time there is an update, do remember to put it into a `useEffect` of something that does change often
   
3. There should be a `key` on the mapped elements, meaning, if the mapping returns `<><Something/></>`, there is a problem. To put a `key` props on a fragment, use `<React.Fragment key={something}><Something/></React.Fragment>`

4. There probably no way to eliminate 404 errors in console.
   
5. Putting the input form in highest z-index seems to be a good way to make sure that suggestion list is always on top

6. To pass props with  `Link`, see [this](https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4)

* * *
##### Difficulties
1. How not to change the width of div when the content is bolder in hover ? (ex, encyclopedia of trades project suggestion list)
   
2. 