// Write your solution in this file!
const employee = {
  name: "John Doe",
  streetAddress: "Microsoft",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const employeeClone = { ...employee };
  employeeClone[key] = value;
  return employeeClone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const employeeClone = { ...employee };
  delete employeeClone[key];
  return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
