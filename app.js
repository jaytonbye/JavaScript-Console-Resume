let self = {
    name: "Jason Layton",
    career: "Entrepreneur",
    description: "I love so many things, I'm am passionate about my time on this earth and what I am doing with it.",
    interests: ['snowboarding','wrestling','piano','singing','coding','reading books','much more'],
    pastJobs: ['drug dealer', 'mob boss', 'cartel consigliere','international man of mystery'],
    skills: ['piano','writing','math','business','sales','freestyle rapping']
}

console.log(self.name.toUpperCase())
console.log(self.career)
console.log(self.description)
console.log('My Interests:')

for (interest of self.interests){
    console.log('*' + interest)
}

console.log('My previous experience:')

for (job of self.pastJobs){
    console.log('*' + job)
}

console.log('My skills:')