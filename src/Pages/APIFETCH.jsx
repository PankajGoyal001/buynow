import React, { Fragment, useEffect, useState } from 'react'

function Header() {
    const [users, setUsers] = useState();
  console.log(users)
  useEffect(() => {
    const data = async () => {
      try {
        const user = await fetch('https://api.slingacademy.com/v1/sample-data/photos')
          .then(res => res.json())
          .then(res => setUsers(res.photos))

      } catch (error) {
        console.log(error)
      }
    }
    data();
  }, [])
  return (
    <div>
      {
        users?.map((item, index) => (
          < Fragment key={index}>
            <p>{item.title}</p>
            <img src={item.url} alt="" />
          </ Fragment>
        ))
      }
    </div>
  )
}

export default Header