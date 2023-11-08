import React from 'react'

function List(props) {
  return (
    <>
    <div className="tasks">
              <ol onClick={props.handleDelete}>
                {props.tasks.map((task, index) => (
                  <li key={index} data-key={index}>
                    {task} <span className="cross">&#10060;</span>
                  </li>
                ))}
              </ol>
            </div>
    </>
  )
}

export default List