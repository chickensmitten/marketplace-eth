import courses from "./index.json"

// this code converts array to hash based on id.
// test it in browser inspect
// const data = <the json file>
// then 
// const ew = data.reduce((a,c,i) => {
//   console.log(a[c.id])
//   a[c.id] = c
//   console.log(a[c.id].index)
//   a[c.id].index = i
//   return a;
// }, {})

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce((a,c,i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }
}
