// Partial type which helps us making our object or interface or any properties optional
interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

// we can use class here but to demonstrate partial we are using it like this
function createCourseGoal(
    title: string,
    description: string,
    date:Date
): CourseGoal {
    // here with the help of partial we can create empty object making all the properties optional
    let courseGoal: Partial<CourseGoal> = {};
// here we can define that properties as well
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// Other type is Readonly type
const alpha: Readonly<string[]> = ['man', 'can'];
// we can define it with any type
// and we can achieve this on object too

// there are more utiltiy types - refer:https://www.typescriptlang.org/docs/handbook/2/generics.html