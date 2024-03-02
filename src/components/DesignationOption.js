import React from 'react'

const designations = {
  HumanResources: [
    'HR Manager',
    'HR Generalist',
    'HR Recruitment Specialist',
    'HR Training and Development Coordinator',
    'HR Compensation and Benefits Analyst',
    'HR Assistant'
  ],
  InformationTechnology: [
    'Chief Information Officer',
    'IT Manager',
    'Systems Administrator',
    'Network Engineer',
    'Software Developer',
    'IT Support Specialist',
  ],
  Finance: [
    'Chief Financial Officer',
    'Finance Manager',
    'Finance Accountant',
    'Financial Analyst',
    'Financial Controller'
  ],
  Marketing: [
    'Chief Marketing Officer',
    'Marketing Manager',
    'Digital Marketing Specialist',
    'Content Creator',
    'Marketing Analyst',
    'Public Relations Specialist'
  ],
  Sales: [
    'Chief Sales Officer',
    'Sales Manager',
    'Sales Representative',
    'Account Executive',
    'Sales Support Coordinator'
  ]
}

const DesignationOption = (props) => {
  const items = designations[props.department] || [];

  return (
    <>
      {items.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </>
  )
}

export default DesignationOption