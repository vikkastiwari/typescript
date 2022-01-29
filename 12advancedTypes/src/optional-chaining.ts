const fetchedUser = {
    id: "123",
    name: "Bob",
    job:{title:"CEO", desc:"My Company"} // suppose in place of this we are fetching it from backend
}

// typical way
// here if job not found then the further code is skipped and we are saved from run time error
console.log( fetchedUser.job && fetchedUser.job.title );

// optional chaining
// here it checks it before it tries to access it
console.log(fetchedUser?.job?.title );
