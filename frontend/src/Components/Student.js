import './Student.css'

function Student(props){
    const {student} = props

    const{name , id , department, domain , phone, email} = student
    return(
            <div className="student-card">
                <p className="student-name">{name}</p>
                <p className="student-id">{id}</p>
                <p className="student-info">{department}</p>
                <p className="student-info">{domain}</p>
                <p className="student-info">{phone}</p>
                <p className="student-info">{email}</p>
            </div>
    )
}
export default Student