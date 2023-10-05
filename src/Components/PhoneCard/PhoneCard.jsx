import PropTypes from 'prop-types';


const PhoneCard = ({ phone }) => {
    const { brand, phone_name, image } = phone;
    return (
        <div className='phone-card logo react'>
            <img src={image} alt={phone_name} />
            <div>
                <h2>{phone_name}</h2>
                <h3>{brand}</h3>
            </div>
        </div>
    );
}

PhoneCard.propTypes = {
    phone: PropTypes.object.isRequired,
};

export default PhoneCard;