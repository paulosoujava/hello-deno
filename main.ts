import {serve} from "https://deno.land/std/http/server.ts"
import {Employee} from './employee.ts'
const server = serve({port:8080})

console.log(`server is running on localhost:8080`);

const employees: Employee[] =[]
employees.push(new Employee(12, "PAULAO"))
employees.push(new Employee(13, "BRUNA"))
employees.push(new Employee(14, "MALU"))

for await(const req of server){
  req.respond({body:JSON.stringify(employees)})
}

