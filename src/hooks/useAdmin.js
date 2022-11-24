import { useEffect, useState } from "react"

const useAdmin = email => {
    // console.log('admin email', email)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    console.log('admin', isAdmin)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]
}

export default useAdmin;