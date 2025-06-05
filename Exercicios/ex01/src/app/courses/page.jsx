import Link from "next/link";

const courseList = ['HTML', 'CSS', 'JavaScript', 'Node.js' ,'Express', 'Next.js'];

export default function CoursesPage(){
    return (
        <div>
            <p className="mb-5">Lista de cursos</p>
            <ul>
                {courseList.map(course =>(
                    <li key={course}>
                        <Link href={`/courses/${course}`}> {course} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}