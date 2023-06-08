

const Instructorscard = ({item}) => {
    const {name, image,email} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '50px'}} className="w-[50px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{email}</p>
            </div>
            
        </div>
    );
};

export default Instructorscard;