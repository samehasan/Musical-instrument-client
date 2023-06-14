import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://mils-server-samehasan.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://mils-server-samehasan.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
}

export default useClasses;