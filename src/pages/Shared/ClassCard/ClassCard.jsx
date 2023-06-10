const ClassCard = ({clas}) => {
    const {name,image,instructor,price} = clas;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '50px'}} className="w-[50px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{instructor}</p>
                <p>Class:{price} class</p>
            </div>
            
        </div>
    );
};

export default ClassCard;