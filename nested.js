const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibo1s', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(college.unique.color)
console.log(college.unique.result.gpa)
console.log(college.unique.result.merit = 'top top top most')
console.log(college.unique.result.merit)

// console.log(college.events = '16 december')
college.events[1] = '16 December'
console.log(college.events[1])
delete college.class
console.log(college)