import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getEmployeeById } from "../../managers/employees"

import "./Employees.css"


export const EmployeeDetail = () => {
  const { employeeId } = useParams()

  const [employee, setEmployee] = useState({})

  useEffect(() => {
    getEmployeeById(employeeId).then(employeeData => setEmployee(employeeData[0]))
  }, [employeeId])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee?.name}</h3>
      <div>Currently working at {employee?.location?.name}</div>
      <div>
        {
          (employee?.animal)
          ? `Currently taking care of ${employee?.animal?.map(a => a.name).join(", ")}`
          : "Not assigned to any animals"
        }
      </div>
    </section>
  )
}
