import { useEffect, useState } from "react";

const useInstructors = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       // fetch('http://localhost:5000/menu')
       fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, [])
    return [menu, loading]
}

export default useInstructors;